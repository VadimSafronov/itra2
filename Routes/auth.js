const router = require('express').Router()
 const db = require('../models')
 const JWT = require('jsonwebtoken')
 const { SECRET } = require('../config/jwt-secret')

const response = (statusCode, data = null) => ({
    statusCode: statusCode,
    data: data,
})

const createJWTCookie = (req, id) => {
    const payload = { id: id }
    const token = JWT.sign(payload, SECRET)
    req.session.user_token = token
}

const checkRequestValues = (field1, field2, field1Length = 20, field2Length = 20) => {
    if (!field1 || !field2) {
        return response(400)
    }
    if (field1.length > field1Length || field2.length > field2Length) {
        return response(413)
    }
}

router.post('/login', (req, res) => {
    const error = checkRequestValues(req.body.login, req.body.password)
    if (error) return res.send(error)

    db.Users.findOne({
        where: {
            login: req.body.login,
            password: req.body.password,
        },
        attributes: ['id', 'name', 'isBlocked', 'isAdmin'],
    }).then((user) => {
        if (user === null) {
            return res.send(response(204))
        }

        if (user.isBlocked === true) {
            return res.send(response(403))
        }

        createJWTCookie(req, user.id)
        res.send(response(200, { id: user.id, name: user.name, isAdmin: user.isAdmin }))
    })
})

router.post('/registration', (req, res) => {
    const error = checkRequestValues(req.body.login, req.body.password)
    if (error) return res.send(error)

    db.Users.findOrCreate({
        where: {
            login: req.body.login,
        },
        defaults: {
            login: req.body.login,
            password: req.body.password,
            socialId: null,
            isBlocked: false,
            isAdmin: false,
            name: req.body.login,
        },
    }).then(([{ id, name, isAdmin }, created]) => {
        if (created === false) {
            return res.send(response(204))
        }

        createJWTCookie(req, id)
        res.send(response(200, { id, name, isAdmin }))
    })
})

router.post('/socialLogin', (req, res) => {
    const error = checkRequestValues(req.body.socialId, req.body.name, 40)
    if (error) return res.send(error)

    db.Users.findOrCreate({
        where: {
            socialId: req.body.socialId,
        },
        defaults: {
            login: null,
            password: null,
            socialId: req.body.socialId,
            isBlocked: false,
            isAdmin: false,
            name: req.body.name,
        },
    }).then(([{ id, name, isBlocked, isAdmin }, created]) => {
        if (isBlocked === true) {
            return res.send(response(403))
        }

        createJWTCookie(req, id)
        res.send(response(200, { id, name, isAdmin }))
    })
})

router.post('/me', (req, res) => {
    const token = req.session.user_token

    JWT.verify(token, SECRET, (err, decoded) => {
        if (!decoded) {
            return res.send(response(401))
        }

        db.Users.findByPk(decoded.id)
            .then(({ id, isBlocked, isAdmin }) => {
                if (id === null || isBlocked === true) {
                    return res.send(response(403))
                }

                res.send(response(200, { id, isAdmin }))
            })
            .catch((error) => {
                return res.send(response(401))
            })
    })
})

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send(response(500))
        }
        res.send(response(200))
    })
})

module.exports = router