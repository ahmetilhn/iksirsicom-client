import baseService from './base.service'

const getUsers = async () => {
  const res = await baseService.get('/users')
  return res
}
export default { getUsers }
