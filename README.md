# rika-cv

My CV as a small React app – with a switch between the **professional** and the **fun** version,
working just like a dark/light theme toggle, in **Hungarian** and **English**.

| Pro | Fun |
| --- | --- |
| black & white, pill-shaped section titles fading from black to dark grey down the page, Archivo Black + Montserrat | the colours of the original PDF (pink header, crimson ring, lilac footer) and a page-wide rainbow from crimson at the top to violet at the bottom, with clay-look flower, butterfly and star stickers; Short Stack + Kode Mono 🦄 |

The page has a **header** (photo, name, title, introduction), a two-column body (contact, expertise, languages |
experience, projects, education) and a **footer** (skill rings in one row, and the small print: a playful one in the
fun version, a serious one in the pro version).

## Stack

- [Bun](https://bun.sh) – package manager & script runner
- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) – the two versions are a custom `fun:` variant
- [oxlint](https://oxc.rs) for linting, self-hosted fonts via [Fontsource](https://fontsource.org)

## Scripts

```bash
bun install      # install dependencies
bun dev          # dev server on http://localhost:2739
bun run build    # type-check + production build into dist/
bun run preview  # serve the production build
bun run lint     # oxlint
bun run pdf      # after a build: print the six PDFs and the static text HTML into dist/cv/ (headless Chrome via Playwright)
```

## The PDFs

The PDF button in the toolbar downloads the version and language on screen as a PDF (`Erika-Rostas-CV-<mode>-<lang>.pdf`).
The four PDFs are made at deploy time by `scripts/pdf.mjs`: headless Chromium (Playwright) prints the built site onto
A4 pages – the desktop layout, 1180 px wide, scaled to the paper's width, with vector text and without the switches.
The print rules in `src/index.css` keep blocks whole, give the pages after the first a little room at the top, and put
the footer at the bottom of the last page. Locally the script uses the installed Chrome or Edge.

### The plain-text CV

Next to the designed PDFs there is a plain version of the pro CV, made from the same data (`src/components/PlainCv.tsx`,
opened with `?view=text&lang=en|hu`): one column, standard section titles (Summary, Skills, Projects, Work Experience,
Education, Languages), plain fonts, real links, no skill graphics, only the chosen language, and the phone number kept
private. `scripts/pdf.mjs` prints it to `dist/cv/Erika-Rostas-CV-text-<lang>.pdf` (the toolbar's **Text** button) and
saves it as static HTML, `dist/cv/text-<lang>.html`, which works without JavaScript – `index.html` links to both
(`<link rel="alternate">` and a `<noscript>` note). It is meant to be easy for applicant tracking systems to read, but no
such system is guaranteed to parse it well.

The main page itself is still rendered in the browser, with every version stacked (the hidden ones `inert`); it is not
prerendered, so crawlers that don't run JavaScript get the static HTML above instead.

## Pro version: content and layout

- The title has two parts, `Full-stack Developer | AI-Assisted Software Engineering`: each part gets its own line.
- The right column starts with the own project (the board game), followed by the development work and, in a section
  of its own, the other jobs (`otherExperience`). The fun version keeps one list of jobs, then the projects.
- The contact list has a fifth row, the GitHub profile; contact links are not underlined.
- Skills are groups without percentages (`skillGroups`); the fun version keeps its playful rings.

## Link previews

`index.html` has a description, a canonical URL, Open Graph and Twitter Card tags with absolute URLs (the site lives
under `/rika-cv/`) and a preview image, `public/og-image.jpg` (1200 × 630, made from the pro photo). The tags are static,
so every shared link previews the English pro CV.

## How the switch works

- `<html data-mode="pro|fun">` holds the current version. Every visit starts in **pro**; a `?mode=fun` link opens
  the fun one, and a reload keeps the version chosen in that browser tab (sessionStorage – a new visit or a shared link
  starts in pro again). In the pro version a little bubble under the switch, and a link in the footer, remind visitors
  that there is a fun version too. The inline script in `index.html` sets it before the first paint, so there is no flash.
- `src/index.css` defines `@custom-variant fun (...)` – base classes are the pro look, `fun:` overrides them,
  exactly like `dark:`. Colours and fonts are CSS variables that swap per mode (`bg-band-top`, `font-heading`, …).
- `src/hooks/useMode.ts` toggles the mode and plays a circular reveal from the switch using the View Transitions API
  (touch screens: a quick fade; nothing with reduced motion). The reader stays at the same place (`keepPlace.ts`),
  and the decorative blocks come in again as on a first visit (`replayDesign` in `reveal.ts`).
- Every CV block is a `VersionSlot`: all versions *and both languages* are rendered on top of each other (the hidden one is
  `invisible` + `inert`, marked `data-version`, which the `fun:` variant respects). The slot is as tall as the
  taller version, so the bands, title bars and corner shapes are in exactly the same place in both versions and
  the switch only recolours them. The experience, projects and education blocks are not stacked (`stacked={false}`):
  their versions differ so much in length that the shorter one would leave a big empty gap.

## Animations

- Shapes and blocks animate in when they scroll into view: `ref={reveal}` + `data-reveal="<kind>"`
  (`src/hooks/reveal.ts`, one shared IntersectionObserver), the motion itself is CSS in `src/index.css`:
  corner shapes slide in from outside the page, the photo ring pops and its bar slides in along the diagonal,
  the colour bands wipe in, section bars grow from the middle, lists rise in one by one, skill rings fill up.
- Skill rings fill again whenever their version becomes the visible one.
- Fun version: the butterflies flutter away when the mouse comes close, and now and then while scrolling, then settle
  back (`src/hooks/butterflies.ts`; each one rests a while after a flight).
- Nothing moves with `prefers-reduced-motion: reduce`, and nothing is hidden in print.
- The CV texts live in `src/data/<lang>/pro.ts` and `fun.ts` (same `Cv` type), per-language contact and job
  details in `src/data/<lang>/common.ts`, language-independent bits in `src/data/shared.ts`.

## How the language switch works

- A visit starts in **English**; a `?lang=hu` link opens the Hungarian one (combinable with `?mode=fun`), and a reload
  keeps the language chosen in that tab.
- `src/hooks/useLang.ts` switches it,
  sets `<html lang>` for hyphenation and screen readers, and cross-fades the page.
- Interface texts (section titles, labels, tooltips, page title) are in `src/i18n/ui.ts`;
  components read them with `useText()`.
- Short Stack (fun headings) has no `ő`/`ű`, so Comic Relief fills in just those glyphs.

## Project structure

```
src/
  App.tsx              layout: header band, body (2 columns on desktop, stacked on phones), footer band
  components/          Header, Photo, Sidebar, Experience, Skills, Toolbar (switches), Decorations,
                       Blooms + stickers.ts (the fun version's flower, butterfly and star stickers), Footer (small print),
                       VersionSlot (both versions stacked), bands.ts (the colour bands)
  data/en, data/hu     CV content for both versions, per language
  i18n/                interface texts + useText()
  hooks/useMode.ts     the pro ↔ fun switch
  hooks/useLang.ts     the HU ↔ EN switch
  hooks/reveal.ts      scroll-in animations
  hooks/pageOmbre.ts   the page ombre: title pills, contact icons and bullets coloured by their height (fun: a rainbow, pro: black to grey)
  index.css            Tailwind import, theme tokens, `fun:` variant, animations
  assets/stickers/     the stickers, cut out of one sticker sheet (transparent WebP)
archive/RikaCV-canva-masked.pdf   the old, outdated print version (not deployed)
```

## Deploy

The site lives at **https://mazsola739.github.io/rika-cv/**.

`.github/workflows/deploy.yml` lints and builds every push and pull request; every push to `main` (and a manual run
from the Actions tab) is also published to GitHub Pages. The Vite `base` is relative (`./`), so the build works under
any sub-path (here `/rika-cv/`).

## License

The code is under the [MIT License](LICENSE). The content of the CV (texts and photo) is mine and not covered by it: all rights reserved.
The stickers (the flowers and the butterflies, `src/assets/stickers/`) were made with AI and are not covered by it either.
The preview image (`public/og-image.jpg`) shows the photo, so it is not covered by it either.
