import { useCallback, useLayoutEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import type { Mode } from '../data/types'
import { canAnimateTransition, dropUrlParam } from './dom'

const THEME_COLOR: Record<Mode, string> = { pro: '#efefef', fun: '#f3c7cc' }

export interface Point {
  x: number
  y: number
}

/** The inline script in index.html has already resolved the mode (pro, unless the URL says ?mode=fun). */
function readInitialMode(): Mode {
  return document.documentElement.dataset.mode === 'fun' ? 'fun' : 'pro'
}

function applyToDocument(mode: Mode) {
  document.documentElement.dataset.mode = mode
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode])
}

/**
 * Pro ↔ fun switch, wired up like a dark/light theme toggle:
 * sets `data-mode` on <html> and plays a circular reveal from the switch
 * (View Transitions API) where supported. Every visit starts in pro.
 */
export function useMode() {
  const [mode, setMode] = useState<Mode>(readInitialMode)

  useLayoutEffect(() => applyToDocument(mode), [mode])

  const toggle = useCallback(
    (origin?: Point) => {
      const next: Mode = mode === 'pro' ? 'fun' : 'pro'
      // The choice is not remembered: once switched, a stale ?mode=pro must not bring it back on reload.
      dropUrlParam('mode')

      const commit = () => {
        flushSync(() => setMode(next))
        applyToDocument(next)
      }

      if (!canAnimateTransition()) {
        commit()
        return
      }

      const transition = document.startViewTransition(commit)
      if (!origin) return

      transition.ready
        .then(() => {
          const { x, y } = origin
          const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 700, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
          )
        })
        .catch(() => {
          // transition skipped (e.g. tab hidden) – the mode is already applied
        })
    },
    [mode],
  )

  return { mode, toggle }
}
