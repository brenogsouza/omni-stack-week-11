import axios from 'axios'
const api = axios.create({
  baseURL: 'http://192.168.255.50:3333'
})
export default api