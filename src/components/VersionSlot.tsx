import type { ReactNode } from 'react'
import type { Lang, Mode } from '../data/types'
import { reveal, type RevealKind } from '../hooks/reveal'
import { LangContext, VersionContext } from '../i18n/context'

const VERSIONS: Mode[] = ['fun', 'pro']
const LANGS: Lang[] = ['hu', 'en']

interface VersionSlotProps {
  mode: Mode
  lang: Lang
  /** One copy of the block, for a version and a language. */
  children: (version: Mode, lang: Lang) => ReactNode
  className?: string
  reveal?: RevealKind
  /**
   * `false`: don't stack the two versions – the hidden one takes no room. For blocks whose versions differ a lot in
   * length (experience, projects, education), where the shorter one would leave a big empty gap.
   * The two languages are always stacked.
   */
  stacked?: boolean
}

/**
 * Renders a CV block in every version and language on top of each other (pro/fun × hu/en); only the active one
 * is visible. The slot is as tall as the tallest copy, so everything around it – colour bands, section bars,
 * corner shapes – sits at exactly the same place whichever version or language is shown, and switching only
 * recolours or rewrites them. Each copy gets its own language (texts, hyphenation, screen readers).
 */
export function VersionSlot({ mode, lang, children, className = '', reveal: revealKind, stacked = true }: VersionSlotProps) {
  return (
    <div ref={revealKind ? reveal : undefined} data-reveal={revealKind} className={`grid ${className}`}>
      {VERSIONS.flatMap((version) =>
        LANGS.map((copyLang) => {
          const isActive = version === mode && copyLang === lang
          const hidden = isActive ? '' : version !== mode && !stacked ? 'hidden' : 'invisible'
          return (
            <LangContext key={`${version}-${copyLang}`} value={copyLang}>
              <VersionContext value={version}>
                <div
                  data-version={version}
                  lang={copyLang}
                  inert={!isActive}
                  className={`col-start-1 row-start-1 min-w-0 font-body text-[0.9375rem] text-ink fun:text-[0.875rem] ${hidden}`}
                >
                  {children(version, copyLang)}
                </div>
              </VersionContext>
            </LangContext>
          )
        }),
      )}
    </div>
  )
}
