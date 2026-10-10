const express = require('express');
const profile = require('../../controllers/profile');
const verifyUser = require('../../middleware/verifyuser');
const profileRoute =express.Router()



profileRoute.get('/', verifyUser, profile)
// profileRoute.post('/login',loginController)

module.exports = profileRoute