import { getStorage } from '~/utils/localStorage.util'
export const setSurvey = () => {
  if (process.client) {
    const userSession = getStorage('userSession') || {}
    const s = document.createElement('script')
    s.src =
      'https://survey.survicate.com/workspaces/d18a34a23abdfd45c6e623a6b56ae50b/web_surveys.js'
    s.async = true
    const e = document.getElementsByTagName('script')[0]
    e.parentNode.insertBefore(s, e)
    setTraits({
      email: userSession?.email,
    })
  }
}

const setTraits = (payload) => {
  if (process.client) {
    const isSurvicateInitialized = window?._sva && window?._sva.setVisitorTraits
    if (isSurvicateInitialized && payload) {
      window._sva.setVisitorTraits(payload)
    } else if (payload) {
      ;(function (opts) {
        opts.traits = payload
      })((window._sva = window._sva || {}))
    }
  }
}
