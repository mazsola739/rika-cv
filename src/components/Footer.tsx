import type { Cv } from '../data/types'
import type { Point } from '../hooks/useMode'
import { MailIcon } from './icons'

/** Read once when the page loads. */
const year = new Date().getFullYear()

interface CopyrightProps {
  text: string
  /**
   * Pro version: a reminder after the small print that switches to the fun version. A real link to the fun version
   * of the live site (`href`), so it works in the PDF too; on the page it switches in place.
   */
  hint?: { label: string; href: string; onClick: (origin: Point) => void }
}

/** The small print at the very bottom of the page: serious in the pro version, playful in the fun one. */
export function Copyright({ text, hint }: CopyrightProps) {
  return (
    <p className="text-center text-xs leading-relaxed">
      <span className="opacity-75 fun:opacity-90">
        © {year} {text}
      </span>
      {hint && (
        <>
          {' · '}
          <a
            href={hint.href}
            onClick={(event) => {
              event.preventDefault()
              const rect = event.currentTarget.getBoundingClientRect()
              hint.onClick({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
            }}
            className="cursor-pointer font-semibold underline-offset-4 hover:underline"
          >
            {hint.label}
          </a>
        </>
      )}
    </p>
  )
}

/**
 * "Contact me" in the footer: a pill button and a short line under it. On the page it opens the contact window
 * (`onOpen`, ContactDialog.tsx); it is still a real mailto link with the subject filled in, so in the PDF it opens
 * the reader's mail app. The button is as high and as wide as a title pill, so it looks like the
 * other titles and sits on the footer band's edge just like the skills title next to it. Fun version: the colour of
 * its height on the page (page rainbow).
 */
export function ContactCta({ email, cta, onOpen }: { email: string; cta: Cv['contactCta']; onOpen?: () => void }) {
  return (
    <div className="flex flex-col gap-3">
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(cta.subject)}`}
        onClick={(event) => {
          if (!onOpen) return
          event.preventDefault()
          onOpen()
        }}
        aria-haspopup={onOpen ? 'dialog' : undefined}
        data-ombre
        className="flex h-11 items-center justify-center gap-2.5 rounded-full bg-(--ombre-color) px-6 font-heading text-sm font-semibold tracking-[0.2em] text-page uppercase shadow-md transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink fun:text-white"
      >
        <MailIcon className="size-5" />
        {cta.button}
      </a>
      <p className="max-w-xs px-3 text-sm leading-relaxed sm:px-4">{cta.text}</p>
    </div>
  )
}
