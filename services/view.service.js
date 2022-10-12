import baseService from './base.service'

const createView = async (postId) => {
  const res = await baseService.post('/views', {
    post_id: postId,
  })
  if (res) return res
}
export default { createView }
