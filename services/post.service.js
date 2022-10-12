import baseService from './base.service'

const getAllPosts = async (query) => {
  const res = await baseService.get('/posts', {
    params: query,
  })
  return res
}
const getPostById = async (id) => {
  const res = await baseService.get(`/posts/${id}`)
  if (res) return res
}
export default { getAllPosts, getPostById }
