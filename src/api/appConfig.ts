// import { BASE_URL } from '@env'
import axios from 'axios'
// const baseURL = BASE_URL
const baseURL = 'http://localhost:3000/'

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
}

const API = axios.create({
    withCredentials: false,
    headers,
    baseURL
})

API.interceptors.request.use(
    async request => {
        const token = await localStorage.getItem('token')
        if (token) request.headers.Authorization = token
        return request
    }
)

API.interceptors.response.use(
    async (response) => {
        if ('authorization' in response.headers) await localStorage.setItem('token', response.headers.authorization)
        return response
    }
)

export {
    headers,
    baseURL,
    API
}
