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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
