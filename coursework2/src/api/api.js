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

export const profileAPI = {
    getBonusesCount(userId) {
        return instance.post('profile/bonuses/count', { userId })
    },
    getBonuses(userId, offset, limit) {
        return instance.post('profile/bonuses/get', { userId, offset, limit })
    },
    getCompanyCount(userId) {
        return instance.post('profile/company/count', { userId })
    },
    getCompany(userId, offset, limit) {
        return instance.post('profile/company/get', { userId, offset, limit })
    },
    getUserInfo(userId) {
        return instance.post('profile/user/get', { userId })
    },
}

