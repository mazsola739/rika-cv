import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funEn: Cv = {
  name: 'Erika “Rika” Rostás',
  title: 'Full-stack unicorn',
  tagline: 'Teamplayer / Continuous learner / Internet (l)user / Humble-Hungry-Smart / ENTP',
  summary:
    'I started on the front end in 2021; these days I run the code front to back. I became a programmer because I didn’t want to starve – and I’m job hunting now because I still like to eat. When I get stuck, I do a bit of Claude-ing.',
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
      company: 'The Currency Empire Ltd.',
      period: 'Still counting',
      role: 'Money Dealer',
      intro:
        'Turns out money can be refactored too: one big note goes in, a handful of small ones come out, zero bugs. In the evening I exchange myself back into a developer – nobody has asked for a receipt yet.',
    },
    {
      ...jobs.epamProject,
      company: 'Some Programming Company™',
      location: 'Sunny Szeged',
      period: 'One year that felt like three',
      role: 'Coffee-to-Code Converter',
      intro:
        "I moved into a bank's code for a year. I lured the bugs out with coffee, and code reviews taught me that 'just a tiny change' is never tiny.",
    },
    {
      ...jobs.epamJunior,
      company: 'Same place, still in beta',
      location: 'Still sunny Szeged',
      period: 'Junior era',
      role: 'Bug Hunter in Training',
      intro:
        'I built a mobile app for the construction industry, so technically I worked on a building site – just in headphones instead of a hard hat.',
    },
    {
      ...jobs.bank,
      company: 'Fort Knox',
      period: 'Five golden years',
      role: 'Chief Treasurer',
      intro:
        'For five years the vault key was my best friend. So many banknotes passed through my hands that I can spot a crumpled one with my eyes closed. I fed the ATMs the way other people feed their cats: on time, every single day – and not once did they say thank you.',
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
        'A board game I write at night, played at night: the villagers try to survive the night, and I try to survive a deadline nobody ever set. On weekends my friends test the game; on weekdays the bugs test me.',
    },
  ],
  education: [
    {
      story:
        'I spent my high school years with mathematics, physics and computer science – the full nerd starter pack.',
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
