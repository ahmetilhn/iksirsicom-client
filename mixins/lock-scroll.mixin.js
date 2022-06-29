export default {
  methods: {
    lockScroll(condition) {
      if (process.client) {
        const body = document.body
        if (condition) {
          body.style.overflow = 'hidden'
        } else {
          body.style.overflow = ''
        }
      }
    },
  },
}
