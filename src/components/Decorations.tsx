import type { CSSProperties } from 'react'
import { reveal } from '../hooks/reveal'
import { Bloom, BloomContour, Sticker } from './Blooms'
import type { StickerName } from './stickers'

/*
 * The diagonal pills and lines of the printed CV, redrawn as SVG.
 * Colours come from theme tokens, so the same shapes serve both versions (fun: the colours of the original PDF).
 * Coordinates are based on the PDF (1092 × 1092 px page), but every diagonal runs at the same 31° slope
 * as the photo's bar (Photo.tsx, rotate(-31)), so all shapes on the page are parallel.
 * Fun version: the bars are sprinkled with stars, sparkles and a butterfly, with flowers at their edges, and a bouquet
 * grows in the bottom-left corner (stickers.ts).
 * Entry animation (data-reveal="corner"): every shape slides in from outside the page along its own
 * direction (`--from`, in SVG units), one after the other.
 */

const from = (x: number, y: number) => ({ '--from': `${x}px ${y}px` }) as CSSProperties

/** Top-right corner: big rounded bar, small bar and a thin line. */
export function CornerTopRight() {
  return (
    <svg
      ref={reveal}
      data-reveal="corner"
      aria-hidden
      viewBox="0 0 360 150"
      className="pointer-events-none absolute top-0 right-0 -z-5 w-[min(17rem,55vw)] lg:w-[23rem]"
    >
      <defs>
        <BloomContour id="bloom-contour-top-right" />
      </defs>
      <line
        x1="143"
        y1="72"
        x2="495.7"
        y2="-139.9"
        strokeWidth="132"
        strokeLinecap="round"
        className="stroke-shape"
        style={from(178, -107)}
      />
      {/* thin line 19 units below the big bar; the small bar beyond it (17 units), long, coming in from the page's
          right edge – like the small bar of the bottom-left corner */}
      <line x1="288.8" y1="130.2" x2="378.8" y2="76.1" strokeWidth="34" strokeLinecap="round" className="stroke-shape-soft" style={from(126, -76)} />
      <line x1="196.9" y1="142.3" x2="342.6" y2="54.7" strokeWidth="6" strokeLinecap="round" className="stroke-line" style={from(153, -92)} />

      {/* placed along the bar's old 35° slope – turned with the bar to the common 31° */}
      <g className="hidden fun:inline" transform="rotate(4 143 72)" filter="url(#bloom-contour-top-right)" style={from(178, -107)}>
        <Bloom x={148} y={26} s={5} r={10}>
          <Sticker name="sparkleWhite" />
        </Bloom>
        <Bloom x={198} y={46} s={7}>
          <Sticker name="starBig" />
        </Bloom>
        <Bloom x={177} y={85} s={4.5} r={30}>
          <Sticker name="sparklePink" />
        </Bloom>
        <Bloom x={127} y={84} s={5} r={-15}>
          <Sticker name="starBig" />
        </Bloom>
        <Bloom x={230} y={20} s={4.5} r={-10}>
          <Sticker name="sparkleWhite" />
        </Bloom>
        <Bloom x={215} y={72} s={9} r={20}>
          <Sticker name="red" />
        </Bloom>
        <Bloom x={258} y={52} s={12} r={-14}>
          <Sticker name="butterflyPurple" />
        </Bloom>
        <Bloom x={289} y={19} s={6} r={15}>
          <Sticker name="starPink" />
        </Bloom>
        <Bloom x={312} y={44} s={8}>
          <Sticker name="yellow" />
        </Bloom>
        {/* at the edge of the bar, like the daisy and the pink flower in the card's corner – high enough to stay
            clear of the name below */}
        <Bloom x={82} y={84} s={10} r={-20}>
          <Sticker name="pink" />
        </Bloom>
        <Bloom x={104} y={102} s={12}>
          <Sticker name="daisy" />
        </Bloom>
      </g>
    </svg>
  )
}

/** Bottom-left corner: big rounded bar, small bar and a thin line. */
export function CornerBottomLeft() {
  return (
    <svg
      ref={reveal}
      data-reveal="corner"
      aria-hidden
      viewBox="0 0 400 172"
      className="pointer-events-none absolute bottom-0 left-0 -z-5 hidden w-[26rem] lg:block"
    >
      <defs>
        <BloomContour id="bloom-contour-bottom-left" />
      </defs>
      <line
        x1="288"
        y1="65"
        x2="73.9"
        y2="193.7"
        strokeWidth="114"
        strokeLinecap="round"
        className="stroke-shape-bl"
        style={from(-146, 88)}
      />
      {/* small bar: 15 units from the big bar, coming in from the bottom of the page */}
      <line x1="248.5" y1="189.9" x2="347.1" y2="130.7" strokeWidth="30" strokeLinecap="round" className="stroke-shape-bl-soft" style={from(-112, 67)} />
      <line x1="74.7" y1="96.7" x2="223.8" y2="7.1" strokeWidth="5" strokeLinecap="round" className="stroke-line-bl" style={from(-149, 89)} />

      {/* placed along the bar's old 50° slope – turned with the bar to the common 31° */}
      <g className="hidden fun:inline" transform="rotate(18.87 288 65)" filter="url(#bloom-contour-bottom-left)" style={from(-146, 88)}>
        <Bloom x={296} y={40} s={4.5} r={-15}>
          <Sticker name="sparkleWhite" />
        </Bloom>
        <Bloom x={246} y={69} s={6}>
          <Sticker name="starBig" />
        </Bloom>
        <Bloom x={305} y={99} s={4.5} r={25}>
          <Sticker name="sparklePink" />
        </Bloom>
        <Bloom x={268} y={127} s={8} r={10}>
          <Sticker name="blue" />
        </Bloom>
        <Bloom x={215} y={121} s={5} r={-10}>
          <Sticker name="starPink" />
        </Bloom>
        <Bloom x={238} y={158} s={4.5} r={50}>
          <Sticker name="sparkleWhite" />
        </Bloom>
      </g>

      {/* a little bouquet growing out of the very corner, with two butterflies above it */}
      <g className="hidden fun:inline" filter="url(#bloom-contour-bottom-left)" style={from(-60, 60)}>
        {BOUQUET.map(([name, x, y, s, r]) => (
          <Bloom key={name} x={x} y={y} s={s} r={r}>
            <Sticker name={name} />
          </Bloom>
        ))}
        <Bloom x={150} y={58} s={15} r={18}>
          <Sticker name="butterflyOrange" />
        </Bloom>
        <Bloom x={40} y={40} s={11} r={-16}>
          <Sticker name="butterflyBlue" flip />
        </Bloom>
        <Bloom x={98} y={44} s={5} r={12}>
          <Sticker name="starBig" />
        </Bloom>
      </g>
    </svg>
  )
}

/** The corner bouquet: flowers on stems, fanning out from the page's bottom-left corner (name, x, y, size, turn). */
const BOUQUET: [StickerName, number, number, number, number][] = [
  ['orangeStem', 20, 112, 12, -26],
  ['daisyStem', 46, 96, 13, -14],
  ['tulipLayered', 78, 98, 14, -3],
  ['blueStem', 110, 112, 12, 9],
  ['tulip', 136, 128, 12, 19],
  ['redStem', 160, 146, 11, 28],
]
