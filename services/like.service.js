import baseService from './base.service'

const createLike = async (postId) => {
  const res = await baseService.post('/likes', {
    post_id: postId,
  })
  if (res) return res
}
export default { createLike }
