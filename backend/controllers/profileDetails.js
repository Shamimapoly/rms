const profileDetails = async (req, res) => {
  res.json({
    message: "Profile Details route accessed successfully",
    details:"This is the profile details information."
  });
};
module.exports = profileDetails;
