import baseHTTP from './base.service'

const createView = async (postId) => {
  const res = await baseHTTP.post('/views', {
    post_id: postId,
  })
  if (res) return res
}
export default { createView }
