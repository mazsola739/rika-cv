import { photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const proEn: Cv = {
  name: 'Erika Rostás',
  title: 'Full-stack Developer | AI-Assisted Software Engineering',
  summary:
    "I'm a full-stack developer with enterprise experience and an AI-assisted approach to software engineering. My core stack is React, TypeScript, Node.js and Express. I spent two years at EPAM Systems on applications for international clients: building UI components, writing tests, refactoring code and mentoring new colleagues. Since 2023 I've been building a real-time multiplayer online board game on my own, on a foundation I wrote by hand, with AI assistance.",
  photo: { src: photos.pro, alt: 'Portrait of Erika Rostás, smiling, in a pink blazer' },
  contact: { ...contact, phoneNote: 'Available on request' },
  expertise: [
    'AI-assisted development (Claude, GitHub Copilot, ChatGPT)',
    'Front end: React, TypeScript, JavaScript, MobX, Redux, HTML, CSS, Tailwind CSS, Vite',
    'Back end: Node.js, Express, REST APIs, WebSocket, DynamoDB, Rust (Axum)',
    'Testing and code quality: Jest, Vitest, Testing Library, Playwright, GitHub Actions',
    'Other: Git, Scrum, code review, pair programming, mentoring, Azure DevOps, Jira',
  ],
  languages,
  experience: [
    {
      ...jobs.epamProject,
      intro: 'I worked on an internal application used by a bank’s employees, in a foreign client’s team.',
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
      intro: 'A customer-facing mobile app for a foreign construction company.',
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
    },
  ],
  education: [
    {
      school: 'Bethlen Gábor Reformed High School',
      field: 'Mathematics, Physics and Computer Science',
      period: '1996 - 2000',
    },
  ],
  skills: [
    { label: 'AI (Claude, Copilot, ChatGPT)', value: 75 },
    { label: 'FE (HTML, JS / TS, CSS)', value: 90 },
    { label: 'BE (Node.js, Express)', value: 50 },
    { label: 'React (Redux, MobX)', value: 65 },
    { label: 'Testing (Jest, Vitest)', value: 40 },
  ],
  skillGroups: [
    { label: 'AI-assisted development', items: ['Claude', 'GitHub Copilot', 'ChatGPT'] },
    { label: 'Front end', items: ['React', 'TypeScript', 'JavaScript', 'MobX', 'Redux', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
    { label: 'Back end', items: ['Node.js', 'Express', 'REST APIs', 'WebSocket', 'DynamoDB', 'Rust (Axum)'] },
    { label: 'Testing and code quality', items: ['Jest', 'Vitest', 'Testing Library', 'Playwright', 'GitHub Actions'] },
    { label: 'Other', items: ['Git', 'Scrum', 'Code review', 'Pair programming', 'Mentoring', 'Azure DevOps', 'Jira'] },
  ],
  contactCta: { text: "I'm open to new opportunities – don't be shy, I'm just one e-mail away!", button: 'Contact me', subject: 'Hello Erika' },
  copyright: 'Erika Rostás. All rights reserved.',
}
