const { emailRegex, passwordRegex } = require("../helpers/regex")
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
    try {
        const { userName, email, password } = req.body || {}

        if (!userName) return res.status(400).send('user name required')
        if (!email) return res.status(400).send('email required')
        if (!password) return res.status(400).send('password required')
        if (!emailRegex.test(email)) return res.status(400).send('email is not valid')
        if (!passwordRegex.test(password)) return res.status(400).send('password is not valid')

        const existUser = await authModel.findOne({ email })
        if (existUser) return res.status(409).send('user already exist')

        const hash = await bcrypt.hash(password, 10)
        const saveAuth = new authModel({
            userName: userName.trim(),
            email,
            password: hash
        })

        await saveAuth.save()
        return res.status(200).send('register success')
    } catch (error) {
        console.error('Registration failed:', error)
        return res.status(500).send('server error')
    }
}

module.exports = registerController