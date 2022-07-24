import { mapState } from 'vuex'
import { SAVED_POSTS_KEY } from '~/constants/localstorage.constants'
import { getStorage, setStorage } from '~/utils/localStorage.util'
export default {
  data() {
    return {
      isSaved: false,
    }
  },
  computed: {
    ...mapState({
      items: (store) => store.modules.savedItems.items,
    }),
  },
  methods: {
    setItem(item) {
      this.$store.commit('modules/savedItems/setItem', item)
    },
    removeItem(item) {
      this.$store.commit('modules/savedItems/removeItem', item)
    },
    saveClickHandler(item) {
      this.isSaved ? this.removeItem(item) : this.setItem(item)
      this.isSaved = !this.isSaved
      setStorage(SAVED_POSTS_KEY, this.items)
    },
    initSavePost() {
      const items = getStorage(SAVED_POSTS_KEY)
      this.$store.commit('modules/savedItems/setItems', items)
    },
    setIsSaved() {
      const isItem = this.items?.some((item) => item._id === this.postDetail._id)
      this.isSaved = !!isItem
    },
  },
  mounted() {
    this.initSavePost()
    this.setIsSaved()
  },
}
