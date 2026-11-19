import type { CSSProperties, ReactNode } from 'react'
import { sticker, type StickerName } from './stickers'

/*
 * The little things of the fun version: clay-look flowers, butterflies, stars and sparkles (stickers.ts).
 * Every sticker is drawn around (0, 0) at about radius 1; `Bloom` places, turns and sizes it.
 */

interface BloomProps {
  x: number
  y: number
  /** Size (the sticker's radius; for a flower on a stem, its head's). */
  s: number
  /** Rotation in degrees. */
  r?: number
  /** Delay of the pop-in animation around the photo (CSS time). */
  delay?: string
  children: ReactNode
}

/**
 * Places a sticker. The inner group is what the photo's entry animation scales (`data-bloom`),
 * so it grows out of its own centre.
 */
export function Bloom({ x, y, s, r = 0, delay, children }: BloomProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <g data-bloom style={delay ? ({ '--delay': delay } as CSSProperties) : undefined}>
        {children}
      </g>
    </g>
  )
}

/** Where the head of a flower on a stem is, as a fraction of the sticker's height from its top. */
const HEAD = 0.26

/**
 * One sticker. Most fit in a circle of radius 1 around the origin; a flower on a stem is 2 units wide, with its head
 * on the origin and the stem hanging down. `flip` mirrors it (a butterfly flying the other way).
 */
export function Sticker({ name, flip }: { name: StickerName; flip?: boolean }) {
  const { src, w, h, stem } = sticker(name)
  const unit = 2 / (stem ? w : Math.max(w, h))
  const width = w * unit
  const height = h * unit
  return (
    <image
      href={src}
      x={-width / 2}
      y={stem ? -HEAD * height : -height / 2}
      width={width}
      height={height}
      transform={flip ? 'scale(-1 1)' : undefined}
    />
  )
}

/**
 * A flower on a stem, planted: the end of its stem is at (`x`, `y`) – put that just below an edge, and the flower
 * grows out of it – and it leans `r` degrees (positive: to the right).
 */
export function Planted({ name, x, y, s, r = 0 }: { name: StickerName; x: number; y: number; s: number; r?: number }) {
  const { w, h } = sticker(name)
  const stem = (1 - HEAD) * ((2 * h) / w) * s // from the head to the end of the stem
  const lean = (r * Math.PI) / 180
  return (
    <Bloom x={x + stem * Math.sin(lean)} y={y - stem * Math.cos(lean)} s={s} r={r}>
      <Sticker name={name} />
    </Bloom>
  )
}

/**
 * Little flowers at both ends of a section title pill (fun version, from small tablets up – on phones the title
 * needs the room). They stay inside the pill: the title's reveal animation clips everything outside it.
 * Like every flower, they have a faint, very thin dark contour (`.bloom-contour` in index.css).
 */
export function TitleBlooms() {
  const svg =
    'bloom-contour pointer-events-none absolute top-1/2 hidden h-[1.9em] -translate-y-1/2 overflow-visible fun:sm:block'
  return (
    <>
      <svg aria-hidden viewBox="0 0 56 32" className={`${svg} left-3`}>
        <Bloom x={14} y={16} s={11} r={-10}>
          <Sticker name="daisy" />
        </Bloom>
        <Bloom x={33} y={8} s={4.5} r={15}>
          <Sticker name="starBig" />
        </Bloom>
        <Bloom x={38} y={23} s={3.5} r={10}>
          <Sticker name="sparkleWhite" />
        </Bloom>
      </svg>
      <svg aria-hidden viewBox="0 0 56 32" className={`${svg} right-3`}>
        <Bloom x={42} y={16} s={10} r={12}>
          <Sticker name="yellow" />
        </Bloom>
        <Bloom x={23} y={23} s={4.5} r={-20}>
          <Sticker name="starBig" />
        </Bloom>
        <Bloom x={19} y={8} s={3.5} r={-10}>
          <Sticker name="sparkleWhite" />
        </Bloom>
      </svg>
    </>
  )
}

/**
 * The flowers' faint, very thin dark contour as an SVG filter, for groups of flowers inside an SVG that also holds
 * other shapes (the corners). Same look as `.bloom-contour` in index.css; the SVG's user units are about pixels there.
 */
export function BloomContour({ id }: { id: string }) {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#000" floodOpacity="0.55" />
    </filter>
  )
}
