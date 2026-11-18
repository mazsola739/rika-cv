import type { CSSProperties } from 'react'
import { reveal } from '../hooks/reveal'
import { Blossom, Bloom, BloomContour, Confetti, Daisy, Leaf, Sprig, Star, Tulip } from './Blooms'

/*
 * The diagonal pills and lines of the printed CV, redrawn as SVG.
 * Colours come from theme tokens, so the same shapes serve both versions (fun: the colours of the original PDF).
 * Coordinates are based on the PDF (1092 × 1092 px page), but every diagonal runs at the same 31° slope
 * as the photo's bar (Photo.tsx, rotate(-31)), so all shapes on the page are parallel.
 * Fun version: the bars are sprinkled with stars and confetti, with flowers growing at their edges – like the unicorn card.
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
          <Confetti />
        </Bloom>
        <Bloom x={198} y={46} s={7}>
          <Star />
        </Bloom>
        <Bloom x={177} y={85} s={4} r={30}>
          <Confetti />
        </Bloom>
        <Bloom x={127} y={84} s={5} r={-15}>
          <Star />
        </Bloom>
        <Bloom x={230} y={20} s={4} r={60}>
          <Confetti />
        </Bloom>
        <Bloom x={215} y={72} s={9} r={20}>
          <Blossom petals="red" center="white" />
        </Bloom>
        <Bloom x={253} y={38} s={5} r={-20}>
          <Confetti />
        </Bloom>
        <Bloom x={289} y={19} s={6} r={15}>
          <Star />
        </Bloom>
        <Bloom x={300} y={42} s={8}>
          <Blossom petals="yellow" center="red" />
        </Bloom>
        {/* at the edge of the bar, like the daisy and the pink flower in the card's corner – high enough to stay
            clear of the name below */}
        <Bloom x={82} y={84} s={13} r={-30}>
          <Tulip />
        </Bloom>
        <Bloom x={104} y={102} s={12}>
          <Daisy />
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
        <Bloom x={296} y={40} s={4} r={-15}>
          <Confetti />
        </Bloom>
        <Bloom x={246} y={69} s={6}>
          <Star />
        </Bloom>
        <Bloom x={305} y={99} s={4} r={25}>
          <Confetti />
        </Bloom>
        <Bloom x={268} y={127} s={8} r={10}>
          <Blossom petals="blue" center="pink" dot="white" />
        </Bloom>
        <Bloom x={215} y={121} s={5} r={-10}>
          <Star />
        </Bloom>
        <Bloom x={238} y={158} s={4} r={50}>
          <Confetti />
        </Bloom>
      </g>

      {/* a little bouquet in the very corner, like the bottom-left of the card */}
      <g className="hidden fun:inline" filter="url(#bloom-contour-bottom-left)" style={from(-60, 60)}>
        <Bloom x={32} y={136} s={34} r={-25}>
          <Sprig />
        </Bloom>
        <Bloom x={64} y={108} s={17} r={-42}>
          <Leaf />
        </Bloom>
        <Bloom x={92} y={98} s={22} r={-10}>
          <Tulip />
        </Bloom>
        <Bloom x={140} y={134} s={18} r={14}>
          <Tulip />
        </Bloom>
        <Bloom x={30} y={84} s={15}>
          <Daisy />
        </Bloom>
        <Bloom x={108} y={156} s={13} r={10}>
          <Blossom petals="red" center="white" />
        </Bloom>
        <Bloom x={66} y={158} s={10}>
          <Blossom petals="yellow" center="red" />
        </Bloom>
        <Bloom x={160} y={92} s={6} r={12}>
          <Star />
        </Bloom>
        <Bloom x={58} y={48} s={5} r={-8}>
          <Star />
        </Bloom>
      </g>
    </svg>
  )
}
