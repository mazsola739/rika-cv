import { type FormEvent, type Ref, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { CONTACT_FORM_KEY } from '../data/shared'
import type { Cv, Lang } from '../data/types'
import { ui } from '../i18n/ui'
import { CloseIcon } from './icons'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface ContactDialogProps {
  ref: Ref<HTMLDialogElement>
  lang: Lang
  /** The "Contact me" texts of the shown version: the window's title, the line under it, the e-mail's subject. */
  cta: Cv['contactCta']
}

const field =
  'w-full rounded-xl border border-line bg-page px-4 py-2.5 text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

/**
 * The contact window that "Contact me" opens on the page, so visitors can write without a mail app. The site is
 * static, so the form posts straight to Web3Forms (https://web3forms.com), which e-mails the message to Erika; the
 * visitor's address becomes the reply-to. The hidden "botcheck" box is a honeypot: people never see it, spam bots
 * tick it, and Web3Forms drops those.
 *
 * A modal <dialog>: the page behind it is dimmed and out of reach, Esc or the x closes it, and so does a click on
 * the dimmed page around it. It is rendered at the end of <body>, so the CV's columns and bands can't clip it; the
 * pro / fun colours and fonts still come from <html data-mode>.
 */
export function ContactDialog({ ref, lang, cta }: ContactDialogProps) {
  const t = ui[lang].form
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const message = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...message,
          access_key: CONTACT_FORM_KEY,
          subject: `CV: ${cta.subject} (${message.name})`,
          from_name: 'CV contact form',
        }),
      })
      const result: { success?: boolean } = await response.json()
      if (!result.success) throw new Error('Web3Forms did not accept the message')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return createPortal(
    <dialog
      ref={ref}
      lang={lang}
      aria-labelledby={`${id}-title`}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(100%-2rem,30rem)] overflow-y-auto rounded-3xl bg-page font-body text-[0.9375rem] text-ink shadow-2xl backdrop:bg-black/55 backdrop:backdrop-blur-sm fun:text-[0.875rem]"
      onClick={(event) => {
        // A click on the dimmed page around the window (the <dialog> itself, not its content) closes it.
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
      // Next time it opens without the last "thank you" or error; a half-written message stays.
      onClose={() => setStatus('idle')}
    >
      <div className="flex flex-col gap-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={`${id}-title`} className="font-heading text-lg font-bold tracking-wide uppercase fun:normal-case">
              {cta.button}
            </h2>
            <p className="mt-1 leading-relaxed opacity-80">{cta.text}</p>
          </div>
          <button
            type="button"
            className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-line transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={(event) => event.currentTarget.closest('dialog')?.close()}
            aria-label={t.close}
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={send}>
          <label className="flex flex-col gap-1.5 text-sm font-semibold" htmlFor={`${id}-name`}>
            {t.name}
            <input id={`${id}-name`} className={field} name="name" autoComplete="name" required maxLength={100} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold" htmlFor={`${id}-email`}>
            {t.email}
            <input
              id={`${id}-email`}
              className={field}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold" htmlFor={`${id}-message`}>
            {t.message}
            <textarea id={`${id}-message`} className={`${field} min-h-36 resize-y`} name="message" required maxLength={5000} />
          </label>
          <input className="hidden" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex h-11 cursor-pointer items-center justify-center rounded-full bg-ink px-6 font-heading text-sm font-semibold tracking-[0.2em] text-page uppercase shadow-md transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-60"
            >
              {status === 'sending' ? t.sending : t.send}
            </button>
            <p role="status" className="font-semibold">
              {status === 'sent' && t.sent}
              {status === 'error' && <span className="text-shape">{t.error}</span>}
            </p>
          </div>
          <p className="text-xs leading-relaxed opacity-75">{t.privacy}</p>
        </form>
      </div>
    </dialog>,
    document.body,
  )
}
