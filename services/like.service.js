import baseHTTP from './base.service'

const createLike = async (postId) => {
  const res = await baseHTTP.post('/likes', {
    post_id: postId,
  })
  if (res) return res
}
export default { createLike }
