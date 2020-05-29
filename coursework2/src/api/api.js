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
    socialLogin(socialId, name) {
        return instance.post('auth/socialLogin', { socialId, name })
    },
    me() {
        return instance.post('auth/me')
    },
    logout() {
        return instance.post('auth/logout')
    },
}

export const adminAPI = {
    getUsersCount() {
        return instance.get('admin/users/count')
    },
    getUsers(offset, limit) {
        return instance.post('admin/users/get', { offset, limit })
    },
    setAdmins(ids) {
        return instance.post('admin/admins/add', { ids })
    },
    deleteAdmins(ids) {
        return instance.post('admin/admins/delete', { ids })
    },
    blockUsers(ids) {
        return instance.post('admin/users/block', { ids })
    },
    unblockUsers(ids) {
        return instance.post('admin/users/unblock', { ids })
    },
    deleteUsers(ids) {
        return instance.post('admin/users/delete', { ids })
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

export const companyAPI = {
    getUserCompanies(userId) {
        return instance.post('company/userCompanies/getId', { userId })
    },
    getCompany(companyId) {
        return instance.post('company/company/get', { companyId })
    },
    getBonusesCount(companyId) {
        return instance.post('company/bonuses/count', { companyId })
    },
    getBonuses(companyId, offset, limit) {
        return instance.post('company/bonuses/get', { companyId, offset, limit })
    },
    buyBonus(bonusId, userId, companyId, bonusAmount) {
        return instance.post('company/bonuses/buy', { bonusId, userId, companyId, bonusAmount })
    },
    createCompany(userId, title, description, videoLink, targetAmount, expirationDate) {
        return instance.post('company/create', {
            userId,
            title,
            description,
            videoLink,
            targetAmount,
            expirationDate,
        })
    },
}

export const homeAPI = {
    getCompany() {
        return instance.post('home/company/get')
    },
}

export const bonusAPI = {
    getCompaniesId(userId) {
        return instance.post('bonus/companiesId/get', { userId })
    },
    createBonus(title, amount, description, companyId) {
        return instance.post('bonus/create', { title, amount, description, companyId })
    },
}