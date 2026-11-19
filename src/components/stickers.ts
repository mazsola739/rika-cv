/*
 * The fun version's stickers: clay-look flowers, butterflies and stars, each cut out of one sticker sheet
 * (src/assets/stickers, transparent WebP). `w` × `h` is the cut-out's size in pixels; `stem` marks the flowers on a
 * stem, which are placed by their head (see `Sticker` in Blooms.tsx).
 */
import yellow from '../assets/stickers/yellow.webp'
import red from '../assets/stickers/red.webp'
import blue from '../assets/stickers/blue.webp'
import purple from '../assets/stickers/purple.webp'
import pink from '../assets/stickers/pink.webp'
import daisy from '../assets/stickers/daisy.webp'
import orangeSmall from '../assets/stickers/orange-small.webp'
import greenSmall from '../assets/stickers/green-small.webp'
import tulipLayered from '../assets/stickers/tulip-layered.webp'
import tulip from '../assets/stickers/tulip.webp'
import tulipBud from '../assets/stickers/tulip-bud.webp'
import daisyStem from '../assets/stickers/daisy-stem.webp'
import yellowStem from '../assets/stickers/yellow-stem.webp'
import redStem from '../assets/stickers/red-stem.webp'
import blueStem from '../assets/stickers/blue-stem.webp'
import orangeStem from '../assets/stickers/orange-stem.webp'
import butterflyYellow from '../assets/stickers/butterfly-yellow.webp'
import butterflyPink from '../assets/stickers/butterfly-pink.webp'
import butterflyPurple from '../assets/stickers/butterfly-purple.webp'
import butterflyBlue from '../assets/stickers/butterfly-blue.webp'
import butterflyOrange from '../assets/stickers/butterfly-orange.webp'
import starBig from '../assets/stickers/star-big.webp'
import starPink from '../assets/stickers/star-pink.webp'
import starWhite from '../assets/stickers/star-white.webp'
import sparkle from '../assets/stickers/sparkle.webp'
import sparklePink from '../assets/stickers/sparkle-pink.webp'
import sparkleWhite from '../assets/stickers/sparkle-white.webp'

interface StickerInfo {
  src: string
  w: number
  h: number
  stem?: boolean
}

export const STICKERS = {
  yellow: { src: yellow, w: 160, h: 156 },
  red: { src: red, w: 160, h: 153 },
  blue: { src: blue, w: 160, h: 143 },
  purple: { src: purple, w: 160, h: 160 },
  pink: { src: pink, w: 160, h: 156 },
  daisy: { src: daisy, w: 156, h: 157 },
  orangeSmall: { src: orangeSmall, w: 109, h: 109 },
  greenSmall: { src: greenSmall, w: 112, h: 117 },
  tulipLayered: { src: tulipLayered, w: 84, h: 160, stem: true },
  tulip: { src: tulip, w: 75, h: 160, stem: true },
  tulipBud: { src: tulipBud, w: 74, h: 160, stem: true },
  daisyStem: { src: daisyStem, w: 85, h: 160, stem: true },
  yellowStem: { src: yellowStem, w: 88, h: 160, stem: true },
  redStem: { src: redStem, w: 82, h: 160, stem: true },
  blueStem: { src: blueStem, w: 84, h: 160, stem: true },
  orangeStem: { src: orangeStem, w: 75, h: 160, stem: true },
  butterflyYellow: { src: butterflyYellow, w: 200, h: 157 },
  butterflyPink: { src: butterflyPink, w: 200, h: 135 },
  butterflyPurple: { src: butterflyPurple, w: 200, h: 158 },
  butterflyBlue: { src: butterflyBlue, w: 200, h: 156 },
  butterflyOrange: { src: butterflyOrange, w: 200, h: 161 },
  starBig: { src: starBig, w: 160, h: 152 },
  starPink: { src: starPink, w: 127, h: 123 },
  starWhite: { src: starWhite, w: 124, h: 123 },
  sparkle: { src: sparkle, w: 96, h: 109 },
  sparklePink: { src: sparklePink, w: 90, h: 95 },
  sparkleWhite: { src: sparkleWhite, w: 78, h: 85 },
} satisfies Record<string, StickerInfo>

export type StickerName = keyof typeof STICKERS

export const sticker = (name: StickerName): StickerInfo => STICKERS[name]
