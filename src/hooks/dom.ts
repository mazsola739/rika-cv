/** Remove a query parameter from the address bar (without reloading or adding a history entry). */
export function dropUrlParam(name: string) {
  const url = new URL(window.location.href)
  if (!url.searchParams.has(name)) return
  url.searchParams.delete(name)
  window.history.replaceState(null, '', url)
}

/** View transitions are used only where supported and when the user does not ask for less motion. */
export function canAnimateTransition() {
  return typeof document.startViewTransition === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** sessionStorage key of the remembered settings – also read by the inline script in index.html. */
const SETTINGS_KEY = 'rika-cv'

/**
 * Remembers the version or language for this browser tab: a reload keeps it, a new visit (or a shared link) starts
 * in the default pro / English again. The inline script in index.html reads it back before the first paint.
 */
export function rememberSetting(key: 'mode' | 'lang', value: string) {
  try {
    const saved = JSON.parse(sessionStorage.getItem(SETTINGS_KEY) ?? '{}')
    sessionStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...saved, [key]: value }))
  } catch {
    // storage blocked (private mode, settings): simply not remembered
  }
}
