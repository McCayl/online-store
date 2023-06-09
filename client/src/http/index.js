import axios from 'axios'

const $requests = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authRequests = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authRequests.interceptors.request.use(authInterceptor)

export {
    $requests,
    $authRequests
}