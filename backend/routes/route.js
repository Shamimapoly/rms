const express = require('express')
const authRoute = require('./api/auth');
const profileRoute = require('./api/profile');
const todoRoute = require('./api/todo');
const route = express.Router()


route.use('/auth', authRoute)
route.use('/profile',profileRoute)   
route.use('/todo', todoRoute)   

module.exports = route