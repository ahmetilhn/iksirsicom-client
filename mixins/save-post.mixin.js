import { SAVED_POSTS_KEY } from "~/constants/localstorage.constants"
export default {
  methods: {
    setItem(item) {
      if (process.client) {
        localStorage.setItem(SAVED_POSTS_KEY, JSON.stringify(item))
      }
    },
  },
}
