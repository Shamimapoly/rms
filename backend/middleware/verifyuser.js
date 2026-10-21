const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const authtoken = req.get("Authorization") || "";
  //  Bearer aaa
  console.log("req theke received :", authtoken);
  const [scheme, token] = authtoken.split(" ");  
  // Scheme = Bearer, token = aaa
  console.log("Token Scema kortece :",scheme);
  console.log("Token Convert kortece :",token);

  if (!token) {
    res.json({ message: "Need Token" });
    return;
  }
  try {
    const decoded = jwt.verify(token, "aaaa");
    req.user = decoded;
    return next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid token" });
  }

};
module.exports = verifyUser;
