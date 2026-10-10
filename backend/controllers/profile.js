const profile = async (req, res) => {
  res.json({
    message: "Profile route accessed successfully",
    data: {
      userName: "John Doe",
      email: "eee",
    },
  });
};
module.exports = profile;
