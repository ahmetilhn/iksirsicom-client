export default {
  state: () => ({
    appIsReady: true,
    subscriptionModalIsVisible: false,
    savedItemsModalIsVisible: false,
  }),
  mutations: {
    setAppIsReady(state, payload) {
      state.appIsReady = payload
    },
    setSubscriptionModalVisible(state, payload) {
      state.subscriptionModalIsVisible = payload
    },
    setSavedItemsModalVisible(state, payload) {
      state.savedItemsModalIsVisible = payload
    },
  },
}
