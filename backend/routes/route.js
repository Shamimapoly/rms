const express = require('express')
const authRoute = require('./api/auth')
const profileRoute = require('./api/profile')
const route = express.Router()


route.use('/auth', authRoute)
route.use('/profile', profileRoute)

module.exports = route