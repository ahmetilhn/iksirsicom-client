import baseService from './base.service'

const createLike = async (postId) => {
  const res = await baseService.post('/likes', {
    post_id: postId,
  })
  return res
}
export default { createLike }
