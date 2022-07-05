export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    setItem(state, item) {
      state.items.push(item)
    },
    // isItemControl(state, item) {
    //   return !!state.items.find((i) => i.id === item.id)
    // },
    removeItem(state, item) {
      const itemIndex = state.items.findIndex((i) => i.id === item.id)
      if (itemIndex > -1) state.items.splice(itemIndex, 1)
    },
  },
}
