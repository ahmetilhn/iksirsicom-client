import postService from '~/services/post.service'

export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },
  },
  actions: {
    async getAllPosts({ _, commit }) {
      const res = await postService.getAllPosts()
      if (res) {
        commit('setPosts', res.data)
      }
    },
  },
}
