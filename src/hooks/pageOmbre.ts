import { useLayoutEffect, type RefObject } from 'react'

/**
 * Number of colour stops of the page ombre, evenly spread over the page height, top to bottom: `--ombre-0` …
 * `--ombre-7` in index.css – a rainbow in the fun version, black to dark grey in the pro one.
 */
const STOPS = 8

/**
 * Page ombre: every `[data-ombre]` element inside `page` gets the colour of its height on the page, so everything on
 * the same horizontal band shares one colour. Sets the two neighbouring colour stops (`--ombre-from`, `--ombre-to`)
 * and the mix between them (`--ombre-mix`); index.css turns them into `--ombre-color`. The stops are CSS variables,
 * so the same measurement serves both versions (each copy resolves its own palette).
 * Measured again whenever the page changes size, and when `key` changes (version or language switch).
 */
export function usePageOmbre(page: RefObject<HTMLElement | null>, key: string) {
  useLayoutEffect(() => {
    const root = page.current
    if (!root) return

    const measure = () => {
      const { top, height } = root.getBoundingClientRect()
      if (!height) return
      for (const element of root.querySelectorAll<HTMLElement>('[data-ombre]')) {
        const box = element.getBoundingClientRect()
        if (!box.height) continue // the hidden copy of an unstacked block (display: none)
        const position = Math.min(1, Math.max(0, (box.top + box.height / 2 - top) / height))
        const scaled = position * (STOPS - 1)
        const index = Math.min(STOPS - 2, Math.floor(scaled))
        element.style.setProperty('--ombre-from', `var(--ombre-${index})`)
        element.style.setProperty('--ombre-to', `var(--ombre-${index + 1})`)
        element.style.setProperty('--ombre-mix', `${((scaled - index) * 100).toFixed(1)}%`)
      }
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [page, key])
}
