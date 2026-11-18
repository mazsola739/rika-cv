import type { ComponentType, SVGProps } from 'react'
import type { Contact, Cv } from '../data/types'
import { reveal } from '../hooks/reveal'
import { useSectionTitles, useText } from '../i18n/context'
import type { UiText } from '../i18n/ui'
import { HomeIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons'
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
            {/* Fun version: the colour of its height on the page (page ombre). */}
            <span data-ombre className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-page fun:bg-(--ombre-color) fun:text-white">
              <Icon className="size-5" />
              <span className="sr-only">{label}</span>
            </span>
            {href ? (
              <a
                href={href}
                className="break-all underline-offset-4 hover:underline"
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
      <BulletList items={items} className="pl-10 fun:pl-8" animate />
    </Section>
  )
}

/** Fun version, under the languages: the cats of the code review board – a photo and a caption. */
export function HelpersSection({ helpers }: { helpers: NonNullable<Cv['helpers']> }) {
  return (
    <Section title={helpers.title}>
      <figure ref={reveal} data-reveal="up" className="space-y-4">
        {helpers.photo && (
          <img
            src={helpers.photo}
            alt={helpers.alt}
            loading="lazy"
            className="mx-auto aspect-3/4 w-full max-w-72 rounded-2xl border-4 border-white object-cover shadow-lg"
          />
        )}
        {/* starts where the flower bullets of the lists above start (list padding 2rem, flower 1.45em to its left) */}
        <figcaption className="pl-[calc(2rem-1.45em)] text-justify leading-relaxed hyphens-auto">{helpers.caption}</figcaption>
      </figure>
    </Section>
  )
}
