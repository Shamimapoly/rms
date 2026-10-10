const { emailRegex, passwordRegex } = require("../helpers/regex")
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');

const registerController =async (req,res)=>{

const {userName,email,password}=req.body


const existUser = await authModel.findOne({email})

    if(!userName) return res.status(401).send('user name required')
    if(!emailRegex.test(email)) return res.status(401).send('email is not valid')
    if(!passwordRegex.test(password)) return res.status(404).send('password is not valid')
    
    if(existUser) return res.status(401).send('user already exist')
    // ======send user data to db=====
    
    bcrypt.hash(password, 10)
    .then(function(hash) {
        const saveAuth= new authModel({
        userName:userName.trim(),
         email,
         password:hash
    })
    saveAuth.save()

    
});
   
    res.status(200).send('register success')
}


module.exports=registerController