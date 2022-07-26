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
    async getAllPosts({ _, commit }, query) {
      const res = await postService.getAllPosts(query)
      if (res) {
        commit('setPosts', res.data)
      }
    },
    async getPostById({ _ }, id) {
      const res = await postService.getPostById(id)
      if (res) return res
    },
  },
}
