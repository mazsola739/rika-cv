import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funEn: Cv = {
  name: 'Erika “Rika” Rostás',
  title: 'Full-stack unicorn',
  tagline: 'Team player / Perpetual beta / Humble-Hungry-Smart / ENTP',
  summary:
    'I started on the front end in 2021, then got curious about what happens behind the button – now I build that too. I became a programmer because I like to eat, and I’m job hunting because that hasn’t changed. Claude and I pair-program: we share the keyboard, the responsibility is mine.',
  photo: {
    src: photos.fun,
    alt: 'Erika lying on her back, hiding her face behind her hands, bright red hair fanned out, with a pixel speech bubble saying “I’m a unicorn”',
  },
  // playful contact details: a made-up, movie-style 555 number instead of the masked real one, and playful labels
  // for the real e-mail, LinkedIn and GitHub links (the links themselves go to the real places)
  contact: {
    ...contact,
    phone: '+36 555 CALL-ME-NOW',
    emailLabel: 'Send me a message',
    location: 'Wherever the Wi-Fi is good',
    linkedinLabel: 'My professional alter ego',
  },
  expertise: [
    'Reading in bed (night mode)',
    'Board games, online and off (conflict resolution)',
    'Shower singing (closed beta)',
    'Coffee → code (experimental technology)',
    'Claude-ing: human + AI, not AI instead of human',
    'DIY, recycling and refactoring',
    'Unicorn (native support)',
  ],
  languages,
  // no company names in the fun version – playful ones instead; same sections, order and points as the pro version
  experience: [
    {
      ...jobs.epamProject,
      company: 'Some Programming Company™',
      location: 'Sunny Szeged',
      period: 'One year that felt like three',
      role: 'Coffee-to-Code Converter',
      intro: "I worked on a bank's internal app, in a foreign client's team. I used to handle a bank's cash; this time I was handling its state.",
      highlights: [
        "In a team of four front-end and one full-stack developer I wrote React and TypeScript components, from simple to 'who wrote this?' (git blame: me).",
        'I helped dust off the front-end tooling – the old build had been configured by dinosaurs.',
        "Code reviews, refactoring, bug fixing – where I learned that the two most optimistic words in a sprint are 'tiny change'.",
        "Scrum, pair programming and client meetings: I learned to say 'almost done' in English too.",
        'Props: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence.',
      ],
    },
    {
      ...jobs.epamJunior,
      company: 'Same place, still in beta',
      location: 'Still sunny Szeged',
      period: 'Junior era',
      role: 'Junior Bug Hunter',
      intro:
        "I worked on a construction company's customer-facing mobile app: other people built houses, I built components – in headphones instead of a hard hat.",
      highlights: [
        'As the junior of a four-person front-end team I designed and built UI components, under the eyes of a lead and two seniors.',
        "I wrote unit tests, because 'works on my machine' doesn't count as a handover.",
        'I showed new teammates where the front door was, where the coffee was and where the docs were – in that order.',
        'Scrum, pair programming and client meetings.',
        'Toolbox: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
  ],
  otherExperience: [
    {
      ...jobs.exchange,
      company: 'The Currency Empire Ltd.',
      period: 'Still counting',
      role: 'Money Dealer',
      intro:
        'Turns out money can be refactored too: one big note goes in, a handful of small ones come out, zero bugs. By day I exchange currencies; by night I switch modes.',
      highlights: ['I exchange currency and handle cash for customers – the rates update live, just like a WebSocket.'],
    },
    {
      ...jobs.bank,
      company: 'Fort Knox',
      period: 'Five golden years',
      role: 'Chief Treasurer',
      intro: 'The vault key was my first access token: physical, non-expiring, and definitely not something I wanted to lose.',
      highlights: [
        'I guarded the vault and the cash reserves – with me, closing time meant all tests green.',
        'I ran the daily cash flow: production environment, no rollback.',
        'I fed the ATMs the way other people feed their cats: on time, every single day – and not once did they say thank you.',
      ],
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'Rika & Rika & Rika Ltd.',
      location: 'Night shift, unpaid',
      period: 'To be continued',
      role: 'CEO, intern and cleaner in one',
      intro:
        "Since 2023 I've been building an online social deduction board game on my own. The players have to work out whom they can trust; I have to work out which WebSocket message to trust.",
      highlights: [
        'Features: a real-time lobby and game rooms, an English and Hungarian narrator for the night phase, voice chat and saved game data – suspicion is now peer-to-peer.',
        '2023–2024, by hand: React and MobX up front, Node.js and Express in the back, WebSocket in between.',
        'Since 2025 with Copilot, then Claude: TypeScript, DynamoDB, a back end rewritten in Rust and WebRTC voice chat. It types faster; I make the calls.',
        'Quality: Vitest, Testing Library, multiplayer Playwright tests, Storybook and GitHub Actions, over 2,400 commits. On weekends my friends test the game; on weekdays the bugs test me.',
      ],
    },
  ],
  education: [
    {
      story:
        'I spent my high school years with mathematics, physics and computer science – the full nerd starter pack. Back then, an eraser was my Ctrl+Z.',
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
      'Natasa, Luna, Kira and Sura (top to bottom), my code review board: they usually sleep on pull requests. To merge, all tests must be green and no cat may be sitting on Enter.',
  },
  contactCta: {
    text: 'Drop me a line – I reply faster than the build finishes.',
    button: 'Slide into my inbox',
    subject: 'Hello Rika! 🦄',
  },
  copyright: 'Rika – works on my machine.',
}
