import type { ComponentType, SVGProps } from 'react'
import type { Contact, Cv } from '../data/types'
import { reveal } from '../hooks/reveal'
import { useSectionTitles, useText } from '../i18n/context'
import type { UiText } from '../i18n/ui'
import { GitHubIcon, HomeIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons'
import { BulletList, Section } from './Section'

interface ContactRow {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  text: string
  /** Small, muted second line under the text. */
  note?: string
  href?: string
}

function contactRows(contact: Contact, t: UiText): ContactRow[] {
  return [
    // No tel: link – the number is masked (pro) or made up (fun).
    { icon: PhoneIcon, label: t.phone, text: contact.phone, note: contact.phoneNote },
    { icon: MailIcon, label: t.email, text: contact.emailLabel ?? contact.email, href: `mailto:${contact.email}` },
    { icon: HomeIcon, label: t.location, text: contact.location },
    { icon: LinkedInIcon, label: t.linkedin, text: contact.linkedinLabel ?? contact.linkedin, href: `https://www.${contact.linkedin}` },
    { icon: GitHubIcon, label: 'GitHub', text: contact.github, href: `https://${contact.github}` },
  ]
}

export function ContactSection({ contact }: { contact: Contact }) {
  const t = useText()
  const titles = useSectionTitles()
  return (
    <Section title={titles.contact}>
      <ul ref={reveal} data-reveal="stagger" className="space-y-3">
        {contactRows(contact, t).map(({ icon: Icon, label, text, note, href }) => (
          <li key={label} className="flex items-center gap-4">
            {/* The colour of its height on the page (page ombre). */}
            <span data-ombre className="grid size-10 shrink-0 place-items-center rounded-full bg-(--ombre-color) text-page fun:text-white">
              <Icon className="size-5" />
              <span className="sr-only">{label}</span>
            </span>
            {href ? (
              <a
                href={href}
                className="break-all no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {text}
              </a>
            ) : note ? (
              // two short lines still fit next to the icon, so the row keeps its height
              <span className="flex flex-col leading-tight">
                <span>{text}</span>
                <span className="text-xs opacity-70">{note}</span>
              </span>
            ) : (
              <span>{text}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

/** A titled flower-bullet list (expertise, languages). */
export function ListSection({ titleKey, items }: { titleKey: 'expertise' | 'languages'; items: string[] }) {
  const titles = useSectionTitles()
  return (
    <Section title={titles[titleKey]}>
      {/* A long list (the pro expertise, one skill per line) in two columns. */}
      <BulletList items={items} className={`pl-10 fun:pl-8 ${items.length > 10 ? 'columns-2 gap-8 *:break-inside-avoid' : ''}`} animate />
    </Section>
  )
}

/** Fun version, under the languages: the cats of the code review board – a photo and a caption. */
export function HelpersSection({ helpers }: { helpers: NonNullable<Cv['helpers']> }) {
  return (
    <Section title={helpers.title}>
      <figure ref={reveal} data-reveal="up" className="space-y-4">
        {helpers.photo && (
          // The frame takes the colour of its height on the page (page ombre), like the title pills around it.
          <img
            src={helpers.photo}
            alt={helpers.alt}
            loading="lazy"
            data-ombre
            className="mx-auto aspect-3/4 w-full max-w-72 rounded-2xl border-4 border-(--ombre-color) object-cover shadow-lg"
          />
        )}
        {/* starts where the flower bullets of the lists above start (list padding 2rem, flower 1.45em to its left) */}
        <figcaption className="pl-[calc(2rem-1.45em)] text-justify leading-relaxed hyphens-auto">{helpers.caption}</figcaption>
      </figure>
    </Section>
  )
}
