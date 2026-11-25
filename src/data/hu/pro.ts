import { photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const proHu: Cv = {
  name: 'Rostás Erika',
  title: 'Full-stack fejlesztő | AI-asszisztált szoftverfejlesztés',
  summary:
    'Full-stack fejlesztő vagyok, nagyvállalati tapasztalattal és AI-asszisztált fejlesztési szemlélettel. Fő technológiáim a React, a TypeScript, a Node.js és az Express. Az EPAM Systemsnél két évig nemzetközi ügyfelek alkalmazásain dolgoztam: UI-komponenseket fejlesztettem, teszteket írtam, refaktoráltam, és új kollégákat mentoráltam. 2023 óta önállóan fejlesztek egy valós idejű, többjátékos online társasjátékot, a saját kezűleg épített alapokra, AI-asszisztenciával.',
  photo: { src: photos.pro, alt: 'Rostás Erika portréja: mosolyog, rózsaszín blézert visel' },
  contact: { ...contact, phoneNote: 'Csak engedéllyel látható' },
  expertise: [
    'AI-asszisztált fejlesztés (GitHub Copilot, Claude, ChatGPT)',
    'Frontend: React, TypeScript, JavaScript, MobX, Redux, HTML, CSS, Tailwind CSS, Vite',
    'Backend: Node.js, Express, REST API, WebSocket, DynamoDB, Rust (Axum)',
    'Tesztelés és kódminőség: Jest, Vitest, Testing Library, Playwright, GitHub Actions',
    'Egyéb: Git, Scrum, code review, pair programming, mentorálás, Azure DevOps, Jira',
  ],
  languages,
  experience: [
    {
      ...jobs.epamProject,
      intro: 'Egy bank belső, a banki dolgozók által használt alkalmazásának fejlesztésén dolgoztam, egy külföldi ügyfél csapatában.',
      highlights: [
        'Különböző összetettségű React és TypeScript komponenseket fejlesztettem egy négy front-end és egy full-stack fejlesztőből álló csapatban.',
        'Részt vettem a front-end eszközkészlet modernizálásában.',
        'Code review-t, refaktorálást és hibajavítást végeztem.',
        'Scrumban dolgoztam, pair programminggal és rendszeres ügyféltalálkozókkal.',
        'Technológiák: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence.',
      ],
    },
    {
      ...jobs.epamJunior,
      intro: 'Egy külföldi építőipari cég mobilalkalmazása, amelyet az ügyfelei használnak.',
      highlights: [
        'UI-komponenseket terveztem és fejlesztettem egy négyfős front-end csapat junior tagjaként (egy vezető és két senior fejlesztő mellett).',
        'Unit teszteket írtam, és javítottam a kódminőséget.',
        'Mentoráltam az új csapattagokat a betanulásuk alatt.',
        'Scrumban dolgoztam, pair programminggal és ügyféltalálkozókkal.',
        'Eszközök: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
  ],
  otherExperience: [
    {
      ...jobs.exchange,
      highlights: ['Valutaváltás és készpénzkezelés az ügyfelek számára.'],
    },
    {
      ...jobs.bank,
      highlights: ['Felügyeltem az értéktárat és a pénzkészletet.', 'Bonyolítottam a napi készpénzforgalmat.', 'Kezeltem az ATM-eket.'],
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      intro: 'Egy szociális dedukciós társasjáték valós idejű webes változata, amelyet egyedül tervezek és fejlesztek.',
      highlights: [
        'Funkciók: valós idejű lobby és játékszobák WebSocketen, angol és magyar nyelvű narrált éjszakai fázis, peer-to-peer hangchat és tárolt játékadatok.',
        '2023–2024, saját kezűleg: React és MobX a kliensen, Node.js és Express WebSocket-kapcsolattal a szerveren.',
        '2025 óta AI-asszisztenciával (előbb GitHub Copilottal, majd Claude-dal): TypeScriptre állítottam a kódot, bekötöttem a DynamoDB-t, Rustban (Axum, Tokio) újraírtam a backendet, és WebRTC hangchatet készítettem.',
        'Minőség: unit tesztek Vitesttel és Testing Libraryvel, többjátékos end-to-end tesztek Playwrighttal, Storybook, CI/CD GitHub Actionsszel; több mint 2400 commit.',
        'Technológiák: React, TypeScript, MobX, Tailwind CSS, Node.js, Express, WebSocket, Rust, DynamoDB, WebRTC.',
      ],
    },
  ],
  education: [
    {
      school: 'Bethlen Gábor Református Gimnázium',
      field: 'Matematika, fizika és informatika',
      period: '1996 – 2000',
    },
  ],
  skills: [
    { label: 'AI (Copilot, Claude, ChatGPT)', value: 75 },
    { label: 'FE (HTML, JS / TS, CSS)', value: 90 },
    { label: 'BE (Node.js, Express)', value: 50 },
    { label: 'React (Redux, MobX)', value: 65 },
    { label: 'Tesztírás (Jest, Vitest)', value: 40 },
  ],
  skillGroups: [
    { label: 'AI-asszisztált fejlesztés', items: ['GitHub Copilot', 'Claude', 'ChatGPT'] },
    { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'MobX', 'Redux', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'REST API', 'WebSocket', 'DynamoDB', 'Rust (Axum)'] },
    { label: 'Tesztelés és kódminőség', items: ['Jest', 'Vitest', 'Testing Library', 'Playwright', 'GitHub Actions'] },
    { label: 'Egyéb', items: ['Git', 'Scrum', 'Code review', 'Pair programming', 'Mentorálás', 'Azure DevOps', 'Jira'] },
  ],
  contactCta: { text: 'Nyitott vagyok új lehetőségekre – írj bátran, csak egy e-mailnyire vagyok!', button: 'Írj nekem', subject: 'Üdv, Erika!' },
  copyright: 'Rostás Erika. Minden jog fenntartva.',
}
