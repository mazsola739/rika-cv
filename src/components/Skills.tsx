import type { CSSProperties } from 'react'
import type { Skill, SkillGroup } from '../data/types'
import { reveal } from '../hooks/reveal'
import { useSectionTitles } from '../i18n/context'
import { Section } from './Section'

/**
 * The ring fills up via CSS (`.skill-ring` in index.css): when it scrolls into view,
 * and again every time its version becomes the visible one. Colours: `--c-ring` / `--c-ring-track`.
 */
function SkillRing({ label, value }: Skill) {
  return (
    // Always one row: every ring gets an equal share of the width and shrinks on small screens.
    <li className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center sm:gap-3">
      {/* fixed 3-line label box: the rings sit at the same height in both versions, however the labels wrap */}
      <span className="flex h-[3.75em] items-end font-heading text-[0.625rem] leading-tight font-medium break-words hyphens-auto sm:text-sm fun:uppercase">
        {label}
      </span>
      <span className="relative aspect-square w-full max-w-[5.5rem] lg:max-w-20">
        <svg viewBox="0 0 100 100" aria-hidden className="size-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" className="stroke-ring-track" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            strokeWidth="8"
            pathLength={100}
            style={{ '--value': value } as CSSProperties}
            className="skill-ring stroke-ring [stroke-linecap:butt] fun:[stroke-linecap:round]"
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-['Montserrat_Variable',sans-serif] text-xs font-light sm:text-base">
          {value}%
        </span>
      </span>
    </li>
  )
}

/**
 * Pro version: the skills in groups, without levels – a self-rated percentage says little, the groups show what
 * goes together. Two columns on phones, all five in a row on desktop, like the rings of the fun version.
 */
function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <ul ref={reveal} data-reveal="stagger" className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-3">
      {groups.map((group) => (
        <li key={group.label} className="min-w-0">
          <h3 className="mb-1.5 font-heading text-xs leading-tight font-bold tracking-wide uppercase">{group.label}</h3>
          <ul className="space-y-0.5 text-[0.8125rem] leading-snug hyphens-auto">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

/** Skills, in the footer: groups in the pro version, rings in the fun one. The colour band behind them belongs to the footer (see bands.ts). */
export function SkillsSection({ skills, groups }: { skills: Skill[]; groups?: SkillGroup[] }) {
  const titles = useSectionTitles()
  if (groups) {
    return (
      <Section title={titles.skills}>
        <SkillGroups groups={groups} />
      </Section>
    )
  }
  return (
    <Section title={titles.skills}>
      {/* All rings in one row on every screen, bottom-aligned even when a label wraps to more lines. */}
      <ul ref={reveal} data-reveal="stagger" className="flex items-end gap-2 sm:gap-3">
        {skills.map((skill) => (
          <SkillRing key={skill.label} {...skill} />
        ))}
      </ul>
    </Section>
  )
}
