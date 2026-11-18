/*
 * The two colour bands of the printed CV, as ::before, so both versions share them.
 * They reach back to the page edges (and on desktop under the left column).
 */

/**
 * Header band: behind the photo, name, title and introduction. It ends at the horizontal midline of the next title pill
 * (phones: contact, one --gap below; desktop: work experience, 3.5rem below – the lg:mt-14 in App.tsx).
 */
export const topBand =
  "relative before:absolute before:right-[calc(-1*var(--px))] before:bottom-[calc(-1*(var(--gap)+var(--title-half)))] before:left-[calc(-1*var(--px))] before:top-[calc(-1*(var(--pt)+var(--photo)+var(--gap)))] before:-z-10 before:bg-band-top before:content-[''] lg:before:bottom-[calc(-1*(3.5rem+var(--title-half)))] lg:before:left-[calc(-66.667%-var(--gx)-var(--px))] lg:before:top-[calc(-1*var(--pt))]"

/** Footer band: from the horizontal midline of the skills title pill down to the end of the page, across the whole page. */
export const footerBand =
  "relative before:absolute before:inset-x-[calc(-1*var(--px))] before:top-(--title-half) before:bottom-[calc(-1*var(--pb))] before:-z-10 before:bg-band-bottom before:content-['']"
