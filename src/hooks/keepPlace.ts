/**
 * Keeps the reader's place across a version switch. On phones everything is one column, and some blocks differ a lot
 * between the versions (the cats only exist in the fun one; experience, projects and education differ in length), so
 * everything below them moves. Call before the switch; the returned function, called right after the new version is
 * in the DOM, scrolls so the block under the reading line (`data-slot`, see VersionSlot) is back where it was –
 * at the same relative depth when the block itself got longer or shorter.
 */
export function rememberPlace(): () => void {
  const line = window.innerHeight * 0.3
  // the point `depth` (0–1) down the block `slot` has to stay at `at` (px from the top of the window)
  let slot: Element | undefined
  let depth = 0
  let at = Infinity

  for (const element of document.querySelectorAll('[data-slot]')) {
    const box = element.getBoundingClientRect()
    if (!box.height) continue
    if (box.top <= line && box.bottom > line) {
      slot = element
      depth = (line - box.top) / box.height
      at = line
      break
    }
    // none under the line (a gap between blocks): the top of the next one below it
    if (box.top > line && box.top < at) {
      slot = element
      at = box.top
    }
  }

  return () => {
    if (!slot?.isConnected) return // gone in the new version (the cats): nothing to hold on to
    const box = slot.getBoundingClientRect()
    if (!box.height) return
    const shift = box.top + depth * box.height - at
    if (Math.abs(shift) >= 1) window.scrollBy({ top: shift, behavior: 'instant' })
  }
}
