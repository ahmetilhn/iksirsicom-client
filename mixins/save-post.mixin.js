export default {
  data() {
    return {
      isSaved: false,
    }
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
    },
  },
}
