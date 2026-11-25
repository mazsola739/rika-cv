import { catsPhoto, photos } from '../shared'
import { contact, jobs, languages, projects } from './common'
import type { Cv } from '../types'

export const funHu: Cv = {
  name: 'Rostás „Rika” Erika',
  title: 'Full-stack unikornis',
  tagline: 'Csapatjátékos / Örök tanuló / Internet-(l)user / Szerény-Elszánt-Okos / ENTP',
  summary:
    '2021-ben front-endesként indultam, 2023 óta a teljes stacken dolgozom. A mindennapi kenyerem: elöl React TypeScripttel, hátul Node.js Expresszel – mostanában pedig a Rusttal is flörtölök. Claude a páros programozó társam, a négy cicám – Natasa, Luna, Kira és Sura – pedig a legszigorúbb közönségem.',
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
      company: 'Forint–Euró Randiiroda',
      period: '2024 – még mindig számolok',
      role: 'Pénzdíler',
      intro:
        'Kiderült, hogy a pénzt is lehet refaktorálni: egy ötezresből két kétezres és egy ezres lesz, bug nélkül. A forint és az euró nálam ismerkedik egymással, én csak az árfolyamot súgom. Esténként visszaváltom magam fejlesztőre – nyugtát még senki nem kért róla.',
    },
    {
      ...jobs.epamProject,
      company: 'Valami Programozós Cég Kft.',
      location: 'Napfényes Szeged',
      period: '2023 – egy pörgős év',
      role: 'Kávé-kód átalakító',
      intro:
        'Egy évre beköltöztem egy bank kódjába. Itt nem a pénzt számoltam, hanem a pixeleket tologattam, amíg minden gomb pont oda nem került, ahová a designer megálmodta. A bugokat kávéval csalogattam elő, a code review-kon pedig megtanultam, hogy a „csak egy apró változtatás” sosem apró.',
    },
    {
      ...jobs.epamJunior,
      company: 'Ugyanott, csak zöldfülűként',
      location: 'Még mindig Szeged',
      period: '2022 – 2023, a juniorévek',
      role: 'Hivatásos „ez miért piros?”-kérdező',
      intro:
        'Építőipari mobilappot fejlesztettem, vagyis technikailag építkezésen dolgoztam – csak sisak helyett fejhallgatóban. Minden nap megkérdeztem a seniorokat, hogy ez miért piros, és ők minden nap türelmesen elmagyarázták. Mire elfogytak a kérdéseim, már én magyaráztam az újoncoknak, hogy ez miért piros.',
    },
    {
      ...jobs.bank,
      company: 'Fort Knox – magyar fiók',
      period: '2016 – 2021, öt aranyév',
      role: 'Főkincstáros',
      intro:
        'Öt évig a széf kulcsa volt a legjobb barátom. Annyi bankjegy ment át a kezemen, hogy ma már csukott szemmel is megmondom, melyik gyűrött. Az ATM-eket úgy etettem, ahogy más a cicáit: pontosan, minden nap – és egyszer sem köszönték meg.',
    },
  ],
  projects: [
    {
      ...projects.boardGame,
      company: 'Hálószoba Stúdió Bt.',
      location: 'Éjszakai műszak, ingyen',
      period: '2023 – folyt. köv.',
      role: 'Főnök, gyakornok és takarító egy személyben',
      intro:
        'Egy társasjáték, amit éjjel írok, és amit éjjel játszanak: a falu lakói az éjszakát próbálják túlélni, én pedig egy határidőt, amit senki nem szabott ki. Hétvégén a barátaim tesztelik a játékot, hétköznap a bugok tesztelnek engem. Kész lesz valaha? Egyszer. Talán. Addig is: még egy commit.',
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
    text: 'Írj bátran – gyorsabban válaszolok, mint ahogy lefut a build.',
    button: 'Írj, ha mersz!',
    subject: 'Szia Rika! 🦄',
  },
  copyright: 'Rika – nálam működik.',
}
