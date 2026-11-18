export type Mode = 'pro' | 'fun'

export type Lang = 'hu' | 'en'

export interface Contact {
  phone: string
  /** Small note under the phone number (pro version: it is shared on request only). */
  phoneNote?: string
  /** Shown instead of the e-mail address (fun version); the link still writes to the real one. */
  emailLabel?: string
  email: string
  location: string
  /** Display form, e.g. `linkedin.com/in/someone/` */
  linkedin: string
  /** Shown instead of the LinkedIn address (fun version); the link still goes to the profile. */
  linkedinLabel?: string
}

export interface Job {
  company: string
  location: string
  period: string
  role: string
  /** Free-text paragraph under the job header. */
  intro?: string
  /** Plain bullet list under the job header. */
  highlights?: string[]
  /** "Project Description" bullets. */
  project?: string[]
  /** "Key Achievements and Responsibilities" bullets. */
  achievements?: string[]
}

export interface Education {
  school?: string
  field?: string
  period?: string
  /** Free-text paragraph (used by the fun version). */
  story?: string
}

export interface Skill {
  label: string
  /** 0–100 */
  value: number
}

export interface Cv {
  name: string
  title: string
  tagline?: string
  summary: string
  photo: { src: string; alt: string }
  contact: Contact
  expertise: string[]
  languages: string[]
  experience: Job[]
  /** Hobby projects, laid out like jobs (`company` = project, `location` = kind of project). */
  projects: Job[]
  education: Education[]
  skills: Skill[]
  /** Fun version: the cats of the code review board, under the languages (no photo yet: caption only). */
  helpers?: { title: string; photo?: string; alt: string; caption: string }
  /** "Contact me" in the footer: a short line and a button that starts an e-mail (with this subject). */
  contactCta: { text: string; button: string; subject: string }
  /** Small print at the bottom of the page, after "© <year> ". */
  copyright: string
}
