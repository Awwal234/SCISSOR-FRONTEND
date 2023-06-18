import axios from 'axios'

const api = axios.create({
    baseURL: 'https://scissor-backend.onrender.com/api',
    headers: {'content-type': 'application/json'}
})

export default api