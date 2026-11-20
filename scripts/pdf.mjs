/**
 * Makes the downloadable PDFs: every version × language of the built site (dist/), printed by headless Chromium onto
 * A4 pages – the desktop layout (1180 CSS px wide) scaled to the paper's width, vector text, no switches.
 * Written to dist/cv/Erika-Rostas-CV-<mode>-<lang>.pdf, which the PDF button of the toolbar links to (Toolbar.tsx).
 *
 * Usage (after `bun run build`): bun run pdf
 * Uses Playwright's own Chromium when it is installed (CI: `bunx playwright install chromium`), otherwise the Chrome
 * or Edge installed on the computer.
 */
import { createReadStream, existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { chromium } from 'playwright'

const DIST = resolve('dist')
const OUT = join(DIST, 'cv')
/** Layout width of the PDF in CSS px: the desktop layout, as wide as the page gets on screen. */
const LAYOUT_WIDTH = 1180
const MM = 96 / 25.4 // CSS px per millimetre
/** A4 (210 × 297 mm), printed at this scale so the layout is LAYOUT_WIDTH wide. */
const SCALE = (210 * MM) / LAYOUT_WIDTH
/** Height of a page in layout px: the first one whole, the others below their 12 mm top margin (@page in index.css). */
const FIRST_PAGE = (297 * MM) / SCALE
const NEXT_PAGE = ((297 - 12) * MM) / SCALE

const VERSIONS = [
  ['pro', 'en'],
  ['pro', 'hu'],
  ['fun', 'en'],
  ['fun', 'hu'],
]

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
}

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('dist/ is missing – run `bun run build` first.')
  process.exit(1)
}

/** A tiny static server for dist/ (the site uses relative URLs, so it works from any path). */
const server = createServer((request, response) => {
  const path = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname)
  let file = normalize(join(DIST, path))
  if (!file.startsWith(DIST)) {
    response.writeHead(403).end()
    return
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) {
    response.writeHead(404).end()
    return
  }
  response.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
  createReadStream(file).pipe(response)
})
await new Promise((done) => server.listen(0, '127.0.0.1', done))
const { port } = server.address()

async function launch() {
  try {
    return await chromium.launch()
  } catch {
    for (const channel of ['chrome', 'msedge']) {
      try {
        return await chromium.launch({ channel })
      } catch {
        // try the next one
      }
    }
    throw new Error('No Chromium found: run `bunx playwright install chromium`, or install Chrome.')
  }
}

const countPages = (pdf) => pdf.toString('latin1').match(/\/Type\s*\/Page(?![a-z])/g)?.length ?? 0

/** Lets the page settle (fonts, images, the fun page rainbow measured again). */
const settle = (page) =>
  page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})))
    window.dispatchEvent(new Event('resize'))
    await new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done)))
  })

const print = (page) => page.pdf({ format: 'A4', scale: SCALE, printBackground: true })

const browser = await launch()
try {
  mkdirSync(OUT, { recursive: true })
  for (const [mode, lang] of VERSIONS) {
    const page = await browser.newPage({ viewport: { width: LAYOUT_WIDTH, height: 1000 } })
    await page.goto(`http://127.0.0.1:${port}/?mode=${mode}&lang=${lang}`, { waitUntil: 'networkidle' })
    // Print layout before measuring, so the fun page rainbow is coloured for the page as it will be printed.
    await page.emulateMedia({ media: 'print', reducedMotion: 'reduce' })
    await settle(page)

    // First print: how many pages. Then make the page exactly that many pages high, so the footer and the bottom-left
    // shapes sit at the bottom of the last page (data-pdf in index.css) – unless that would add a page.
    const plain = await print(page)
    const pages = countPages(plain)
    await page.evaluate((height) => {
      document.documentElement.style.setProperty('--pdf-height', `${height}px`)
      document.documentElement.dataset.pdf = ''
    }, FIRST_PAGE + (pages - 1) * NEXT_PAGE - 1)
    await settle(page)
    let pdf = await print(page)
    if (countPages(pdf) !== pages) pdf = plain

    const file = join(OUT, `Erika-Rostas-CV-${mode}-${lang}.pdf`)
    writeFileSync(file, pdf)
    console.log(`${file}: ${pages} pages, ${Math.round(pdf.length / 1024)} KB${pdf === plain ? ' (footer left in place)' : ''}`)
    await page.close()
  }
} finally {
  await browser.close()
  server.close()
}
