import { useEffect } from 'react'

/*
 * The butterflies of the fun version (`Butterfly` in Blooms.tsx) now and then fly off: when the mouse comes close, one
 * flutters away from it, and while scrolling one sometimes takes off – then it settles back on its spot. Kept rare:
 * every butterfly rests a while after a flight, and scrolling only startles one every so often.
 */

/** How close (px, beyond the butterfly's own size) the pointer may come before it flies off. */
const NEAR = 40
const FLIGHT_MS = 2600
/** Rest after landing before the same butterfly flies again. */
const REST_MS = 3000
/** Scrolling: a chance of one take-off every this many px. */
const SCROLL_STEP = 500
const SCROLL_CHANCE = 0.4

const restingUntil = new WeakMap<Element, number>()

/** The butterflies the reader can see right now (fun version, on screen). */
function visibleButterflies() {
  return [...document.querySelectorAll<SVGGElement>('[data-butterfly]')].filter((butterfly) => {
    if (butterfly.closest('[inert]')) return false
    const box = butterfly.getBoundingClientRect()
    return box.width > 0 && box.bottom > 0 && box.top < window.innerHeight && box.right > 0 && box.left < window.innerWidth
  })
}

/**
 * Flies `butterfly` `distance` px (on screen) towards (`x`, `y`) – a unit vector – a little upwards, and back.
 * The way is turned into the butterfly's own coordinates, which are scaled and turned inside its SVG.
 */
function fly(butterfly: SVGGElement, x: number, y: number, distance: number) {
  const now = performance.now()
  if ((restingUntil.get(butterfly) ?? 0) > now) return
  const matrix = butterfly.getScreenCTM()
  if (!matrix) return
  restingUntil.set(butterfly, now + FLIGHT_MS + REST_MS)

  const toLocal = (sx: number, sy: number) => {
    const { a, b, c, d } = matrix
    const det = a * d - b * c || 1
    return [(d * sx - c * sy) / det, (a * sy - b * sx) / det] as const
  }
  const [endX, endY] = toLocal(x * distance, y * distance - distance * 0.35)
  // on the way out it swerves a little to one side
  const side = Math.random() < 0.5 ? -1 : 1
  const [midX, midY] = toLocal(x * distance * 0.6 - y * side * distance * 0.25, y * distance * 0.6 + x * side * distance * 0.25)
  const turn = side * (8 + Math.random() * 10)
  const at = (px: number, py: number, deg: number) => `translate(${px}px, ${py}px) rotate(${deg}deg)`

  butterfly.animate(
    [
      { transform: at(0, 0, 0) },
      { transform: at(midX, midY, turn), offset: 0.25 },
      { transform: at(endX, endY, turn / 2), offset: 0.45 },
      { transform: at(endX, endY, -turn / 3), offset: 0.62 },
      { transform: at(0, 0, 0) },
    ],
    { duration: FLIGHT_MS, easing: 'ease-in-out' },
  )
  // wings flapping all the way
  butterfly.firstElementChild?.animate([{ transform: 'scaleX(1)' }, { transform: 'scaleX(0.45)' }, { transform: 'scaleX(1)' }], {
    duration: 170,
    iterations: Math.round(FLIGHT_MS / 170),
  })
}

/** Lets the butterflies react to the mouse and to scrolling – only while `active` (fun version), never with reduced motion. */
export function useButterflies(active: boolean) {
  useEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pointer: { x: number; y: number } | undefined
    let frame = 0
    const checkPointer = () => {
      frame = 0
      if (!pointer) return
      for (const butterfly of visibleButterflies()) {
        const box = butterfly.getBoundingClientRect()
        const dx = box.left + box.width / 2 - pointer.x
        const dy = box.top + box.height / 2 - pointer.y
        const gap = Math.hypot(dx, dy)
        if (gap < NEAR + box.width / 2) fly(butterfly, dx / (gap || 1), dy / (gap || 1), 40 + Math.random() * 20)
      }
    }
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      pointer = { x: event.clientX, y: event.clientY }
      frame ||= requestAnimationFrame(checkPointer)
    }

    let lastY = window.scrollY
    let travelled = 0
    const onScroll = () => {
      travelled += Math.abs(window.scrollY - lastY)
      lastY = window.scrollY
      if (travelled < SCROLL_STEP) return
      travelled = 0
      if (Math.random() > SCROLL_CHANCE) return
      const butterflies = visibleButterflies()
      const butterfly = butterflies[Math.floor(Math.random() * butterflies.length)]
      if (!butterfly) return
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6 // upwards, give or take
      fly(butterfly, Math.cos(angle), Math.sin(angle), 26 + Math.random() * 14)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [active])
}
