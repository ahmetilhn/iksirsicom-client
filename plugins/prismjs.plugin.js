import Prism from "prismjs"
export const applyHighlight = () => {
  if (process.client) {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll() // highlight your code on mount
  }
}
