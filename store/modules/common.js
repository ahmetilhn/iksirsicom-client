export default {
  state: () => ({
    appIsReady: true,
    subscriptionModalIsVisible: false,
    savedItemsModalIsVisible: true,
  }),
  mutations: {
    setSubscriptionModalVisible(state, payload) {
      state.subscriptionModalIsVisible = payload
    },
    setSavedItemsModalVisible(state, payload) {
      state.savedItemsModalIsVisible = payload
    },
  },
}
