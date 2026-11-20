import { reveal } from '../hooks/reveal'
import { Bloom, Butterfly, Sticker } from './Blooms'

interface PhotoProps {
  src: string
  alt: string
}

/**
 * Round photo sitting at the end of a long diagonal bar (like in the PDF).
 * The SVG uses the photo radius as unit (viewBox -1..1), so it scales with the photo.
 * The long bar and its lines only show on desktop where there is room for them.
 * Fun version: the bar and the ring keep the crimson of the original PDF, with flowers, stars and sparkles
 * in it, and a butterfly hair clip with flowers on the other side of the photo.
 * Entry animation (data-reveal="photo"): the ring pops, the bar and lines slide in along the diagonal,
 * then the flowers pop open.
 */
export function Photo({ src, alt }: PhotoProps) {
  return (
    <div ref={reveal} data-reveal="photo" className="relative mx-auto size-(--photo)">
      <svg aria-hidden viewBox="-1 -1 2 2" className="pointer-events-none absolute inset-0 -z-5 size-full overflow-visible">
        <g transform="rotate(-31)">
          <line
            x1="0"
            y1="0"
            x2="-16"
            y2="0"
            strokeWidth="2.34"
            strokeLinecap="round"
            className="hidden stroke-shape lg:inline"
          />
          <line x1="-0.05" y1="-1.31" x2="-2.3" y2="-1.31" strokeWidth="0.05" strokeLinecap="round" className="hidden stroke-line-photo-top lg:inline" />
          <line x1="-0.5" y1="1.31" x2="-2.8" y2="1.31" strokeWidth="0.05" strokeLinecap="round" className="hidden stroke-line-photo-bottom lg:inline" />
          <circle data-ring r="1.17" className="fill-shape" />
        </g>
      </svg>
      <img src={src} alt={alt} width={708} height={708} className="size-full rounded-full object-cover" />

      <svg aria-hidden viewBox="-1 -1 2 2" className="bloom-contour pointer-events-none absolute inset-0 hidden size-full overflow-visible fun:block">
        <g transform="rotate(-31)">
          {/* hair clip, top right of the photo: a butterfly with flowers */}
          <Bloom x={0.66} y={-0.92} s={0.24} r={46} delay="650ms">
            <Butterfly name="butterflyPink" />
          </Bloom>
          <Bloom x={0.98} y={-0.52} s={0.19} delay="750ms">
            <Sticker name="daisy" />
          </Bloom>
          <Bloom x={1.1} y={-0.14} s={0.15} r={20} delay="850ms">
            <Sticker name="red" />
          </Bloom>
          <Bloom x={1.08} y={-0.95} s={0.07} r={12} delay="950ms">
            <Sticker name="starBig" />
          </Bloom>
          <Bloom x={1.33} y={-0.38} s={0.055} r={-10} delay="1000ms">
            <Sticker name="starPink" />
          </Bloom>
          <Bloom x={0.48} y={-1.26} s={0.05} r={20} delay="1050ms">
            <Sticker name="sparkleWhite" />
          </Bloom>
          <Bloom x={1.3} y={0.14} s={0.05} r={-30} delay="1100ms">
            <Sticker name="sparkle" />
          </Bloom>

          {/* where the mane leaves the photo */}
          <Bloom x={-0.95} y={0.55} s={0.15} delay="700ms">
            <Sticker name="yellow" />
          </Bloom>
          <Bloom x={-1.13} y={0.04} s={0.12} r={15} delay="800ms">
            <Sticker name="daisy" />
          </Bloom>
          <Bloom x={-1.02} y={-0.47} s={0.13} r={-12} delay="900ms">
            <Sticker name="blue" />
          </Bloom>

          {/* in the mane (desktop only, like the bar) */}
          <g className="hidden lg:inline">
            <Bloom x={-1.62} y={-0.42} s={0.065} delay="1000ms">
              <Sticker name="starBig" />
            </Bloom>
            <Bloom x={-1.95} y={0.5} s={0.05} r={20} delay="1050ms">
              <Sticker name="sparkleWhite" />
            </Bloom>
            <Bloom x={-2.05} y={-0.62} s={0.055} r={15} delay="1100ms">
              <Sticker name="sparklePink" />
            </Bloom>
            <Bloom x={-2.3} y={-0.98} s={0.16} r={10} delay="1150ms">
              <Sticker name="purple" />
            </Bloom>
            <Bloom x={-2.6} y={0.28} s={0.07} r={-8} delay="1200ms">
              <Sticker name="starBig" />
            </Bloom>
            <Bloom x={-2.95} y={-0.36} s={0.05} r={-20} delay="1250ms">
              <Sticker name="sparkleWhite" />
            </Bloom>
            <Bloom x={-3.0} y={0.92} s={0.14} r={-15} delay="1300ms">
              <Sticker name="pink" />
            </Bloom>
            <Bloom x={-3.3} y={0.45} s={0.2} r={-12} delay="1350ms">
              <Butterfly name="butterflyYellow" />
            </Bloom>
            <Bloom x={-3.45} y={-0.94} s={0.17} delay="1400ms">
              <Sticker name="daisy" />
            </Bloom>
            <Bloom x={-3.75} y={-0.2} s={0.065} r={20} delay="1450ms">
              <Sticker name="starPink" />
            </Bloom>
            <Bloom x={-4.1} y={0.88} s={0.14} r={25} delay="1500ms">
              <Sticker name="red" />
            </Bloom>
          </g>
        </g>
      </svg>
    </div>
  )
}
