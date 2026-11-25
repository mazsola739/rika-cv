import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="4" height="12" rx="0.6" />
      <circle cx="5" cy="4.9" r="2.3" />
      <path d="M10 9h3.8v1.7c.6-1.1 2-2 3.9-2 3.2 0 4.3 2 4.3 5.1V21h-4v-6.3c0-1.6-.5-2.6-1.9-2.6-1.5 0-2.1 1.1-2.1 2.6V21H10V9Z" />
    </svg>
  )
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M9 3.5h6A2.5 2.5 0 0 1 17.5 6v1H20a2 2 0 0 1 2 2v3H2V9a2 2 0 0 1 2-2h2.5V6A2.5 2.5 0 0 1 9 3.5ZM9 5.5a.5.5 0 0 0-.5.5v1h7V6a.5.5 0 0 0-.5-.5H9Z"
      />
      <path d="M2 13.5h8.5v.75a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.75H22V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.5Z" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 3.5v11m0 0-4.25-4.25M12 14.5l4.25-4.25M4 16.5v2A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-2" />
    </svg>
  )
}

/** A page with lines of text: the plain-text CV. */
export function FileTextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  )
}

/** An x: closes the contact window. */
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" aria-hidden {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
