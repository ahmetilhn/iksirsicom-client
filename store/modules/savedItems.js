export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    setItem(state, items) {
      state.items = items
    },
    isItemControl(state, item) {
      return !!state.items.find((i) => i.id === item.id)
    },
  },
}
