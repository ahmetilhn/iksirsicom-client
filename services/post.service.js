import baseHTTP from './base.service'

const getAllPosts = async () => {
  const res = await baseHTTP.get('/posts')
  if (res) return res
}

export default { getAllPosts }
