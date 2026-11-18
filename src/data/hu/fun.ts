import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funHu: Cv = {
  name: 'Rostás „Rika” Erika',
  title: 'Full-stack unikornis',
  tagline: 'Csapatjátékos / Örök tanuló / Internet-(l)user / Szerény-Elszánt-Okos / ENTP',
  summary:
    '2021-ben front-end unikornisként indultam, 2023 óta full-stack unikornis vagyok. A mindennapi kenyerem: elöl React TypeScripttel, hátul Node.js Expresszel – mostanában pedig a Rusttal is flörtölök. Minden sort a négy macskából – Natasa, Luna, Kira és Sura – álló szigorú code review bizottságom hagy jóvá (jóváhagyás = ráülnek a billentyűzetre). Ha bonyolódik a helyzet, AI-erősítést hívok – előbb a Copilotot, most Claude-ot. Ezt hívom Claude-olásnak.',
  photo: {
    src: photos.fun,
    alt: 'Erika a hátán fekszik, az arcát a kezei mögé rejti, élénkpiros haja szétterül, mellette pixeles szövegbuborék: „I’m a unicorn”',
  },
  // playful contact details: a made-up, movie-style 555 number instead of the masked real one, and labels for the
  // real e-mail and LinkedIn links (the e-mail label ends in a made-up domain, so a copied address reaches nobody)
  contact: {
    ...contact,
    phone: '+36 555 HÍVJ-FEL-MOST',
    emailLabel: 'mazsola39@valassz.engem',
    location: 'Bárhonnan, ahol szükség van rám',
    linkedinLabel: 'Vegyél fel, légyszi',
  },
  expertise: [
    'Olvasás az ágyban',
    'Társasozás on és off(line)',
    'Éneklés a zuhany alatt',
    'Kávé átalakítása kóddá és/vagy varázslattá',
    'Claude-olás (páros programozás az AI-haverommal)',
    'Barkácsolás és újrahasznosítás',
    'Unikornis',
  ],
  languages,
  // no company names in the fun version – playful ones instead
  experience: [
    {
      ...jobs.exchange,
      company: 'Legális pénzdíler',
      period: '2023 – még mindig számolok',
      role: 'Pénzzsonglőr',
      intro:
        'Csavar a történetben: mostanában kávé helyett valutát váltok. Az euró, a dollár és a forint sorban áll a pultomnál, a kassza mindig egyezik – munka után pedig megy tovább a társasjáték-projekt.',
    },
    {
      ...jobs.epamProject,
      company: 'Valami Programozós Cég Kft.',
      location: 'Napfényes Szeged',
      period: '2023 – egy pörgős év',
      role: 'Kávé-kód átalakító',
      intro: 'Kölcsönfejlesztő (staff augmentation): több nagyvállalati csapatba is beálltam cserejátékosként – beálltam, és ment tovább a meccs.',
      highlights: [
        'Aprótól a gigantikusig mindenféle komponenst gyártottam egy 4 front-endesből és 1 full-stack mindenesből álló csapatban.',
        'Ráncfelvarrást kapott tőlem a front-end eszköztár – jól is állt neki.',
        'Bugvadászat és refaktorálás, mintha senki se figyelne (a code reviewerek azért figyeltek).',
        'Olyan szoros határidőket is tartottam, hogy szinte nyikorogtak – és egyetlen kávészünetet sem hagytam ki.',
        'Stand-upok, sprinttervezések, pair programming duettek és ügyféltalálkozók – mindet túléltem mosollyal és egy bögre kávéval.',
      ],
    },
    {
      ...jobs.epamJunior,
      company: 'Ugyanaz, mint fent',
      location: 'Még mindig Szeged',
      period: '2022 – 2023, a juniorévek',
      role: 'Főkérdező',
      intro: 'Zsebre tettük az építkezést: mobilapp az építőiparnak – daru, por és védősisak nélkül.',
      highlights: [
        'Egy négytagú front-end banda juniorja voltam: egy vezető fejlesztő, két senior és én – a legtöbb kérdéssel (és a legtöbb cetlivel).',
        'Unit tesztekkel tartottam rendet a kódban – a kicsit OCD-s énem minden zárójelet kétszer is megszámolt.',
        'A kávészünet volt a nap legproduktívabb meetingje: ott születtek a legjobb ötletek.',
        'A határidőket akkor is hoztam, amikor a határidő tegnap volt.',
        'Később én kalauzoltam az újoncokat – a kérdezőből válaszoló lett.',
      ],
    },
    {
      ...jobs.bank,
      company: 'Fort Knox – magyar fiók',
      period: '2016 – 2021, öt aranyév',
      role: 'Főkincsőr',
      intro:
        'A kód előtt jött a kp: főpénztárosként vigyáztam az értéktárra, mozgásban tartottam a napi készpénzforgalmat, és gondoskodtam róla, hogy az ATM-ek soha ne éhezzenek.',
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'A társasjáték-bébim',
      location: 'Éjszakai műszak, ingyen',
      period: '2023 – folyt. köv.',
      role: 'Egyunikornisos hadsereg',
      intro:
        'Esti hobbiprojektem: egy szociális dedukciós társasjáték a böngészőben, ahol a barátok éjszaka egy virtuális asztal köré gyűlnek. 2023 és 2024 között minden sort kézzel írtam – elöl React és MobX, hátul Node.js és Express WebSocketekkel. Aztán jöttek az AI-segítők: 2025-ben a Copilot, 2026-ban Claude – velük a kód megtanult TypeScriptül, a szerver Rustban született újra, a játékosok WebRTC-n hangot kaptak, és egy egész halomnyi Vitest- és Playwright-teszt is született. Több mint 2400 commit után a falu még mindig túléli az éjszakát.',
    },
  ],
  education: [
    {
      story:
        'A gimiben a matek, a fizika és az informatika volt a kedvenc trióm – a teljes kocka kezdőcsomag. Akkor még azt próbáltam kitalálni, hogyan működik az internet; ma már én építek belőle darabokat.',
    },
  ],
  skills: [
    { label: 'Olvasás', value: 42 },
    { label: 'Társasjáték', value: 82 },
    { label: 'Éneklés', value: 39 },
    { label: 'Kávé', value: 7 },
    { label: 'Unikornis', value: 100 },
  ],
  helpers: {
    title: 'Minionjaim',
    photo: catsPhoto,
    alt: 'Négy macska összegömbölyödve egy türkiz takarón: egy szürke, két fehér és egy fekete',
    caption:
      'Natasa, Luna, Kira és Sura (fentről lefelé), a code review bizottságom: minden pull requestet alaposan átnéznek – úgy, hogy ráalszanak.',
  },
  contactCta: {
    text: 'A négy macskám átnézi a postát, de a kedves leveleket továbbengedik.',
    button: 'Írj, ha mersz!',
    subject: 'Szia Rika! 🦄',
  },
  copyright: 'Rika – két kávé között készült, négy macska hagyta jóvá.',
}
