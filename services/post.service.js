import baseHTTP from './base.service'

const getAllPosts = async (query) => {
  const res = await baseHTTP.get('/posts', {
    params: query,
  })
  if (res) return res
}
const getPostById = async (id) => {
  const res = await baseHTTP.get(`/posts/${id}`)
  if (res) return res
}
export default { getAllPosts, getPostById }
