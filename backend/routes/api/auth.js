const express = require('express')
const registerController = require('../../controllers/register')
const loginController = require('../../controllers/login')
const authRoute =express.Router()



authRoute.post('/register', registerController)
authRoute.post('/login',loginController)

module.exports = authRoute