import type { Cv } from '../data/types'
import { reveal } from '../hooks/reveal'

/** Splits off a quoted nickname („Rika” / “Rika”), so the fun version can colour it like the card's "sweet.". */
function nameParts(name: string) {
  return name.split(/([„“"][^”"]+[”"])/).filter(Boolean)
}

/**
 * Name, title and summary. The colour band behind it belongs to the version slot (see bands.ts).
 * Fun version, like the unicorn card's "You are sweet.": navy name with the nickname in pink, no shadow
 * (as in the original PDF).
 */
export function Header({ cv }: { cv: Cv }) {
  return (
    <header ref={reveal} data-reveal="stagger" className="lg:pt-12">
      {/* Left-aligned, so the top-right corner shapes can reach in; desktop: lg:pt-12 starts the name below them. */}
      {/* Same line heights in both versions (only the font size differs), so name and title sit at the same place. */}
      <h1 className="font-display text-[2.1rem] leading-[2.625rem] tracking-[0.08em] text-balance uppercase sm:text-5xl sm:leading-[3.75rem] lg:pr-16 lg:text-[2.6rem] lg:leading-[3.25rem] xl:text-5xl xl:leading-[3.75rem] fun:text-[1.5rem] fun:font-bold fun:tracking-[0.05em] fun:text-uni-navy fun:sm:text-[2.6rem] fun:lg:text-[2.1rem] fun:xl:text-[2.4rem]">
        {nameParts(cv.name).map((part, index) =>
          /^[„“"]/.test(part) ? (
            <span key={index} className="fun:text-uni-sweet">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </h1>
      <p className="mt-1 font-heading text-lg leading-7 font-extrabold tracking-wide uppercase sm:text-2xl sm:leading-8 lg:pr-16 fun:font-normal fun:sm:text-[1.65rem] fun:lg:text-[1.4rem] fun:xl:text-[1.65rem]">
        {cv.title}
      </p>
      {cv.tagline && (
        <p className="mt-3 max-w-xl font-heading text-[0.6875rem] leading-snug tracking-wide text-balance uppercase sm:text-xs">
          {/* Lines may only break between the " / " separated parts, never inside one (e.g. "Internet-(l)user"). */}
          {cv.tagline.split(' / ').map((part, index) => (
            <span key={part}>
              {index > 0 && <span className="fun:font-bold fun:text-uni-sweet"> / </span>}
              <span className="whitespace-nowrap">{part}</span>
            </span>
          ))}
        </p>
      )}
      <p className="mt-5 leading-relaxed hyphens-auto sm:text-justify">{cv.summary}</p>
    </header>
  )
}
