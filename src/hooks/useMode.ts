import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import type { Mode } from '../data/types'
import { canAnimateTransition, dropUrlParam, rememberSetting } from './dom'
import { rememberPlace } from './keepPlace'
import { replayDesign, revealOnScreen } from './reveal'

const THEME_COLOR: Record<Mode, string> = { pro: '#efefef', fun: '#f3c7cc' }

/** The circular reveal of a switch. */
const REVEAL_MS = 700

export interface Point {
  x: number
  y: number
}

/** The inline script in index.html has already resolved the mode (pro, unless the URL or this tab says fun). */
function readInitialMode(): Mode {
  return document.documentElement.dataset.mode === 'fun' ? 'fun' : 'pro'
}

/** The colour of the browser's own bar on phones. */
function setThemeColor(mode: Mode) {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode])
}

/** Inverse of the reveal's easing (cubic ease-in-out): when the circle reaches `share` of its full size (0–1). */
function revealTime(share: number) {
  const time = share < 0.5 ? Math.cbrt(share / 4) : 1 - Math.cbrt(2 * (1 - share)) / 2
  return time * REVEAL_MS
}

/** The page (not the fixed switches) fades out, `change` runs, and it fades back in. */
function fadeSwitch(change: () => void) {
  const page = document.querySelector('main')
  if (!page) {
    change()
    return
  }
  const FADE_OUT_MS = 120
  const out = page.animate({ opacity: [1, 0] }, { duration: FADE_OUT_MS, easing: 'ease-in', fill: 'forwards' })
  // A timer, not `out.finished`: the switch must happen even if the animation never gets to run.
  window.setTimeout(() => {
    change()
    out.cancel()
    page.animate({ opacity: [0, 1] }, { duration: 220, easing: 'ease-out' })
  }, FADE_OUT_MS)
}

/**
 * Pro ↔ fun switch, wired up like a dark/light theme toggle:
 * sets `data-mode` on <html> and plays a circular reveal from the switch
 * (View Transitions API) where supported – on touch screens a quick fade instead. A visit starts in pro; a reload
 * keeps the version (rememberSetting, this tab only).
 * The reader stays at the same place (see keepPlace.ts); the texts on screen are simply there in the new version,
 * while the decorative blocks come in again as on a first visit (replayDesign).
 */
export function useMode() {
  const [mode, setMode] = useState<Mode>(readInitialMode)

  useLayoutEffect(() => {
    document.documentElement.dataset.mode = mode
    rememberSetting('mode', mode)
  }, [mode])

  useEffect(() => setThemeColor(readInitialMode()), [])

  const toggle = useCallback(
    (origin?: Point) => {
      const next: Mode = mode === 'pro' ? 'fun' : 'pro'
      // Remembered for this tab instead (see above): a stale ?mode= must not bring the old one back on reload.
      dropUrlParam('mode')

      const restorePlace = rememberPlace()
      const commit = () => {
        flushSync(() => setMode(next))
        document.documentElement.dataset.mode = next
        restorePlace()
        revealOnScreen()
        replayDesign()
      }

      if (!canAnimateTransition()) {
        commit()
        setThemeColor(next)
        return
      }

      // Phones and tablets: a quick fade instead of the circular reveal – the View Transition's full-screen snapshot
      // gets squashed for a moment there (browser bars sliding in and out).
      if (window.matchMedia('(pointer: coarse)').matches) {
        fadeSwitch(() => {
          commit()
          setThemeColor(next)
        })
        return
      }

      const transition = document.startViewTransition(commit)
      if (!origin) {
        transition.finished.finally(() => setThemeColor(next))
        return
      }

      transition.ready
        .then(() => {
          const { x, y } = origin
          const width = window.innerWidth
          const radius = Math.hypot(Math.max(x, width - x), Math.max(y, window.innerHeight - y))
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: REVEAL_MS, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
          )
          // The browser's bar (phones) takes the new colour once the circle has swept over the whole top of the page.
          const topCovered = Math.hypot(Math.max(x, width - x), y) / radius
          window.setTimeout(() => setThemeColor(next), revealTime(Math.min(1, topCovered)))
        })
        .catch(() => {
          // transition skipped (e.g. tab hidden) – the mode is already applied
          setThemeColor(next)
        })
    },
    [mode],
  )

  return { mode, toggle }
}
