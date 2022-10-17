import axios from 'axios'
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://iksirsi-api.onrender.com'
const baseHTTP = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
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
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default baseHTTP
