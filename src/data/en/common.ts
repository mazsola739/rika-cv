import { contactBase, type JobKey, type JobMeta } from '../shared'
import type { Contact } from '../types'

export const contact: Contact = { ...contactBase, location: '6800 Hódmezővásárhely, Hungary' }

export const languages = ['English (B2)', 'Hungarian (native)']

/** Hobby projects: `company` is the project, `location` the kind of project. */
export const projects = {
  boardGame: { company: 'Online board game', location: 'Hobby project', period: '2023 - 2026', role: 'Solo full-stack developer' },
} satisfies Record<string, JobMeta>

export const jobs = {
  exchange: { company: 'Interchange FX', location: '', period: '2023 - Present', role: 'Currency Exchange Cashier' },
  epamProject: { company: 'EPAM Systems', location: 'Szeged, Hungary', period: '2023', role: 'Software Engineer' },
  epamJunior: { company: 'EPAM Systems', location: 'Szeged, Hungary', period: '2022 - 2023', role: 'Junior Software Engineer' },
  bank: { company: 'MBH Bank', location: '', period: '2016 - 2021', role: 'Head Cashier' },
} satisfies Record<JobKey, JobMeta>
