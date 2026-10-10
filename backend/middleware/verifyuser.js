const verifyUser = (req, res, next) => {
  const authtoken = req.get("Authorization") || "";
  const [scheme, token] = authtoken.split(" ");
  if (!token) {
    res.json({ message: "Need Token" });
    return;
  }
  console.log(token);

  let a = "mytoken";
  if (a == token) {
    console.log("Security Check pass");
    return next();
  } else {
    console.log("Security Check failed");
    return res.status(401).send("Unauthorized");
  }
};
module.exports = verifyUser;
