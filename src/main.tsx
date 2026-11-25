import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts: Archivo Black + Montserrat for the pro CV, Short Stack + Kode Mono for the fun one.
import '@fontsource/archivo-black'
import '@fontsource-variable/montserrat'
import '@fontsource/short-stack'
import '@fontsource-variable/kode-mono'
// Short Stack has no ő/ű – Comic Relief (same comic style) fills in just those glyphs.
import '@fontsource/comic-relief/latin-ext-400.css'

import './index.css'
import App from './App.tsx'
import { PlainCv } from './components/PlainCv.tsx'

// ?view=text: the plain, one-column pro CV (for the text PDFs and the static HTML, see scripts/pdf.mjs).
const params = new URLSearchParams(window.location.search)
const plain = params.get('view') === 'text'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{plain ? <PlainCv lang={params.get('lang') === 'hu' ? 'hu' : 'en'} /> : <App />}</StrictMode>,
)
