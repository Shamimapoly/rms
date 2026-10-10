const { emailRegex, passwordRegex } = require("../helpers/regex");
const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).send("email and password required");
    }
    if (!emailRegex.test(email))
      return res.status(400).send("email is not valid");
    if (!passwordRegex.test(password))
      return res.status(400).send("password is not valid");

    const existUser = await authModel.findOne({ email });
    if (!existUser) return res.status(401).send("user not found");

    const passwordMatches = await bcrypt.compare(password, existUser.password);
    if (!passwordMatches) return res.status(401).send("wrong password");

    let token = "mytoken";
    return res.status(200).json({
      message: "login success",
      token: token,
    });
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(500).send("server error");
  }
};

module.exports = loginController;
