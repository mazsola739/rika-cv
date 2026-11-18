import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funEn: Cv = {
  name: 'Erika “Rika” Rostás',
  title: 'Full-stack unicorn',
  tagline: 'Teamplayer / Continuous learner / Internet (l)user / Humble-Hungry-Smart / ENTP',
  summary:
    'Started as a front-end unicorn in 2021, full-stack unicorn since 2023. My daily bread: React with TypeScript up front, Node.js with Express in the back – and lately I keep flirting with Rust. Every line passes my strict code review board of four cats – Natasa, Luna, Kira and Sura (approval = sitting on the keyboard). When things get tricky, I call in AI backup – first Copilot, now Claude. I call it Claude-ing.',
  photo: {
    src: photos.fun,
    alt: 'Erika lying on her back, hiding her face behind her hands, bright red hair fanned out, with a pixel speech bubble saying “I’m a unicorn”',
  },
  // playful contact details: a made-up, movie-style 555 number instead of the masked real one, and labels for the
  // real e-mail and LinkedIn links (the e-mail label ends in a made-up domain, so a copied address reaches nobody)
  contact: {
    ...contact,
    phone: '+36 555 CALL-ME-NOW',
    emailLabel: 'mazsola39@pickme.please',
    location: 'From anywhere you need me',
    linkedinLabel: 'Hire me, pretty please',
  },
  expertise: [
    'Reading in bed',
    'Boardgames on and off(line)',
    'Singing in the shower',
    'Turning coffee into code and/or magic',
    'Claude-ing (pair programming with my AI buddy)',
    'DIY & Recycling',
    'Unicorn',
  ],
  languages,
  // no company names in the fun version – playful ones instead
  experience: [
    {
      ...jobs.exchange,
      company: 'Legal Money Dealer',
      period: '2023 – still counting',
      role: 'Money Juggler',
      intro:
        'Plot twist: these days I convert currencies instead of coffee. Euros, dollars and forints line up at my counter, the cash drawer always balances – and after hours the board game project goes on.',
    },
    {
      ...jobs.epamProject,
      company: 'Some Programming Company™',
      location: 'Sunny Szeged',
      period: '2023 – one busy year',
      role: 'Coffee-to-Code Converter',
      intro: 'Rent-a-dev (staff augmentation): came off the bench into several enterprise teams – I stepped in, and the game went on.',
      highlights: [
        'Built components from tiny to gigantic with a crew of 4 front-end devs and 1 full-stack all-rounder.',
        'Gave the front-end tooling a well-deserved glow-up.',
        'Hunted bugs and refactored like nobody was watching (the code reviewers were, though).',
        'Met deadlines so tight they squeaked – and still never skipped a coffee break.',
        'Stand-ups, sprint plannings, pair programming duets and customer meetings – survived them all with a smile and a mug of coffee.',
      ],
    },
    {
      ...jobs.epamJunior,
      company: 'Same as previous',
      location: 'Still sunny Szeged',
      period: '2022 – 2023, junior era',
      role: 'Chief Question Asker',
      intro: "We put the construction site in everyone's pocket: a mobile app for the construction industry – no cranes, no dust, no hard hat needed.",
      highlights: [
        'Junior of a four-piece front-end band: a lead developer, two seniors and me – the one with the most questions (and the most sticky notes).',
        'Unit tests kept the code in order – my slightly OCD side counted every bracket twice.',
        'The coffee break was the most productive meeting of the day: that is where the best ideas were born.',
        'Delivered on time, even when the deadline was yesterday.',
        'Later guided the newcomers – from question asker to question answerer.',
      ],
    },
    {
      ...jobs.bank,
      company: 'Fort Knox, Hungarian branch',
      period: '2016 – 2021, golden years',
      role: 'Chief Vault Keeper',
      intro:
        'Before the code came the cash: as head cashier I watched over the vault, kept the daily cash flowing and made sure the ATMs never went hungry.',
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'My board game baby',
      location: 'Night shift, unpaid',
      period: '2023 – to be continued',
      role: 'One-unicorn army',
      intro:
        'My after-hours project: a social deduction board game for the browser, where friends gather around a virtual table at night. From 2023 to 2024 I wrote every line by hand – React and MobX up front, Node.js and Express with WebSockets in the back. Then the AI helpers arrived: Copilot in 2025, Claude in 2026 – with them the code learned TypeScript, the server was reborn in Rust, the players got voice chat over WebRTC, and a whole pile of Vitest and Playwright tests appeared. 2,400+ commits later, the village still survives the night.',
    },
  ],
  education: [
    {
      story:
        'I spent my high school years with mathematics, physics and computer science – the full nerd starter pack. Back then I was still figuring out how the internet works; these days I build bits of it.',
    },
  ],
  skills: [
    { label: 'Reading', value: 42 },
    { label: 'Boardgames', value: 82 },
    { label: 'Singing', value: 39 },
    { label: 'Coffee', value: 7 },
    { label: 'Unicorn', value: 100 },
  ],
  helpers: {
    title: 'My minions',
    photo: catsPhoto,
    alt: 'Four cats curled up together on a turquoise blanket: a grey one, two white ones and a black one',
    caption:
      'Natasa, Luna, Kira and Sura (top to bottom), my code review board: every pull request gets their full attention – they review it by sleeping on it.',
  },
  contactCta: {
    text: 'My four cats screen the inbox, but they let the nice messages through.',
    button: 'Slide into my inbox',
    subject: 'Hello Rika! 🦄',
  },
  copyright: 'Rika – hand-crafted between two coffees, approved by four cats.',
}
