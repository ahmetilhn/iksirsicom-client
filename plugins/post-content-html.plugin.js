export const createHtmlElements = (elems) => {
  if (process.client) {
    const inclusiveElem = document.getElementById('post_detail_content')
    elems.forEach((elem) => {
      const tagName = elem.type
      let htmlElem = document.createElement(tagName)
      // For code
      const preElem = document.createElement('pre')
      switch (tagName) {
        case 'p':
          htmlElem.innerHTML = elem.text
          break
        case 'span':
          htmlElem.innerHTML = elem.text
          htmlElem.classList.add('no-code')
          break
        case 'a':
          htmlElem.innerHTML = elem.text
          htmlElem.href = elem.href
          break
        case 'img':
          htmlElem.src = elem.img_source
          break
        case 'code':
          htmlElem.innerText = elem.text.replace(/<br\/>/g, '\n')
          preElem.appendChild(htmlElem)
          htmlElem = preElem
          htmlElem.classList.add(`language-${elem.lang}`)
          break
        default:
          htmlElem.innerHTML = elem.text
          break
      }
      inclusiveElem.appendChild(htmlElem)
    })
  }
}
