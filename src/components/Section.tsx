import { useId, type ReactNode } from 'react'
import { reveal } from '../hooks/reveal'
import { TitleBlooms } from './Blooms'

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

/**
 * A titled CV block. Fun version: the title pill takes the colour of its height on the page
 * (`data-ombre`: a rainbow from crimson at the top to violet at the bottom, see usePageOmbre) and has little
 * flowers at its ends.
 */
export function Section({ title, children, className = '' }: SectionProps) {
  const id = useId()
  return (
    // data-reveal="section": the title bar grows out of its middle when the section scrolls into view.
    // The pill is 2.75rem high in both versions (--title-half in index.css), so everything lines up when switching.
    <section ref={reveal} data-reveal="section" aria-labelledby={id} className={className}>
      <h2
        id={id}
        data-ombre
        className="relative mb-5 flex min-h-11 items-center justify-center rounded-full bg-ink pl-[0.32em] text-center font-heading text-[0.95rem] font-medium tracking-[0.32em] text-page uppercase fun:bg-(--ombre-color) fun:text-lg fun:font-bold fun:text-white"
      >
        <TitleBlooms />
        {title}
      </h2>
      {/* Inset a little, so the content does not line up with the pill's rounded end. */}
      <div className="px-3 sm:px-4">{children}</div>
    </section>
  )
}

interface BulletListProps {
  items: string[]
  className?: string
  /** Let the items slide in one after the other when the list scrolls into view. */
  animate?: boolean
}

/** Fun version: flower bullets, each in the colour of its height on the page (`data-ombre`). */
export function BulletList({ items, className = '', animate = false }: BulletListProps) {
  return (
    <ul
      ref={animate ? reveal : undefined}
      data-reveal={animate ? 'stagger' : undefined}
      className={`bullets list-disc space-y-1 pl-5 marker:text-ink ${className}`}
    >
      {items.map((item) => (
        <li key={item} data-ombre>
          {item}
        </li>
      ))}
    </ul>
  )
}
