import { useEffect, useState } from 'react'
import type { Lang, Mode } from '../data/types'
import type { Point } from '../hooks/useMode'
import { useText } from '../i18n/context'
import { ui } from '../i18n/ui'
import { BriefcaseIcon, DownloadIcon } from './icons'

interface ToolbarProps {
  mode: Mode
  lang: Lang
  onToggleMode: (origin: Point) => void
  onToggleLang: () => void
}

const pdfUrl = `${import.meta.env.BASE_URL}RikaCV.pdf`

/** The PDF download is switched off until the PDF is regenerated from the page (the current one is outdated). */
const SHOW_PDF = false

const pill =
  'flex h-11 cursor-pointer items-center rounded-full bg-white/90 text-xs font-semibold tracking-wider uppercase shadow-lg ring-1 ring-black/10 backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 fun:focus-visible:outline-uni-hotpink'

const LANG_ORDER: Lang[] = ['hu', 'en']

export function Toolbar({ mode, lang, onToggleMode, onToggleLang }: ToolbarProps) {
  const t = useText()
  const isFun = mode === 'fun'
  const otherLang: Lang = lang === 'hu' ? 'en' : 'hu'
  // Once the fun version has been shown, the reminder never comes back (updated during render, no effect needed).
  const [seenFun, setSeenFun] = useState(isFun)
  if (isFun && !seenFun) setSeenFun(true)

  // The reminder only shows near the top of the page.
  const [atTop, setAtTop] = useState(() => window.scrollY < 200)
  useEffect(() => {
    const update = () => setAtTop(window.scrollY < 200)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const toggleFrom = (element: Element) => {
    const rect = element.getBoundingClientRect()
    onToggleMode({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }

  return (
    // Its own font (not the version's), so the buttons keep their size and place when switching pro ↔ fun.
    // On wide screens it stays at the CV page's right edge (the page is at most 1180px wide), not the window's.
    <div className="fixed top-4 right-[max(1rem,calc((100%-1180px)/2+1rem))] z-50 flex items-center gap-2 font-['Montserrat_Variable',sans-serif] print:hidden sm:top-5 sm:right-[max(1.25rem,calc((100%-1180px)/2+1.25rem))]">
      {SHOW_PDF && (
        <a href={pdfUrl} download="RikaCV.pdf" title={t.pdfTitle} className={`${pill} gap-1.5 px-3.5 text-neutral-900`}>
          <DownloadIcon className="size-4" />
          <span className="sr-only sm:not-sr-only">{t.pdf}</span>
        </a>
      )}

      {/* Labelled in the language it switches to, so people who don't read the current one can find it. */}
      <button
        type="button"
        lang={otherLang}
        aria-label={ui[otherLang].switchToLanguage}
        title={ui[otherLang].switchToLanguage}
        onClick={onToggleLang}
        className={`${pill} group relative p-1.5`}
      >
        <span
          aria-hidden
          className={`absolute inset-y-1.5 left-1.5 w-9 rounded-full bg-neutral-900 transition-transform duration-300 ease-out fun:bg-linear-to-r fun:from-uni-hotpink fun:to-uni-purple ${lang === 'en' ? 'translate-x-9' : ''}`}
        />
        {LANG_ORDER.map((code) => (
          <span
            key={code}
            aria-hidden
            className={`relative grid h-full w-9 place-items-center transition-colors duration-300 ${code === lang ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-700'}`}
          >
            {code}
          </span>
        ))}
      </button>

      <div className="relative">
        <button
          type="button"
          role="switch"
          aria-checked={isFun}
          aria-label={t.modeSwitch}
          title={isFun ? t.toPro : t.toFun}
          onClick={(event) => toggleFrom(event.currentTarget)}
          className={`${pill} group gap-2.5 px-3.5`}
        >
        <span aria-hidden className={isFun ? 'text-neutral-400' : 'text-neutral-900'}>
          Pro
        </span>

        <span
          aria-hidden
          className="relative h-7 w-13 rounded-full bg-neutral-900 transition-colors duration-300 fun:bg-linear-to-r fun:from-uni-hotpink fun:via-uni-purple fun:to-uni-turquoise"
        >
          <span className="absolute top-1 left-1 grid size-5 place-items-center rounded-full bg-white text-neutral-900 shadow transition-transform duration-300 ease-out group-active:scale-90 fun:translate-x-6">
            {isFun ? <span className="text-[0.8rem] leading-none">🦄</span> : <BriefcaseIcon className="size-3.5" />}
          </span>
        </span>

        <span aria-hidden className={isFun ? 'text-uni-sweet' : 'text-neutral-400'}>
          Fun
        </span>
        </button>

        {/* Pro version: a little reminder that there is a fun one too – until it has been seen, and only at the top. */}
        {!isFun && !seenFun && atTop && (
          <button type="button" onClick={(event) => toggleFrom(event.currentTarget)} className="fun-hint">
            {t.funHint}
          </button>
        )}
      </div>
    </div>
  )
}
