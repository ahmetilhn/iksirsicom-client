import axios from 'axios'

const baseHTTP = axios.create({
  baseURL: 'https://iksirsi-api.onrender.com',
  timeout: 8000,
  headers: { 'X-Custom-Header': 'iksirsi-api' },
})

export default baseHTTP
