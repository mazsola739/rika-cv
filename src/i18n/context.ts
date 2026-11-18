import { createContext, useContext } from 'react'
import type { Lang, Mode } from '../data/types'
import { ui, type SectionTitles, type UiText } from './ui'

export const LangContext = createContext<Lang>('en')

/** The CV version a block is rendered for (each VersionSlot copy sets its own). */
export const VersionContext = createContext<Mode>('pro')

/** Interface texts in the current language. */
export function useText(): UiText {
  return ui[useContext(LangContext)]
}

/** Section titles for the current language and version (the fun version has playful ones). */
export function useSectionTitles(): SectionTitles {
  const t = useText()
  return useContext(VersionContext) === 'fun' ? t.funSections : t
}
