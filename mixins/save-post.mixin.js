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
      console.log(item)
    },
    saveClickHandler(item) {
      this.isSaved = !this.isSaved
      this.isSaved ? this.removeItem(item) : this.setItem(item)
    },
  },
}
