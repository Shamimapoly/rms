const STATIC_TOKEN = "dsafsdfdsf";

const verifyUser = (req, res, next) => {
  const authorization = req.get("authorization") || "";
  const [scheme, token] = authorization.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).send("authorization token required");
  }

  if (token !== STATIC_TOKEN) {
    return res.status(401).send("invalid token");
  }

  return next();
};

module.exports = verifyUser;