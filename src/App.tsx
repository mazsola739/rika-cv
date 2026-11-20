import { useEffect, useRef } from 'react'
import { footerBand, topBand } from './components/bands'
import { CornerBottomLeft, CornerTopRight } from './components/Decorations'
import { EducationSection, ExperienceSection, ProjectsSection } from './components/Experience'
import { ContactCta, Copyright } from './components/Footer'
import { Header } from './components/Header'
import { Photo } from './components/Photo'
import { ContactSection, HelpersSection, ListSection } from './components/Sidebar'
import { SkillsSection } from './components/Skills'
import { Toolbar } from './components/Toolbar'
import { VersionSlot } from './components/VersionSlot'
import { cvs } from './data'
import { SITE_URL } from './data/shared'
import type { Lang } from './data/types'
import { usePageOmbre } from './hooks/pageOmbre'
import { reveal } from './hooks/reveal'
import { useLang } from './hooks/useLang'
import { useMode } from './hooks/useMode'
import { LangContext } from './i18n/context'
import { ui } from './i18n/ui'

/** The fun version of the live site, in a language (the pro footer's reminder links there – in the PDF too). */
const funUrl = (lang: Lang) => `${SITE_URL}?mode=fun${lang === 'hu' ? '&lang=hu' : ''}`

export default function App() {
  const { mode, toggle: toggleMode } = useMode()
  const { lang, toggle: toggleLang } = useLang()
  const t = ui[lang]
  const page = useRef<HTMLElement>(null)
  usePageOmbre(page, `${mode}-${lang}`)

  useEffect(() => {
    document.title = t.documentTitle[mode]
  }, [t, mode])

  return (
    <LangContext value={lang}>
      <div className="min-h-dvh overflow-x-clip bg-page font-body text-[0.9375rem] text-ink antialiased fun:text-[0.875rem]">
        <Toolbar mode={mode} lang={lang} onToggleMode={toggleMode} onToggleLang={toggleLang} />

        {/*
          Header band: photo, name, title, introduction. Body: sidebar + experience. Footer band: skills + small print.
          overflow-clip: the shapes only show where they reach into the page – whatever sticks out of it is cut off at its edge.
          Phones: one column (photo → header → sidebar → experience → footer), using `contents` + `order`.
          Desktop: two columns like the printed CV, the footer across both.
          Every block is a VersionSlot (all versions and languages stacked, the tallest one sets the size), so the shapes
          and bands stay in place when switching version or language – except experience, projects and education, whose
          pro and fun versions differ too much in length (only their languages are stacked).
        */}
        <main
          ref={page}
          className="cv-page relative isolate mx-auto flex max-w-[1180px] flex-col overflow-clip gap-(--gap) px-(--px) pt-(--pt) pb-(--pb) lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-x-(--gx) lg:gap-y-0"
        >
          <CornerTopRight />
          <CornerBottomLeft />

          <div className="contents lg:block lg:@container">
            <VersionSlot mode={mode} lang={lang} className="order-1 lg:order-none lg:pt-12">
              {(version, l) => <Photo {...cvs[version][l].photo} />}
            </VersionSlot>
            {/* Desktop: leave room for the diagonal bar coming out of the photo. */}
            <div className="order-3 flex flex-col gap-8 lg:order-none lg:mt-[calc(30cqw+var(--photo)*0.27+1.75rem)]">
              <VersionSlot mode={mode} lang={lang}>{(version, l) => <ContactSection contact={cvs[version][l].contact} />}</VersionSlot>
              <VersionSlot mode={mode} lang={lang}>
                {(version, l) => <ListSection titleKey="expertise" items={cvs[version][l].expertise} />}
              </VersionSlot>
              <VersionSlot mode={mode} lang={lang}>
                {(version, l) => <ListSection titleKey="languages" items={cvs[version][l].languages} />}
              </VersionSlot>
              {/* Fun only, at the bottom of the left column: nothing else moves, so pro and fun still line up. */}
              {cvs[mode][lang].helpers && (
                <VersionSlot mode={mode} lang={lang} stacked={false}>
                  {(version, l) => {
                    const helpers = cvs[version][l].helpers
                    return helpers && <HelpersSection helpers={helpers} />
                  }}
                </VersionSlot>
              )}
            </div>
          </div>

          <div className="contents lg:block">
            <VersionSlot mode={mode} lang={lang} reveal="band" className={`order-2 lg:order-none ${topBand}`}>
              {(version, l) => <Header cv={cvs[version][l]} />}
            </VersionSlot>
            {/* lg:mt-14 (3.5rem): the header band ends at the work experience title's midline (bands.ts) */}
            <div className="order-4 flex flex-col gap-8 lg:order-none lg:mt-14">
              <VersionSlot mode={mode} lang={lang} stacked={false}>
                {(version, l) => <ExperienceSection jobs={cvs[version][l].experience} />}
              </VersionSlot>
              <VersionSlot mode={mode} lang={lang} stacked={false}>
                {(version, l) => <ProjectsSection projects={cvs[version][l].projects} />}
              </VersionSlot>
              <VersionSlot mode={mode} lang={lang} stacked={false}>
                {(version, l) => <EducationSection items={cvs[version][l].education} />}
              </VersionSlot>
            </div>
          </div>

          {/* Desktop: skills and small print in the right column; "contact me" top left, above the bottom-left shapes. */}
          <footer
            ref={reveal}
            data-reveal="band"
            className={`cv-footer order-5 lg:col-span-2 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-(--gx) ${footerBand}`}
          >
            <VersionSlot mode={mode} lang={lang} className="lg:col-start-2 lg:row-start-1">
              {(version, l) => <SkillsSection skills={cvs[version][l].skills} />}
            </VersionSlot>
            <VersionSlot mode={mode} lang={lang} className="mt-8 lg:col-start-1 lg:row-start-1 lg:mt-0">
              {(version, l) => <ContactCta email={cvs[version][l].contact.email} cta={cvs[version][l].contactCta} />}
            </VersionSlot>
            <VersionSlot mode={mode} lang={lang} className="mt-6 lg:col-start-2">
              {(version, l) => (
                <Copyright
                  text={cvs[version][l].copyright}
                  hint={version === 'pro' ? { label: ui[l].funHint, href: funUrl(l), onClick: toggleMode } : undefined}
                />
              )}
            </VersionSlot>
          </footer>
        </main>
      </div>
    </LangContext>
  )
}
