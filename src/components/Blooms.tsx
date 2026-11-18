import type { CSSProperties, ReactNode } from 'react'

/*
 * The little things of the unicorn card the fun version is styled after ("You are sweet."):
 * flowers, tulips, daisies, gold stars and white confetti.
 * Every shape is drawn around (0, 0) at about radius 1; `Bloom` places, turns and sizes it.
 */

type Fill = 'red' | 'yellow' | 'orange' | 'blue' | 'hotpink' | 'pink' | 'purple' | 'white' | 'gold' | 'leaf'

const fill: Record<Fill, string> = {
  red: 'fill-uni-red',
  yellow: 'fill-uni-yellow',
  orange: 'fill-uni-orange',
  blue: 'fill-uni-blue',
  hotpink: 'fill-uni-hotpink',
  pink: 'fill-uni-pink',
  purple: 'fill-uni-purple',
  white: 'fill-white',
  gold: 'fill-uni-gold',
  leaf: 'fill-uni-leaf',
}

interface BloomProps {
  x: number
  y: number
  /** Size (the shape's radius). */
  s: number
  /** Rotation in degrees. */
  r?: number
  /** Delay of the pop-in animation around the photo (CSS time). */
  delay?: string
  children: ReactNode
}

/**
 * Places a shape. The inner group is what the photo's entry animation scales (`data-bloom`),
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

const PETALS_5 = [
  [0, -0.54],
  [0.51, -0.17],
  [0.32, 0.44],
  [-0.32, 0.44],
  [-0.51, -0.17],
]

/** Five round petals around a centre – the red, yellow and blue flowers of the card. */
export function Blossom({ petals, center, dot }: { petals: Fill; center: Fill; dot?: Fill }) {
  return (
    <>
      {PETALS_5.map(([cx, cy]) => (
        <circle key={`${cx},${cy}`} cx={cx} cy={cy} r={0.46} className={fill[petals]} />
      ))}
      <circle r={0.34} className={fill[center]} />
      {dot && <circle r={0.14} className={fill[dot]} />}
    </>
  )
}

/** White daisy with a yellow heart. */
export function Daisy() {
  return (
    <>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse key={angle} cy={-0.52} rx={0.24} ry={0.48} transform={`rotate(${angle})`} className="fill-white" />
      ))}
      <circle r={0.32} className="fill-uni-yellow" />
    </>
  )
}

/** Pink tulip with a zigzag top, on a short stem with a leaf. */
export function Tulip() {
  return (
    <>
      <path d="M0 0.66Q0.1 1.1-0.02 1.6" fill="none" strokeWidth={0.1} strokeLinecap="round" className="stroke-uni-leaf" />
      <path d="M0 1.22Q0.42 0.88 0.62 1.1Q0.36 1.38 0 1.22Z" className="fill-uni-leaf" />
      <path
        d="M-0.62-0.36C-0.7 0.36-0.36 0.7 0 0.7C0.36 0.7 0.7 0.36 0.62-0.36L0.36-0.06L0.2-0.5L0-0.12L-0.2-0.5L-0.36-0.06Z"
        className="fill-uni-hotpink"
      />
      <path d="M-0.34 0.12L-0.17-0.12L0 0.14L0.17-0.12L0.34 0.12C0.26 0.48-0.26 0.48-0.34 0.12Z" className="fill-uni-pink" />
    </>
  )
}

/** Orange leafy sprig (bottom-left corner of the card). */
export function Sprig() {
  return (
    <>
      <path d="M0 1Q0.12 0-0.02-1" fill="none" strokeWidth={0.08} strokeLinecap="round" className="stroke-uni-orange" />
      {[
        [0.24, 0.5, 40],
        [-0.22, 0.12, -40],
        [0.22, -0.3, 40],
        [-0.18, -0.66, -35],
      ].map(([cx, cy, angle]) => (
        <ellipse key={cy} rx={0.15} ry={0.3} transform={`translate(${cx} ${cy}) rotate(${angle})`} className="fill-uni-orange" />
      ))}
      <ellipse cx={-0.02} cy={-1.02} rx={0.13} ry={0.26} className="fill-uni-orange" />
    </>
  )
}

/** Plain leaf. */
export function Leaf() {
  return <path d="M0-1Q0.62 0 0 1Q-0.62 0 0-1Z" className="fill-uni-leaf" />
}

/** Rounded five-pointed star (gold by default). */
export function Star({ color = 'gold' }: { color?: Fill }) {
  return (
    <polygon
      points="0,-1 0.28,-0.39 0.95,-0.31 0.46,0.15 0.59,0.81 0,0.48 -0.59,0.81 -0.46,0.15 -0.95,-0.31 -0.28,-0.39"
      strokeWidth={0.18}
      strokeLinejoin="round"
      className={`${fill[color]} ${color === 'white' ? 'stroke-white' : 'stroke-uni-gold'}`}
    />
  )
}

/** White confetti triangle. */
export function Confetti() {
  return <polygon points="0,-1 0.9,0.62 -0.9,0.62" className="fill-white" />
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
          <Daisy />
        </Bloom>
        <Bloom x={33} y={8} s={4} r={15}>
          <Star />
        </Bloom>
        <Bloom x={38} y={23} s={3} r={40}>
          <Confetti />
        </Bloom>
      </svg>
      <svg aria-hidden viewBox="0 0 56 32" className={`${svg} right-3`}>
        <Bloom x={42} y={16} s={10} r={12}>
          <Blossom petals="yellow" center="red" />
        </Bloom>
        <Bloom x={23} y={23} s={4} r={-20}>
          <Star />
        </Bloom>
        <Bloom x={19} y={8} s={3} r={10}>
          <Confetti />
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
