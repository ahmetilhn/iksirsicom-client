import Prism from 'prismjs'
export const applyHighlight = () => {
  window.Prism = window.Prism || {}
  window.Prism.manual = true
  Prism.highlightAll()
}
