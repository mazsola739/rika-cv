import { photos, SITE_URL } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const proEn: Cv = {
  name: 'Erika Rostás',
  title: 'Full-stack Developer | AI-Assisted Software Engineering',
  summary:
    "I'm a full-stack developer with enterprise experience and an AI-assisted approach to software engineering. Since 2025 I've worked with GitHub Copilot and later Claude to learn new technologies and tackle complex development tasks. My core stack is React, TypeScript, Node.js and Express. I spent two years at EPAM Systems on applications for international clients: building UI components, writing tests, refactoring code and mentoring new colleagues. Since 2023 I've been building a real-time multiplayer online board game on my own – on the foundation I wrote by hand, I used AI assistance to rebuild the back end in Rust, integrate DynamoDB and add WebRTC voice chat.",
  photo: { src: photos.pro, alt: 'Portrait of Erika Rostás, smiling, in a pink blazer' },
  contact: { ...contact, phoneNote: 'Available on request' },
  expertise: ['AI-assisted development (GitHub Copilot, Claude)', 'React, TypeScript, MobX, Redux', 'Node.js, Express, WebSocket', 'HTML, CSS, Tailwind CSS', 'Testing (Jest, Vitest, Playwright)', 'Git, Scrum, code review'],
  languages,
  experience: [
    {
      ...jobs.epamProject,
      intro: 'Staff augmentation: I worked in the client’s team on a banking application.',
      highlights: [
        'Built React and TypeScript components of varying complexity in a team of four front-end developers and one full-stack developer.',
        'Took part in modernizing the front-end tooling.',
        'Did code reviews, refactoring and bug fixing.',
        'Worked in Scrum, with pair programming and regular client meetings.',
        'Tech: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence.',
      ],
    },
    {
      ...jobs.epamJunior,
      intro: 'A mobile app for a construction-industry product.',
      highlights: [
        'Designed and built UI components as the junior member of a four-person front-end team (a lead and two senior developers).',
        'Wrote unit tests and improved code quality.',
        'Mentored new team members during their onboarding.',
        'Worked in Scrum, with pair programming and client meetings.',
        'Tools: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
  ],
  otherExperience: [
    {
      ...jobs.exchange,
      highlights: ['Exchanging currencies and handling cash for customers.'],
    },
    {
      ...jobs.bank,
      highlights: ['Supervised the vault and the cash reserves.', 'Handled the daily cash turnover.', 'Managed the ATMs.'],
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      intro: 'A real-time web version of a social deduction board game, designed and built on my own.',
      highlights: [
        'Features: real-time lobby and game rooms over WebSocket, a narrated night phase in English and Hungarian, peer-to-peer voice chat and stored game data.',
        '2023–2024, written by hand: React and MobX on the client, Node.js and Express with WebSockets on the server.',
        'Since 2025, with AI assistance (GitHub Copilot, then Claude): moved the code to TypeScript, integrated DynamoDB, rebuilt the back end in Rust (Axum, Tokio) and added WebRTC voice chat.',
        'Quality: unit tests with Vitest and Testing Library, multiplayer end-to-end tests with Playwright, Storybook, CI/CD with GitHub Actions; 2,400+ commits.',
        'Tech: React, TypeScript, MobX, Tailwind CSS, Node.js, Express, WebSocket, Rust, DynamoDB, WebRTC.',
      ],
      links: [{ label: 'Showcase: mazsola739.github.io/rika-onug-showcase', href: 'https://mazsola739.github.io/rika-onug-showcase/' }],
    },
    {
      ...projects.cvApp,
      intro:
        'This CV: a React and TypeScript app in English and Hungarian, with a professional and a fun version, PDFs printed by Playwright and deployment to GitHub Pages with GitHub Actions.',
      links: [
        { label: 'Code: github.com/mazsola739/rika-cv', href: 'https://github.com/mazsola739/rika-cv' },
        { label: `Live: ${SITE_URL.replace('https://', '').replace(/\/$/, '')}`, href: SITE_URL },
      ],
    },
  ],
  education: [
    {
      school: 'Bethlen Gábor Reformed High School',
      field: 'Mathematics, Physics and Computer Science',
      period: '1996 - 2000',
    },
  ],
  skills: [],
  skillGroups: [
    { label: 'AI-assisted development', items: ['GitHub Copilot', 'Claude', 'Learning new technologies', 'Complex features and refactoring'] },
    { label: 'Front end', items: ['React', 'TypeScript', 'JavaScript', 'MobX, Redux', 'HTML, CSS, Tailwind CSS', 'Vite'] },
    { label: 'Back end & real time', items: ['Node.js', 'Express', 'REST APIs', 'WebSocket', 'DynamoDB', 'Rust (Axum) – in the board game'] },
    { label: 'Testing & CI/CD', items: ['Jest', 'Vitest', 'Testing Library', 'Playwright', 'GitHub Actions'] },
    { label: 'Collaboration', items: ['Git', 'Scrum', 'Code review', 'Pair programming', 'Mentoring', 'Azure DevOps, Jira'] },
  ],
  contactCta: { text: "Have a question or an offer? I'm one e-mail away.", button: 'Contact me', subject: 'Hello Erika' },
  copyright: 'Erika Rostás. All rights reserved.',
}
