import postService from '~/services/post.service'

export default {
  state: () => ({
    posts: [],
  }),
  actions: {
    async getAllPosts() {
      await postService.getAllPosts()
    },
  },
}
