import photoFun from '../assets/photo-fun.jpg'
import photoPro from '../assets/photo-pro.jpg'
import type { Contact, Job, Mode } from './types'

/** Language-independent bits, shared by all four versions (pro/fun × hu/en). */

export const photos: Record<Mode, string> = { pro: photoPro, fun: photoFun }

/** Where the CV lives – for links that must work outside the page too (in the PDFs). */
export const SITE_URL = 'https://mazsola739.github.io/rika-cv/'

/**
 * The four cats of the fun version's code review board: src/assets/cats.(jpg|jpeg|png|webp), if it is there.
 * A glob instead of an import, so the page also builds (and shows the caption alone) while the photo is missing.
 */
const catPhotos = import.meta.glob<string>('../assets/cats.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
export const catsPhoto: string | undefined = Object.values(catPhotos)[0]

export const contactBase = {
  // Masked on purpose: the phone number is not public (not even in the bundle or the PDF).
  phone: '+36 •• ••• ••••',
  email: 'mazsola39@gmail.com',
  linkedin: 'linkedin.com/in/mazsi39/',
} satisfies Omit<Contact, 'location'>

/** Job metadata is the same in the pro and fun version of a language – only the storytelling differs. */
export type JobMeta = Pick<Job, 'company' | 'location' | 'period' | 'role'>
export type JobKey = 'epamProject' | 'epamJunior' | 'bank' | 'exchange'
