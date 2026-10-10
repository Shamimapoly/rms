const express = require("express");
const profile = require("../../controllers/profile");
const verifyUser = require("../../middleware/verifyuser");
const profileDetails = require("../../controllers/profileDetails");
const profileRoute = express.Router();

profileRoute.get("/", verifyUser, profile);
profileRoute.get("/details", verifyUser, profileDetails);
// reoute   ---> verify(middleware function ) --(pass)--> controller function
module.exports = profileRoute;
