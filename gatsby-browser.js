/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const VIEW_TRANSITION_TIMEOUT = 450

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

exports.onInitialClientRender = () => {
  if (
    typeof document === 'undefined' ||
    typeof document.startViewTransition !== 'function' ||
    prefersReducedMotion() ||
    typeof window.___navigateTo !== 'function'
  ) {
    return
  }

  const navigateTo = window.___navigateTo

  window.___navigateTo = pathname => {
    if (!pathname || pathname === window.location.pathname) {
      navigateTo(pathname)
      return
    }

    document.startViewTransition(
      () =>
        new Promise(resolve => {
          navigateTo(pathname)
          window.setTimeout(resolve, VIEW_TRANSITION_TIMEOUT)
        })
    )
  }
}
