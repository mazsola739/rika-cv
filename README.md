# rika-cv

My CV as a small React app – with a switch between the **professional** and the **fun** version,
working just like a dark/light theme toggle, in **Hungarian** and **English**.

| Pro | Fun |
| --- | --- |
| black & white, pill-shaped section titles, Archivo Black + Montserrat | the colours of the original PDF (pink header, crimson ring, lilac footer) and a page-wide rainbow from crimson at the top to violet at the bottom, with the flowers, stars and confetti of a unicorn card; Short Stack + Kode Mono 🦄 |

The page has a **header** (photo, name, title, introduction), a two-column body (contact, expertise, languages |
experience, projects, education) and a **footer** (skill rings in one row, and the small print: a playful one in the
fun version, a serious one in the pro version).

## Stack

- [Bun](https://bun.sh) – package manager & script runner
- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) – the two versions are a custom `fun:` variant
- [oxlint](https://oxc.rs) for linting, self-hosted fonts via [Fontsource](https://fontsource.org)

## Scripts

```bash
bun install      # install dependencies
bun dev          # dev server on http://localhost:2739
bun run build    # type-check + production build into dist/
bun run preview  # serve the production build
bun run lint     # oxlint
```

## How the switch works

- `<html data-mode="pro|fun">` holds the current version. Every visit starts in **pro**; only a direct
  `?mode=fun` link opens the fun one (in the pro version a little bubble under the switch, and a link in the
  footer, remind visitors that there is a fun version too) (the inline script in `index.html` sets it before the first paint, so there is no flash).
- `src/index.css` defines `@custom-variant fun (...)` – base classes are the pro look, `fun:` overrides them,
  exactly like `dark:`. Colours and fonts are CSS variables that swap per mode (`bg-band-top`, `font-heading`, …).
- `src/hooks/useMode.ts` toggles the mode (not remembered – a reload goes back to pro)
  and plays a circular reveal from the switch using the View Transitions API (skipped with reduced motion).
- Every CV block is a `VersionSlot`: all versions *and both languages* are rendered on top of each other (the hidden one is
  `invisible` + `inert`, marked `data-version`, which the `fun:` variant respects). The slot is as tall as the
  taller version, so the bands, title bars and corner shapes are in exactly the same place in both versions and
  the switch only recolours them. The experience, projects and education blocks are not stacked (`stacked={false}`):
  their versions differ so much in length that the shorter one would leave a big empty gap.

## Animations

- Shapes and blocks animate in when they scroll into view: `ref={reveal}` + `data-reveal="<kind>"`
  (`src/hooks/reveal.ts`, one shared IntersectionObserver), the motion itself is CSS in `src/index.css`:
  corner shapes slide in from outside the page, the photo ring pops and its bar slides in along the diagonal,
  the colour bands wipe in, section bars grow from the middle, lists rise in one by one, skill rings fill up.
- Skill rings fill again whenever their version becomes the visible one.
- Nothing moves with `prefers-reduced-motion: reduce`, and nothing is hidden in print.
- The CV texts live in `src/data/<lang>/pro.ts` and `fun.ts` (same `Cv` type), per-language contact and job
  details in `src/data/<lang>/common.ts`, language-independent bits in `src/data/shared.ts`.

## How the language switch works

- The page always starts in **English**; only a `?lang=hu` link opens the Hungarian one (combinable with `?mode=pro`).
- `src/hooks/useLang.ts` switches it (not remembered – a reload goes back to English),
  sets `<html lang>` for hyphenation and screen readers, and cross-fades the page.
- Interface texts (section titles, labels, tooltips, page title) are in `src/i18n/ui.ts`;
  components read them with `useText()`.
- Short Stack (fun headings) has no `ő`/`ű`, so Comic Relief fills in just those glyphs.

## Project structure

```
src/
  App.tsx              layout: header band, body (2 columns on desktop, stacked on phones), footer band
  components/          Header, Photo, Sidebar, Experience, Skills, Toolbar (switches), Decorations,
                       Blooms (flowers, stars and confetti of the fun version), Footer (small print),
                       VersionSlot (both versions stacked), bands.ts (the colour bands)
  data/en, data/hu     CV content for both versions, per language
  i18n/                interface texts + useText()
  hooks/useMode.ts     the pro ↔ fun switch
  hooks/useLang.ts     the HU ↔ EN switch
  hooks/reveal.ts      scroll-in animations
  hooks/pageOmbre.ts   the fun page rainbow: title pills, contact icons and bullets coloured by their height
  index.css            Tailwind import, theme tokens, `fun:` variant, animations
archive/RikaCV-canva-masked.pdf   the old, outdated print version (not deployed)
```

## Deploy

The site lives at **https://mazsola739.github.io/rika-cv/**.

`.github/workflows/deploy.yml` lints and builds every push and pull request; every push to `main` (and a manual run
from the Actions tab) is also published to GitHub Pages. The Vite `base` is relative (`./`), so the build works under
any sub-path (here `/rika-cv/`).
