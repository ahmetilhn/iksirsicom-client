export default {
  methods: {
    lockScroll(element, condition) {
      if (process.client) {
        const body = require('body-scroll-lock')
        if (condition) {
          body.style.overflow = 'hidden'
        } else {
          body.style.overflow = ''
        }
      }
    },
  },
}
