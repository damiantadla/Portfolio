import axios from './axiosInstance.js'
const sendMessage = async (email, title, message) => {
  return await axios.post('/messenger/send', {
    email,
    title,
    message
  })
}

const getMessageId = async (id) => {
  return await axios.get(`/messenger/get/:${id}`)
}

const getMessages = async () => {
  return await axios.get('/messenger/get')
}

const deleteMassage = async (id) => {
  return await axios.delete(`/messenger/delete/:${id}`)
}

export { sendMessage, getMessageId, getMessages, deleteMassage }
