import { contactBase, type JobKey, type JobMeta } from '../shared'
import type { Contact } from '../types'

export const contact: Contact = { ...contactBase, location: '6800 Hódmezővásárhely' }

export const languages = ['Angol (B2)', 'Magyar (anyanyelv)']

/** Hobbiprojektek: a `company` a projekt, a `location` a projekt fajtája. */
export const projects = {
  boardGame: { company: 'Online társasjáték', location: 'Hobbiprojekt', period: '2023 – 2026', role: 'Egyéni full-stack fejlesztő' },
} satisfies Record<string, JobMeta>

export const jobs = {
  exchange: { company: 'Interchange FX', location: '', period: '2024 – jelenleg', role: 'Valutapénztáros' },
  epamProject: { company: 'EPAM Systems', location: 'Szeged', period: '2023', role: 'Software Engineer' },
  epamJunior: { company: 'EPAM Systems', location: 'Szeged', period: '2021 – 2023', role: 'Junior Software Engineer' },
  bank: { company: 'MBH Bank', location: '', period: '2016 – 2021', role: 'Főpénztáros' },
} satisfies Record<JobKey, JobMeta>
