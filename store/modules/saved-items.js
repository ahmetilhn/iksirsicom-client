export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    setItems(state, items) {
      state.items = items
    },
  },
}
