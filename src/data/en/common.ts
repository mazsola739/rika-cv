import { contactBase, type JobKey, type JobMeta } from '../shared'
import type { Contact } from '../types'

export const contact: Contact = { ...contactBase, location: '6800 Hódmezővásárhely, Hungary' }

export const languages = ['English (B2)', 'Hungarian (native)']

/** Own projects: `company` is the project, `location` the kind of project. */
export const projects = {
  boardGame: { company: 'Online multiplayer board game', location: 'Independent full-stack project', period: '2023 - Present', role: 'Full-stack developer' },
} satisfies Record<string, JobMeta>

export const jobs = {
  exchange: { company: 'Interchange FX', location: '', period: '2024 - Present', role: 'Currency Exchange Cashier' },
  epamProject: { company: 'EPAM Systems', location: 'Szeged, Hungary', period: '2023', role: 'Software Engineer' },
  epamJunior: { company: 'EPAM Systems', location: 'Szeged, Hungary', period: '2021 - 2023', role: 'Junior Software Engineer' },
  bank: { company: 'MBH Bank', location: '', period: '2016 - 2021', role: 'Head Cashier' },
} satisfies Record<JobKey, JobMeta>
