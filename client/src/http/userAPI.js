import { $authRequests, $requests } from "./index";
import jwt_decode from "jwt-decode"

export const signup = async (email, password) => {
    const {data} = await $requests.post('api/v1/user/signup', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const signin = async (email, password) => {
    const {data} = await $requests.post('api/v1/user/signin', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authRequests.get('api/v1/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}