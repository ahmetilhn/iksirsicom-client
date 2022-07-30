export default {
  methods: {
    createHtmlElements(elems) {
        const inclusiveElem = document.getElementById("post_detail_content")
      if (process.client) {
        elems.forEach((elem) => {
          const tagName = elem.type
          const htmlElem = document.createElement(tagName)
          switch (tagName) {
            case 'p' || 'span' || 'a':
              htmlElem.innerHTML = elem.text
              break
            case 'img':
              htmlElem.src = elem.imgSource;
              break;
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
