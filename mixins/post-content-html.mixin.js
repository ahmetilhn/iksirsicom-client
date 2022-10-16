export default {
  methods: {
    createHtmlElements(elems) {
      if (process.client) {
        const inclusiveElem = document.getElementById('post_detail_content')
        elems.forEach((elem) => {
          const tagName = elem.type
          let htmlElem = document.createElement(tagName)
          // For code
          const preElem = document.createElement('pre')
          switch (tagName) {
            case 'p':
              htmlElem.innerText = elem.text
              break
            case 'span':
              htmlElem.innerText = elem.text
              htmlElem.classList.add('no-code')
              break
            case 'a':
              htmlElem.innerText = elem.text
              htmlElem.href = elem.href
              break
            case 'img':
              htmlElem.src = elem.img_source
              break
            case 'code':
              htmlElem.classList.add(`language-${elem.lang}`)
              console.log(elem.text.replace(/<br\/>/g, '\n'))
              htmlElem.innerText = elem.text.replace(/<br\/>/g, '\n')
              preElem.appendChild(htmlElem)
              htmlElem = preElem
              break
            default:
              htmlElem.innerText = elem.text
              break
          }
          inclusiveElem.appendChild(htmlElem)
        })
      }
    },
  },
}
