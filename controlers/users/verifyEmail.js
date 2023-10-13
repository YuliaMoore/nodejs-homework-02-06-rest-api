const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new RequestError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({
    status: "success",
    code: 200,
    data: {
      message: "Verification successful",
    },
  });
};

module.exports = verifyEmail;