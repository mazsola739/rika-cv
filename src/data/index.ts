import { funEn } from './en/fun'
import { proEn } from './en/pro'
import { funHu } from './hu/fun'
import { proHu } from './hu/pro'
import type { Cv, Lang, Mode } from './types'

/** All four versions of the CV: pro/fun × Hungarian/English. */
export const cvs: Record<Mode, Record<Lang, Cv>> = {
  pro: { hu: proHu, en: proEn },
  fun: { hu: funHu, en: funEn },
}

export type { Cv, Lang, Mode } from './types'
