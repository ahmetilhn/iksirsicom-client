import baseHTTP from './base.service'

const createSubscription = async (email) => {
  const res = await baseHTTP.post('/subscriptions', {
    email,
  })
  if (res) return res
}
export default { createSubscription }
