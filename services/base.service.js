import axios from 'axios'

const baseHTTP = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 8000,
  headers: { 'X-Custom-Header': 'iksirsi-api' },
})

export default baseHTTP
