export const setGA = () => {
  if (process.client) {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RQ8L9194JL'
    scriptTag.async = true
    document.head.appendChild(scriptTag)
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-RQ8L9194JL')
  }
}
