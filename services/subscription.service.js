import baseService from './base.service'

const createSubscription = async (email) => {
  const res = await baseService.post('/subscriptions', {
    email,
  })
  return res
}
export default { createSubscription }
