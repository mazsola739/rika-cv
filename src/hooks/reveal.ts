/**
 * Scroll-in animations. Put `ref={reveal}` and `data-reveal="<kind>"` on an element: once it scrolls into view
 * it gets `data-shown`, and the CSS in index.css animates it from its hidden start state.
 * The attribute is set straight on the DOM node, so revealing never re-renders anything.
 */

let observer: IntersectionObserver | undefined

/*
 * Revealed as soon as any part of the element is on screen (no negative margin: blocks at the very end of a
 * short page must count as seen too). The observed element must keep its size while hidden – animate its
 * children or a pseudo-element, never clip or scale the element itself to nothing.
 */
function getObserver() {
  observer ??= new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.setAttribute('data-shown', '')
      observer?.unobserve(entry.target)
    }
  })
  return observer
}

/** Ref callback (stable, so React only calls it on mount/unmount). */
export function reveal(element: Element | null) {
  if (!element) return
  const io = getObserver()
  io.observe(element)
  return () => io.unobserve(element)
}

export type RevealKind = 'up' | 'stagger' | 'section' | 'band' | 'corner' | 'photo'
