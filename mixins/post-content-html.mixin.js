export default {
  methods: {
    createHtmlElements(elems) {
      const inclusiveElem = document.getElementById('post_detail_content')
      if (process.client) {
        elems.forEach((elem) => {
          const tagName = elem.type
          let htmlElem = document.createElement(tagName)
          // For code
          const preElem = document.createElement('pre')
          switch (tagName) {
            case 'p' || 'span' || 'a':
              htmlElem.innerHTML = elem.text
              htmlElem.classList.add('no-code')
              break
            case 'img':
              htmlElem.src = elem.img_source
              break
            case 'code':
              htmlElem.classList.add(`language-${elem.lang}`)
              htmlElem.innerHTML = elem.text.replace(/<br\/>/g, '\n')
              preElem.appendChild(htmlElem)
              htmlElem = preElem
              break
            default:
              htmlElem.innerHTML = elem.text
              break
          }
          inclusiveElem.appendChild(htmlElem)
        })
      }
    },
  },
}
