import axios from 'axios'

const baseHTTP = axios.create({
  baseURL: 'https://iksirsi-api.onrender.com',
  timeout: 8000,
  headers: { 'X-Custom-Header': 'iksirsi-api' },
})
baseHTTP.interceptors.response.use(
  (res) => {
    // Status controller
    if (res.status) {
      if (res.status >= 500 && res.status <= 599) {
        console.error('Server Error', res.data)
      } else if (res.status >= 400 && res.status <= 499) {
        console.error('Client Error', res.data)
      } else if (res.status >= 100 && res.status <= 199) {
        console.info(res.data)
      }
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default baseHTTP
