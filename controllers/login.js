const { emailRegex, passwordRegex } = require("../helpers/regex")
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');

const loginController =async (req,res)=>{
    const {email, password}=req.body
    const existUser = await authModel.findOne({email})

    if(!emailRegex.test(email)) return res. status(401).send('email is not valid')
    if(!passwordRegex.test(password)) return res. status(401).send('password is not valid')
    if(!existUser) return res.status(401).send('user not foumd')
    
    bcrypt.compare(password, existUser.password)
    .then((result)=> {
        if(result){
            res.status(200).send('login success')
        }else{
            res.status(401).send('wrong password')
        }
})


    

    
}

module.exports =loginController

