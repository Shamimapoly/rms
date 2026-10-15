const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const authtoken = req.get("Authorization") || "";
  const [scheme, token] = authtoken.split(" ");
  if (!token) {
    res.json({ message: "Need Token" });
    return;
  }
  return next();
};
module.exports = verifyUser;
