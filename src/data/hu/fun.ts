import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funHu: Cv = {
  name: 'Rostás „Rika” Erika',
  title: 'Full-stack unikornis',
  tagline: 'Csapatjátékos / Örök béta / Szerény-Elszánt-Okos / ENTP',
  summary:
    '2021-ben front-endesként kezdtem, aztán kíváncsi lettem, mi van a gomb mögött – ma már azt is én építem. Azért lettem programozó, mert szeretek enni, és azért keresek munkát, mert ez azóta sem változott. Claude-dal páros programozunk: a billentyűzet közös, a felelősség az enyém.',
  photo: {
    src: photos.fun,
    alt: 'Erika a hátán fekszik, az arcát a kezei mögé rejti, élénkpiros haja szétterül, mellette pixeles szövegbuborék: „I’m a unicorn”',
  },
  // playful contact details: a made-up, movie-style 555 number instead of the masked real one, and playful labels
  // for the real e-mail, LinkedIn and GitHub links (the links themselves go to the real places)
  contact: {
    ...contact,
    phone: '+36 555 HÍVJ-FEL-MOST',
    emailLabel: 'Kattints, és írj!',
    location: 'Ahol jó a Wi-Fi',
    linkedinLabel: 'Szakmai alteregóm',
  },
  expertise: [
    'Olvasás ágyban (éjszakai mód)',
    'Társasozás on- és offline (konfliktuskezelés)',
    'Éneklés a zuhany alatt (zárt béta)',
    'Kávé → kód (kísérleti technológia)',
    'Claude-olás: ember + AI, nem ember helyett AI',
    'Barkácsolás, újrahasznosítás, refaktorálás',
    'Unikornis (natív támogatás)',
  ],
  languages,
  // no company names in the fun version – playful ones instead; the development work first, then the money
  experience: [
    {
      ...jobs.epamProject,
      company: 'Valami Programozós Cég Kft.',
      location: 'Napfényes Szeged',
      period: 'Egy év, ami háromnak tűnt',
      role: 'Kávé-kód átalakító',
      intro:
        'Banki dolgozóknak fejlesztettem React-komponenseket. Korábban egy bank készpénzét kezeltem, itt már a state-jét. A code review-kon megtanultam, hogy a sprint két legoptimistább szava: „kis módosítás”.',
    },
    {
      ...jobs.epamJunior,
      company: 'Ugyanott, csak zöldfülűként',
      location: 'Még mindig Szeged',
      period: 'A juniorévek',
      role: 'Junior bugvadász',
      intro:
        'Egy építőipari cég mobilappján dolgoztam: mások házakat, én komponenseket építettem – sisak helyett fejhallgatóban. Az alapokat unit tesztekkel ellenőriztem, később az új kollégáknak is megmutattam, hol a bejárat.',
    },
    {
      ...jobs.exchange,
      company: 'Valutabirodalom Kft.',
      period: 'Még mindig számolok',
      role: 'Pénzdíler',
      intro:
        'Kiderült, hogy a pénzt is lehet refaktorálni: egy ötezresből két kétezres és egy ezres lesz, bug nélkül. Nappal valutát váltok, este üzemmódot.',
    },
    {
      ...jobs.bank,
      company: 'Fort Knox',
      period: 'Öt aranyév',
      role: 'Főkincstárnok',
      intro:
        'A széf kulcsa volt az első access tokenem: kézzelfogható, nem jár le, és nagyon nem akartam elveszíteni. Az ATM-eket úgy etettem, ahogy más a cicáit: pontosan, minden nap – és egyszer sem köszönték meg.',
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'Rika & Rika & Rika Bt.',
      location: 'Éjszakai műszak, ingyen',
      period: 'Folyt. köv.',
      role: 'Főnök, gyakornok és takarító egy személyben',
      intro:
        '2023 óta egy szociális dedukciós társasjáték online változatát építem. A játékosoknak azt kell kitalálniuk, kiben bízhatnak – nekem azt, melyik WebSocket-üzenetben. 2023–2024-ben kézzel raktam le a React és Node.js alapokat, 2025 óta Copilottal, majd Claude-dal bővítem: TypeScript, DynamoDB, Rust backend és WebRTC hangchat, vagyis a gyanakvás immár peer-to-peer. Hétvégén a barátaim tesztelik a játékot, hétköznap a bugok tesztelnek engem.',
    },
  ],
  education: [
    {
      story:
        'A gimiben a matek, a fizika és az informatika volt a kedvenc trióm – a teljes kocka kezdőcsomag. Akkor még a radír volt a Ctrl+Z.',
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
      'Natasa, Luna, Kira és Sura (fentről lefelé), a code review bizottságom: a pull requestekre általában ráalszanak. A merge feltétele: minden teszt zöld, és egyikük sem ül az Enteren.',
  },
  contactCta: {
    text: 'Írj bátran – gyorsabban válaszolok, mint ahogy lefut a build.',
    button: 'Írj, ha mersz!',
    subject: 'Szia Rika! 🦄',
  },
  copyright: 'Rika – nálam működik.',
}
