import { photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const proHu: Cv = {
  name: 'Rostás Erika',
  title: 'Full-stack fejlesztő',
  summary:
    'Full-stack fejlesztő vagyok, és gyakorlott AI-felhasználó: 2025 óta AI-asszisztenssel dolgozom – előbb a GitHub Copilottal, most Claude-dal –, és velük folyamatosan fedezem fel az új technológiákat, például a Rustot. Front-enden a React és a TypeScript, back-enden a Node.js és az Express a fő eszközeim. Két évig az EPAM Systemsnél dolgoztam nemzetközi ügyfelek nagyvállalati React-alkalmazásain, ahol részt vettem egy építőipari mobilalkalmazás fejlesztésében, és mentoráltam az új kollégákat. 2023 óta hobbiból egy valós idejű online társasjátékot építek: a React front-endet és az Express/WebSocket back-endet is saját kezűleg írtam.',
  photo: { src: photos.pro, alt: 'Rostás Erika portréja: mosolyog, rózsaszín blézert visel' },
  contact: { ...contact, phoneNote: 'Csak engedéllyel látható' },
  expertise: ['AI-asszisztált fejlesztés (Copilot, Claude)', 'FE (HTML, JS/TS, CSS)', 'BE (Node.js, Express)', 'React, Vite, Redux, MobX', 'Tesztírás (Jest, Vitest)', 'Git és Scrum'],
  languages,
  experience: [
    {
      ...jobs.exchange,
      highlights: ['Valutaváltás és készpénzkezelés az ügyfelek számára.'],
    },
    {
      ...jobs.epamProject,
      intro: 'Kihelyezett szoftverfejlesztőként (staff augmentation) egy banki alkalmazás fejlesztésén dolgoztam az ügyfél csapatában.',
      highlights: [
        'Különböző összetettségű React és TypeScript komponenseket fejlesztettem egy 4 front-end és 1 full-stack fejlesztőből álló csapatban.',
        'Modernizáltam a front-end eszközkészletet a jobb felhasználói élményért.',
        'Code review-t, refaktorálást és hibajavítást végeztem.',
        'Scrumban dolgoztam: sprintesemények, pair programming, ügyféltalálkozók.',
        'Technológiák: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence, Visual Studio Code.',
      ],
    },
    {
      ...jobs.epamJunior,
      intro: 'Mobilalkalmazást fejlesztettem egy építőipari termékhez.',
      highlights: [
        'A felhasználói élményt javító UI-komponenseket terveztem és fejlesztettem egy négyfős front-end csapat junior tagjaként (egy vezető és két senior fejlesztő mellett).',
        'Unit teszteket írtam, és javítottam a kódminőséget.',
        'Részt vettem a Scrum-eseményeken, pair programming alkalmakon és ügyféltalálkozókon.',
        'Mentoráltam az új csapattagokat a betanulás során.',
        'Technológiák: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
    {
      ...jobs.bank,
      highlights: ['Felügyeltem az értéktárat és a pénzkészletet.', 'Bonyolítottam a napi készpénzforgalmat.', 'Kezeltem az ATM-eket.'],
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      intro:
        'Egy szociális dedukciós társasjáték valós idejű online változata: lobby, játékszobák, szerepek, angol és magyar nyelvű narrált éjszakai fázis és hangchat a játékosok között.',
      highlights: [
        '2023–2024: a front-endet és a back-endet is kézzel írtam – a kliens React és MobX, a szerver Node.js és Express, WebSocket-kapcsolattal.',
        '2025–2026: AI-asszisztenciával – előbb GitHub Copilottal, majd Claude-dal – bekötöttem a DynamoDB-t, bevezettem a TypeScriptet, Rustban (Axum, Tokio) újraírtam a back-endet, és peer-to-peer hangchatet készítettem (WebRTC).',
        'Minőség: unit tesztek Vitesttel és Testing Libraryvel, többjátékos end-to-end tesztek Playwrighttal, Storybook, CI/CD GitHub Actionsszel.',
        'Több mint 2400 commit három év alatt.',
        'Technológiák: React, TypeScript, MobX, Vite, Tailwind CSS, Node.js, Express, WebSocket, DynamoDB, Rust (Axum, Tokio), WebRTC, Vitest, Playwright, GitHub Actions.',
      ],
    },
  ],
  education: [
    {
      school: 'Bethlen Gábor Református Gimnázium',
      field: 'Matematika, fizika és informatika',
      period: '1996-2000',
    },
  ],
  skills: [
    { label: 'AI (Copilot, Claude)', value: 90 },
    { label: 'FE (HTML, JS / TS, CSS)', value: 90 },
    { label: 'BE (Node.js, Express)', value: 70 },
    { label: 'React (Redux, MobX)', value: 80 },
    { label: 'Tesztírás (Jest, Vitest)', value: 60 },
  ],
  contactCta: { text: 'Kérdésed vagy ajánlatod van? Csak egy e-mailnyire vagyok.', button: 'Írj nekem', subject: 'Üdv, Erika!' },
  copyright: 'Rostás Erika. Minden jog fenntartva.',
}
