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
  // no company names in the fun version – playful ones instead; same sections, order and points as the pro version
  experience: [
    {
      ...jobs.epamProject,
      company: 'Valami Programozós Cég Kft.',
      location: 'Napfényes Szeged',
      period: 'Egy év, ami háromnak tűnt',
      role: 'Kávé-kód átalakító',
      intro: 'Egy bank belső alkalmazásán dolgoztam, egy külföldi ügyfél csapatában. Korábban egy bank készpénzét kezeltem, itt már a state-jét.',
      highlights: [
        'Négy front-endes és egy full-stackes csapatban írtam React- és TypeScript-komponenseket, az egyszerűtől a „ki írta ezt?”-ig (git blame: én).',
        'Segítettem leporolni a front-end eszközkészletet – a régi buildet még a dinoszauruszok konfigurálták.',
        'Code review, refaktorálás, hibajavítás – itt tanultam meg, hogy a sprint két legoptimistább szava: „kis módosítás”.',
        'Scrum, pair programming és ügyféltalálkozók: megtanultam angolul is azt mondani, hogy „majdnem kész”.',
        'Kellékek: React, TypeScript, SQL Server, Azure DevOps, Jira, Confluence.',
      ],
    },
    {
      ...jobs.epamJunior,
      company: 'Ugyanott, csak zöldfülűként',
      location: 'Még mindig Szeged',
      period: 'A juniorévek',
      role: 'Junior bugvadász',
      intro: 'Egy építőipari cég ügyfeleinek szóló mobilappon dolgoztam: mások házakat, én komponenseket építettem – sisak helyett fejhallgatóban.',
      highlights: [
        'Egy négyfős front-end csapat juniorjaként terveztem és építettem UI-komponenseket, egy vezető és két senior szeme előtt.',
        'Unit teszteket írtam, mert a „nálam működik” nem számít műszaki átadásnak.',
        'Az új csapattagoknak megmutattam, hol a bejárat, hol a kávé és hol a dokumentáció – ebben a sorrendben.',
        'Scrum, pair programming és ügyféltalálkozók, angolul.',
        'Szerszámosláda: Oracle DB, Azure DevOps, Confluence, BrowserStack.',
      ],
    },
  ],
  otherExperience: [
    {
      ...jobs.exchange,
      company: 'Valutabirodalom Kft.',
      period: 'Még mindig számolok',
      role: 'Pénzdíler',
      intro:
        'Kiderült, hogy a pénzt is lehet refaktorálni: egy ötezresből két kétezres és egy ezres lesz, bug nélkül. Nappal valutát váltok, este üzemmódot.',
      highlights: ['Valutát váltok és készpénzt kezelek az ügyfeleknek – az árfolyam élőben frissül, akár egy WebSocket.'],
    },
    {
      ...jobs.bank,
      company: 'Fort Knox',
      period: 'Öt aranyév',
      role: 'Főkincstárnok',
      intro: 'A széf kulcsa volt az első access tokenem: kézzelfogható, nem jár le, és nagyon nem akartam elveszíteni.',
      highlights: [
        'Én vigyáztam az értéktárra és a pénzkészletre – a zárás nálam zöld tesztet jelentett.',
        'Bonyolítottam a napi készpénzforgalmat: éles környezet, rollback nélkül.',
        'Az ATM-eket úgy etettem, ahogy más a cicáit: pontosan, minden nap – és egyszer sem köszönték meg.',
      ],
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
        '2023 óta egyedül építem egy szociális dedukciós társasjáték online változatát. A játékosoknak azt kell kitalálniuk, kiben bízhatnak – nekem azt, melyik WebSocket-üzenetben.',
      highlights: [
        'Tudja: valós idejű lobby és játékszobák, magyar és angol narrátor az éjszakai fázisban, hangchat és mentett játékadatok – a gyanakvás immár peer-to-peer.',
        '2023–2024, kézzel: React és MobX elöl, Node.js és Express hátul, WebSocket a kettő között.',
        '2025 óta előbb Copilottal, majd Claude-dal: TypeScript, DynamoDB, Rustban újraírt backend és WebRTC hangchat. Ő gépel gyorsabban, én döntök.',
        'Minőség: Vitest, Testing Library, többjátékos Playwright-tesztek, Storybook és GitHub Actions, több mint 2400 commit. Hétvégén a barátaim tesztelik a játékot, hétköznap a bugok tesztelnek engem.',
      ],
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
