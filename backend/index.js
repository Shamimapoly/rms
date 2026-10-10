// ===all import=================
const express = require('express')
const app =express()
const cors= require('cors')
const  route  = require('./routes/route')
const { default: mongoose } = require('mongoose')
const { log } = require('console')
const dbConnection = require('./db')
const port = 8000

// ====middlewires==========
app.use(express.json())
app.use(cors())
app.use(route)

// =====db connection==========
dbConnection()
// ====server run=====
app.listen(port , ()=>{
    console.log(`This server is running at ${port}`);
    
})