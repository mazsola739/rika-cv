import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funEn: Cv = {
  name: 'Erika “Rika” Rostás',
  title: 'Full-stack unicorn',
  tagline: 'Teamplayer / Continuous learner / Internet (l)user / Humble-Hungry-Smart / ENTP',
  summary:
    'Started out on the front end in 2021, working across the full stack since 2023. My daily bread: React with TypeScript up front, Node.js with Express in the back – and lately I keep flirting with Rust. Claude is my pair-programming buddy, and my four cats – Natasa, Luna, Kira and Sura – are my toughest audience.',
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
      company: 'Forint–Euro Dating Agency',
      period: '2024 – still counting',
      role: 'Money Dealer',
      intro:
        'Turns out money can be refactored too: one big note goes in, a handful of small ones come out, zero bugs. Forints and euros meet at my counter, and I just whisper the exchange rate. In the evening I exchange myself back into a developer – nobody has asked for a receipt yet.',
    },
    {
      ...jobs.epamProject,
      company: 'Some Programming Company™',
      location: 'Sunny Szeged',
      period: '2023 – one busy year',
      role: 'Coffee-to-Code Converter',
      intro:
        "I moved into a bank's code for a year. This time I didn't count the money – I pushed pixels around until every button landed exactly where the designer dreamed it would. I lured the bugs out with coffee, and code reviews taught me that 'just a tiny change' is never tiny.",
    },
    {
      ...jobs.epamJunior,
      company: 'Same place, still in beta',
      location: 'Still sunny Szeged',
      period: '2022 – 2023, junior era',
      role: 'Professional “why is this red?” asker',
      intro:
        'I built a mobile app for the construction industry, so technically I worked on a building site – just in headphones instead of a hard hat. Every day I asked the seniors why something was red, and every day they patiently explained. By the time I ran out of questions, I was the one telling the newcomers why it was red.',
    },
    {
      ...jobs.bank,
      company: 'Fort Knox, Hungarian branch',
      period: '2016 – 2021, golden years',
      role: 'Chief Treasurer',
      intro:
        'For five years the vault key was my best friend. So many banknotes passed through my hands that I can spot a crumpled one with my eyes closed. I fed the ATMs the way other people feed their cats: on time, every single day – and not once did they say thank you.',
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'Bedroom Studios Ltd.',
      location: 'Night shift, unpaid',
      period: '2023 – to be continued',
      role: 'CEO, intern and cleaner in one',
      intro:
        'A board game I write at night, played at night: the villagers try to survive the night, and I try to survive a deadline nobody ever set. On weekends my friends test the game; on weekdays the bugs test me. Will it ever be finished? Someday. Maybe. Until then: one more commit.',
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
    text: 'Drop me a line – I reply faster than the build finishes.',
    button: 'Slide into my inbox',
    subject: 'Hello Rika! 🦄',
  },
  copyright: 'Rika – works on my machine.',
}
