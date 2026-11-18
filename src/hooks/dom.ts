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
