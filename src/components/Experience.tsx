import type { Education, Job } from '../data/types'
import { reveal } from '../hooks/reveal'
import { useSectionTitles, useText } from '../i18n/context'
import { BulletList, Section } from './Section'

function JobEntry({ job }: { job: Job }) {
  const t = useText()
  return (
    <article ref={reveal} data-reveal="up" className="space-y-2">
      {/*
        Two rows: name | place, period | role – so a long role never squeezes the name onto two lines.
        Fun version: one small size for the whole header (a size smaller still on narrow desktops, where its wide,
        uppercase letters would not fit).
      */}
      <header className="font-heading text-[0.95rem] leading-snug font-medium fun:text-sm fun:leading-tight fun:font-bold fun:uppercase fun:lg:text-xs fun:xl:text-sm">
        <div className="flex flex-wrap justify-between gap-x-4 fun:items-baseline">
          <h3>{job.company}</h3>
          <p className="ml-auto text-right">{job.location}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-4 fun:items-baseline">
          <p>{job.period}</p>
          <p className="ml-auto text-right">{job.role}</p>
        </div>
      </header>

      {job.intro && <p className="leading-relaxed hyphens-auto sm:text-justify">{job.intro}</p>}
      {job.highlights && <BulletList items={job.highlights} />}

      {job.project && (
        <>
          <p className="font-bold">{t.projectDescription}</p>
          <BulletList items={job.project} />
        </>
      )}

      {job.achievements && (
        <>
          <p className="font-bold">{t.achievements}</p>
          <BulletList items={job.achievements} />
        </>
      )}
    </article>
  )
}

export function ExperienceSection({ jobs, other = false }: { jobs: Job[]; other?: boolean }) {
  const titles = useSectionTitles()
  return (
    <Section title={other ? titles.otherExperience : titles.experience}>
      <div className="space-y-6">
        {/* Index keys: the entries stay mounted when the language changes, so they don't animate in again. */}
        {jobs.map((job, index) => (
          <JobEntry key={index} job={job} />
        ))}
      </div>
    </Section>
  )
}

/** Own projects – same layout as a job (name, kind, period, role, description, bullets). */
export function ProjectsSection({ projects }: { projects: Job[] }) {
  const titles = useSectionTitles()
  return (
    <Section title={titles.projects}>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <JobEntry key={index} job={project} />
        ))}
      </div>
    </Section>
  )
}

export function EducationSection({ items }: { items: Education[] }) {
  const titles = useSectionTitles()
  return (
    <Section title={titles.education}>
      <div ref={reveal} data-reveal="up" className="space-y-4">
        {items.map((item, index) => (
          <div key={item.school ?? index}>
            {item.school && <h3 className="font-heading text-base font-semibold">{item.school}</h3>}
            {item.field && <p className="text-sm">{item.field}</p>}
            {item.period && <p className="text-sm text-neutral-600">{item.period}</p>}
            {item.story && <p className="leading-relaxed hyphens-auto sm:text-justify">{item.story}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
