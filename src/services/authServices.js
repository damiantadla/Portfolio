import axios from '../services/axiosInstance.js'
import { useToast } from 'vue-toastification'
const toast = useToast()

const login = async (email, password) => {
  return await axios.post('/auth/login', {
    email,
    password
  })
}

const logout = async () => {
  return await axios.post('/auth/logout')
}

export { login, logout }
