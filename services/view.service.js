import baseService from './base.service'

const createView = async (postId) => {
  const res = await baseService.post('/views', {
    post_id: postId,
  })
  return res
}
export default { createView }
