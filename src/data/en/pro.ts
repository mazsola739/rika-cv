import { photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const proEn: Cv = {
  name: 'Erika Rostás',
  title: 'Full-stack Developer',
  summary:
    'Full-stack developer with hands-on experience in AI-assisted development: since 2025 I have been coding with an AI assistant – first GitHub Copilot, now Claude – and with them I keep exploring new technologies such as Rust. My main stack is React and TypeScript on the front end and Node.js and Express on the back end. I spent two years at EPAM Systems on enterprise React applications for international clients, where I helped build a mobile app for the construction industry and mentored new colleagues. Since 2023 I have been building a real-time online board game as a hobby: I wrote both the React front end and the Express/WebSocket back end by hand.',
  photo: { src: photos.pro, alt: 'Portrait of Erika Rostás, smiling, in a pink blazer' },
  contact: { ...contact, phoneNote: 'Available on request' },
  expertise: ['AI-assisted development (Copilot, Claude)', 'FE (HTML, JS/TS, CSS)', 'BE (Node.js, Express)', 'React, Vite, Redux, MobX', 'Testing (Jest, Vitest)', 'Git & Scrum'],
  languages,
  experience: [
    {
      ...jobs.exchange,
      highlights: ['Exchanging currencies and handling cash for customers.'],
    },
    {
      ...jobs.epamProject,
      intro: 'Staff augmentation: I worked in the client’s team on a banking application.',
      highlights: [
        'Developed React and TypeScript components of varying complexity in a team of 4 front-end and 1 full-stack developer.',
        'Modernized the front-end tooling to improve the user experience.',
        'Performed code reviews, refactoring and bug fixing.',
        'Worked in Scrum: sprint ceremonies, pair programming, customer meetings.',
        'Tech stack: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence, Visual Studio Code.',
      ],
    },
    {
      ...jobs.epamJunior,
      intro: 'Developed a mobile app for a construction-industry product.',
      highlights: [
        'Designed and built UI components to improve the user experience, as the junior member of a four-person front-end team (with a lead and two senior developers).',
        'Wrote unit tests and improved code quality.',
        'Took part in Scrum ceremonies, pair programming and client meetings.',
        'Mentored new team members during onboarding.',
        'Tech stack: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
    {
      ...jobs.bank,
      highlights: ['Supervised the vault and the cash reserves.', 'Handled the daily cash turnover.', 'Managed the ATMs.'],
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      intro:
        'Real-time online adaptation of a social deduction board game: lobby, game rooms, roles, a narrated night phase in English and Hungarian, and voice chat between the players.',
      highlights: [
        '2023–2024: wrote the front end and the back end by hand – React and MobX on the client, Node.js and Express with WebSockets on the server.',
        '2025–2026: with AI assistance – first GitHub Copilot, then Claude – added DynamoDB, introduced TypeScript, rebuilt the back end in Rust (Axum, Tokio) and added peer-to-peer voice chat (WebRTC).',
        'Quality: unit tests with Vitest and Testing Library, multiplayer end-to-end tests with Playwright, Storybook, CI/CD with GitHub Actions.',
        '2,400+ commits over three years.',
        'Tech stack: React, TypeScript, MobX, Vite, Tailwind CSS, Node.js, Express, WebSocket, DynamoDB, Rust (Axum, Tokio), WebRTC, Vitest, Playwright, GitHub Actions.',
      ],
    },
  ],
  education: [
    {
      school: 'Bethlen Gábor Reformed High School',
      field: 'Mathematics and Physics and Computer Science',
      period: '1996-2000',
    },
  ],
  skills: [
    { label: 'AI (Copilot, Claude)', value: 90 },
    { label: 'FE (HTML, JS / TS, CSS)', value: 90 },
    { label: 'BE (Node.js, Express)', value: 70 },
    { label: 'React (Redux, MobX)', value: 80 },
    { label: 'Testing (Jest, Vitest)', value: 60 },
  ],
  contactCta: { text: "Have a question or an offer? I'm one e-mail away.", button: 'Contact me', subject: 'Hello Erika' },
  copyright: 'Erika Rostás. All rights reserved.',
}
