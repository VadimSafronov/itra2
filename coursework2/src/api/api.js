import axios from 'axios'

const instance = axios.create({
    baseURL: '/api/',
})

export const authAPI = {
    login(login, password) {
        return instance.post('auth/login', { login, password })
    },
    registration(login, password) {
        return instance.post('auth/registration', { login, password })
    },
    socialLogin(Id, name) {
        return instance.post('auth/socialLogin', {Id, name })
    },
    me() {
        return instance.post('auth/me')
    },
    logout() {
        return instance.post('auth/logout')
    },
}

