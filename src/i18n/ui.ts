import type { Lang, Mode } from '../data/types'

/** Titles of the CV sections. */
export interface SectionTitles {
  contact: string
  expertise: string
  languages: string
  experience: string
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
  projectDescription: string
  achievements: string
  projects: string
  education: string
  skills: string
}

export const ui = {
  en: {
    languageName: 'English',
    switchToLanguage: 'Switch to English',
    documentTitle: {
      pro: 'Erika Rostás – Full-stack Developer',
      fun: 'Erika “Rika” Rostás – Full-stack Unicorn 🦄',
    },

    pdf: 'PDF',
    pdfTitle: 'Download the original PDF (both CVs)',
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
    experience: 'Work Experience',
    projectDescription: 'Project Description:',
    achievements: 'Key Achievements and Responsibilities:',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills Summary',
    funSections: {
      contact: 'Ping me',
      expertise: 'Superpowers',
      languages: 'Lingo',
      experience: 'Day jobs',
      projects: 'Pet projects',
      education: 'Padawan years',
      skills: 'Battery levels',
    },
  },
  hu: {
    languageName: 'Magyar',
    switchToLanguage: 'Váltás magyar nyelvre',
    documentTitle: {
      pro: 'Rostás Erika – Full-stack fejlesztő',
      fun: 'Rostás „Rika” Erika – Full-stack unikornis 🦄',
    },

    pdf: 'PDF',
    pdfTitle: 'Az eredeti PDF letöltése (angol nyelvű, mindkét változat)',
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
    experience: 'Szakmai tapasztalat',
    projectDescription: 'Projektleírás:',
    achievements: 'Főbb eredmények és feladatok:',
    projects: 'Projektek',
    education: 'Tanulmányok',
    skills: 'Készségek',
    funSections: {
      contact: 'Pingelj!',
      expertise: 'Szupererők',
      languages: 'Nyelvtörő',
      experience: 'Melók',
      projects: 'Szívügyeim',
      education: 'Padawan-évek',
      skills: 'Töltöttség',
    },
  },
} satisfies Record<Lang, UiText>
