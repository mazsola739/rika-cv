import { useCallback, useLayoutEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import type { Lang } from '../data/types'
import { canAnimateTransition, dropUrlParam } from './dom'

/** The inline script in index.html has already resolved the language (English, unless the URL says ?lang=hu). */
function readInitialLang(): Lang {
  return document.documentElement.lang === 'hu' ? 'hu' : 'en'
}

/**
 * Hungarian ↔ English switch. Sets `lang` on <html> (hyphenation, screen readers)
 * and cross-fades the page. Not remembered: a reload goes back to English.
 */
export function useLang() {
  const [lang, setLang] = useState<Lang>(readInitialLang)

  useLayoutEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    const next: Lang = lang === 'hu' ? 'en' : 'hu'
    dropUrlParam('lang')

    const commit = () => {
      flushSync(() => setLang(next))
      document.documentElement.lang = next
    }

    if (!canAnimateTransition()) {
      commit()
      return
    }

    // `data-transition` picks the cross-fade in index.css instead of the circular reveal of the mode switch.
    const root = document.documentElement
    const cleanUp = () => {
      delete root.dataset.transition
    }
    root.dataset.transition = 'lang'
    document.startViewTransition(commit).finished.then(cleanUp, cleanUp)
  }, [lang])

  return { lang, toggle }
}
