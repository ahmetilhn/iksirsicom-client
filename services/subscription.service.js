import baseService from './base.service'

const createSubscription = async (email) => {
  const res = await baseService.post('/subscriptions', {
    email,
  })
  if (res) return res
}
export default { createSubscription }
