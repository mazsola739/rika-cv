import { catsPhoto, photos } from '../shared'
import { contact, jobs, projects } from './common'
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
    'Claude-ing',
    'DIY, recycling and refactoring',
    'Bug hunting (mostly in my own code)',
  ],
  languages: ['English (B2)', 'Hungarian (native)', 'Dothraki (basic)', 'Gibberish (fluent)', 'Lorem ipsum (native speaker)'],
  // no company names in the fun version – playful ones instead; same sections and order as the pro version, but no tech details
  experience: [
    {
      ...jobs.epamProject,
      company: 'Some Programming Company™',
      location: 'Sunny Szeged',
      period: 'One year that felt like three',
      role: 'Coffee-to-Code Converter',
      intro: "I worked on a bank's internal app, in a foreign client's team. I used to handle a bank's cash; this time I was handling its state.",
      highlights: [
        "I wrote components, from simple to 'who wrote this?' (git blame: me).",
        'I helped dust off the old tooling – the build had been configured by dinosaurs.',
        "I learned that the two most optimistic words in a sprint are 'tiny change'.",
        "And how to say 'almost done' with a straight face.",
      ],
    },
    {
      ...jobs.epamJunior,
      company: 'Same place, still in beta',
      location: 'Still sunny Szeged',
      period: 'Junior era',
      role: 'Junior Lumberjack',
      intro: "I worked on a construction company's mobile app: other people built houses, I built components – in headphones instead of a hard hat.",
      highlights: [
        'They brought the logs, I chopped them: component after component, while the seniors made the big calls.',
        "I wrote unit tests, because 'works on my machine' doesn't count as a handover.",
        'I showed new teammates where the front door was, where the coffee was and where the docs were – in that order.',
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
      highlights: [
        "I'm the merchant NPC at the city gate: bring your euros, leave with forints – no haggling.",
        'Adventurers arrive from every corner of the map, but the resource trade at my counter is always balanced.',
      ],
    },
    {
      ...jobs.bank,
      company: 'Fort Knox',
      period: 'Five golden years',
      role: 'Chief Treasurer',
      intro: 'The vault key was my first access token: physical, non-expiring, and definitely not something I wanted to lose.',
      highlights: [
        "As the guild's treasurer I took in all the loot, counted it and locked it away – by evening the inventory always added up.",
        'Daily quest: gold in, gold out, and not a single coin may vanish from the chest.',
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
        "Since 2023 I've been building an online social deduction board game. The players have to work out whom they can trust; I have to work out which WebSocket message to trust.",
      highlights: [
        'I laid the foundations by hand; these days Claude helps out: it types faster, I make the calls.',
        "There's voice chat too, so suspicion is now peer-to-peer.",
        "Over 2,400 commits – and every one of them was 'the final touch'.",
        'On weekends my friends test the game; on weekdays the bugs test me.',
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
