import type { Lang, Mode } from '../data/types'

/** Titles of the CV sections. */
export interface SectionTitles {
  contact: string
  expertise: string
  languages: string
  experience: string
  otherExperience: string
  projects: string
  education: string
  skills: string
}

/** Interface texts (titles, labels, tooltips). The CV content itself lives in src/data/<lang>/. */
export interface UiText extends SectionTitles {
  /** The section titles of the fun version. */
  funSections: SectionTitles

  /** Name of the language in itself, e.g. "Magyar". */
  languageName: string
  /** Label of the language switch when it switches *to* this language, written in this language. */
  switchToLanguage: string
  documentTitle: Record<Mode, string>

  pdf: string
  pdfTitle: string
  /** The plain-text, one-column pro CV as a PDF (scripts/pdf.mjs). */
  textPdf: string
  textPdfTitle: string
  modeSwitch: string
  toPro: string
  toFun: string
  /** Reminder in the pro version that there is a fun one too. */
  funHint: string

  contact: string
  phone: string
  email: string
  location: string
  linkedin: string
  expertise: string
  languages: string
  experience: string
  otherExperience: string
  projectDescription: string
  achievements: string
  projects: string
  education: string
  skills: string

  /** The contact window ("Contact me" opens it on the page; in the PDF the button stays an e-mail link). */
  form: {
    name: string
    email: string
    message: string
    send: string
    sending: string
    sent: string
    error: string
    privacy: string
    close: string
  }
}

export const ui = {
  en: {
    languageName: 'English',
    switchToLanguage: 'Switch to English',
    documentTitle: {
      pro: 'Erika Rostás – Full-stack Developer | AI-Assisted Software Engineering',
      fun: 'Erika “Rika” Rostás – Full-stack Unicorn 🦄',
    },

    pdf: 'PDF',
    pdfTitle: 'Download this CV as a PDF',
    textPdf: 'Text',
    textPdfTitle: 'Download the plain-text, one-column CV as a PDF',
    modeSwitch: 'Fun version of the CV',
    toPro: 'Switch to the professional CV',
    toFun: 'Switch to the fun CV',
    funHint: 'Psst… there’s a fun version too 🦄',

    contact: 'Contact',
    phone: 'Phone',
    email: 'E-mail',
    location: 'Location',
    linkedin: 'LinkedIn',
    expertise: 'Expertise',
    languages: 'Language',
    experience: 'Development Work',
    otherExperience: 'Other Work Experience',
    projectDescription: 'Project Description:',
    achievements: 'Key Achievements and Responsibilities:',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills',
    form: {
      name: 'Name',
      email: 'E-mail',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: "Thank you! Your message is on its way, I'll write back soon.",
      error: "Sorry, the message couldn't be sent. Please try again a bit later.",
      privacy: 'Your message reaches my inbox through Web3Forms. I only use your name and e-mail address to write back to you.',
      close: 'Close',
    },
    funSections: {
      contact: 'Ping me',
      expertise: 'Superpowers',
      languages: 'Snack lingo',
      experience: 'Things I passed off as work',
      otherExperience: 'Where the money moves',
      projects: 'What I do for free',
      education: 'Padawan years',
      skills: 'Battery levels',
    },
  },
  hu: {
    languageName: 'Magyar',
    switchToLanguage: 'Váltás magyar nyelvre',
    documentTitle: {
      pro: 'Rostás Erika – Full-stack fejlesztő | AI-asszisztált szoftverfejlesztés',
      fun: 'Rostás „Rika” Erika – Full-stack unikornis 🦄',
    },

    pdf: 'PDF',
    pdfTitle: 'Ez az önéletrajz PDF-ben',
    textPdf: 'Szöveges',
    textPdfTitle: 'Az egyszerű, egyoszlopos szöveges önéletrajz PDF-ben',
    modeSwitch: 'Az önéletrajz vicces változata',
    toPro: 'Váltás a szakmai önéletrajzra',
    toFun: 'Váltás a vicces önéletrajzra',
    funHint: 'Pszt… van vicces változat is 🦄',

    contact: 'Kapcsolat',
    phone: 'Telefon',
    email: 'E-mail',
    location: 'Lakhely',
    linkedin: 'LinkedIn',
    expertise: 'Szakértelem',
    languages: 'Nyelvtudás',
    experience: 'Fejlesztői tapasztalat',
    otherExperience: 'Egyéb munkák',
    projectDescription: 'Projektleírás:',
    achievements: 'Főbb eredmények és feladatok:',
    projects: 'Projektek',
    education: 'Tanulmányok',
    skills: 'Készségek',
    form: {
      name: 'Név',
      email: 'E-mail',
      message: 'Üzenet',
      send: 'Üzenet küldése',
      sending: 'Küldés…',
      sent: 'Köszönöm! Az üzeneted úton van, hamarosan válaszolok.',
      error: 'Sajnos nem sikerült elküldeni az üzenetet. Kérlek, próbáld újra egy kicsit később.',
      privacy: 'Az üzeneted a Web3Forms-on keresztül érkezik a postafiókomba. A nevedet és az e-mail-címedet csak arra használom, hogy válaszoljak.',
      close: 'Bezárás',
    },
    funSections: {
      contact: 'Ping me',
      expertise: 'Szupererők',
      languages: 'Kajanyelvek',
      experience: 'Amit munkának tettettem',
      otherExperience: 'Ahol a pénz forog',
      projects: 'Amit ingyen is csinálok',
      education: 'Padawan-évek',
      skills: 'Töltöttség',
    },
  },
} satisfies Record<Lang, UiText>
