import { useLayoutEffect, type RefObject } from 'react'

/**
 * The page rainbow, top to bottom: colour tokens of index.css (`--uni-<name>`), evenly spread over the page height.
 * Violet twice, so the last stretch – the footer – is plain violet.
 */
const RAINBOW = ['crimson', 'tangerine', 'sun', 'emerald', 'aqua', 'sky', 'violet', 'violet']

/**
 * Page rainbow of the fun version: every `[data-ombre]` element inside `page` gets the colour of its height on the
 * page – crimson at the top, violet at the bottom, orange, yellow, green, turquoise and blue in between – so
 * everything on the same horizontal band shares one colour. Sets the two neighbouring rainbow colours
 * (`--ombre-from`, `--ombre-to`) and the mix between them (`--ombre-mix`); index.css turns them into `--ombre-color`.
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
        const scaled = position * (RAINBOW.length - 1)
        const index = Math.min(RAINBOW.length - 2, Math.floor(scaled))
        element.style.setProperty('--ombre-from', `var(--uni-${RAINBOW[index]})`)
        element.style.setProperty('--ombre-to', `var(--uni-${RAINBOW[index + 1]})`)
        element.style.setProperty('--ombre-mix', `${((scaled - index) * 100).toFixed(1)}%`)
      }
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [page, key])
}
