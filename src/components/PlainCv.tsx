import { useEffect } from 'react'
import { cvs } from '../data'
import { SITE_URL } from '../data/shared'
import type { Job, Lang } from '../data/types'
import { ui } from '../i18n/ui'

/**
 * The plain-text CV (`?view=text`): the pro version in one column, with standard section titles, plain fonts, real
 * links and no graphics – for applicant tracking systems, copy and paste, and quick reading. scripts/pdf.mjs prints it
 * to `cv/Erika-Rostas-CV-text-<lang>.pdf` and saves it as static HTML (`cv/text-<lang>.html`). Same data as the page.
 * Only the chosen language is in it, and the phone number stays private.
 */

const labels = {
  en: {
    summary: 'Summary',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Work Experience',
    education: 'Education',
    languages: 'Languages',
    phone: 'Phone: available on request',
    site: 'Online CV',
  },
  hu: {
    summary: 'Összefoglaló',
    skills: 'Készségek',
    projects: 'Projektek',
    experience: 'Szakmai tapasztalat',
    education: 'Tanulmányok',
    languages: 'Nyelvtudás',
    phone: 'Telefon: kérésre',
    site: 'Online önéletrajz',
  },
} satisfies Record<Lang, Record<string, string>>

const styles = `
  html, body { background: #fff !important; }
  .plain-cv { max-width: 46rem; margin: 0 auto; padding: 2rem 1.25rem 3rem; color: #111;
    font: 10.5pt/1.45 Arial, Helvetica, sans-serif; }
  .plain-cv h1 { font-size: 20pt; font-weight: 700; margin: 0; }
  .plain-cv .title { font-size: 12pt; margin: 0.15rem 0 0.5rem; }
  .plain-cv h2 { font-size: 12.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
    border-bottom: 1px solid #999; margin: 1.1rem 0 0.5rem; padding-bottom: 0.15rem; break-after: avoid; }
  .plain-cv h3 { font-size: 10.5pt; font-weight: 700; margin: 0; }
  .plain-cv p { margin: 0.2rem 0; }
  .plain-cv ul { list-style: disc; margin: 0.25rem 0 0; padding-left: 1.25rem; }
  .plain-cv li { margin: 0.1rem 0; }
  .plain-cv a { color: #0645ad; text-decoration: underline; }
  .plain-cv .entry { margin: 0 0 0.8rem; break-inside: avoid; }
  .plain-cv .meta { color: #333; }
  @media print { .plain-cv { padding: 0; max-width: none; } }
`

/** "Company – role, place, period", as one line that reads well when copied or parsed. */
function Entry({ job }: { job: Job }) {
  const meta = [job.location, job.period].filter(Boolean).join(' | ')
  return (
    <div className="entry">
      <h3>
        {job.role} – {job.company}
      </h3>
      {meta && <p className="meta">{meta}</p>}
      {job.intro && <p>{job.intro}</p>}
      {job.highlights && (
        <ul>
          {job.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {job.links && (
        <ul>
          {job.links.map((link) => (
            <li key={link.href}>
              {link.label.split(':')[0]}: <a href={link.href}>{link.href}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function PlainCv({ lang }: { lang: Lang }) {
  const cv = cvs.pro[lang]
  const t = labels[lang]
  const linkedin = `https://www.${cv.contact.linkedin}`
  // Every job, newest first (the page shows development and other work in two sections).
  const jobs = [...cv.experience, ...(cv.otherExperience ?? [])].sort((a, b) => startYear(b) - startYear(a))

  useEffect(() => {
    document.title = `${cv.name} – CV (${ui[lang].languageName})`
  }, [cv.name, lang])

  return (
    <main className="plain-cv" lang={lang}>
      <style>{styles}</style>
      <h1>{cv.name}</h1>
      <p className="title">{cv.title}</p>
      <p>
        {cv.contact.location} | <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a> | <a href={linkedin}>{linkedin}</a>
      </p>
      <p>
        {t.phone} | {t.site}: <a href={siteUrl(lang)}>{siteUrl(lang)}</a>
      </p>

      <h2>{t.summary}</h2>
      <p>{cv.summary}</p>

      {cv.skillGroups && (
        <>
          <h2>{t.skills}</h2>
          <ul>
            {cv.skillGroups.map((group) => (
              <li key={group.label}>
                <strong>{group.label}:</strong> {group.items.join(', ')}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>{t.projects}</h2>
      {cv.projects.map((project) => (
        <Entry key={project.company} job={project} />
      ))}

      <h2>{t.experience}</h2>
      {jobs.map((job) => (
        <Entry key={`${job.company}-${job.role}`} job={job} />
      ))}

      <h2>{t.education}</h2>
      {cv.education.map((item) => (
        <div key={item.school} className="entry">
          <h3>{item.school}</h3>
          <p className="meta">{[item.field, item.period].filter(Boolean).join(' | ')}</p>
        </div>
      ))}

      <h2>{t.languages}</h2>
      <p>{cv.languages.join(', ')}</p>
    </main>
  )
}

const startYear = (job: Job) => Number(job.period.match(/\d{4}/)?.[0] ?? 0)

const siteUrl = (lang: Lang) => `${SITE_URL}${lang === 'hu' ? '?lang=hu' : ''}`
