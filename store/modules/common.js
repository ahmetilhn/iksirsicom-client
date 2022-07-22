export default {
  state: () => ({
    appIsReady: true,
    subscriptionModalIsVisible: false,
  }),
  mutations: {
    setSubscriptionModalVisible(state, payload) {
      state.subscriptionModalIsVisible = payload
    },
  },
}
