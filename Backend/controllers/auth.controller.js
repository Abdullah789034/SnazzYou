const User = require("../model/User.js");
const HttpError = require("../utils/customError.js");
const { makeToken } = require("../utils/jwt.js");
const bcrypt = require("bcrypt");

const authController = {
  register: async (req, res) => {
    const data = req.body;
    data.email = data.email?.toLowerCase().trim();
    //Checking for Existing Username
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      const err = new HttpError(
        409,
        "Already an account on this email - you can login"
      );
      throw err;
    }

    //Adding User in Database
    data.password = await bcrypt.hash(data.password, 10);
    const registered = await User.create(data);
    delete registered.password;

    const token = makeToken(registered);

    //Send Success Message
    res.status(200).json({
      token,
      success: true,
      message: "Successfully Registered User",
      data: registered,
    });
  },

  login: async (req, res) => {
    const { password } = req.body;
    const email = req.body.email.toLowerCase().trim();
    const userDoc = await User.findOne({ email }).lean();
    if (!userDoc) {
      throw new HttpError(400, "Invalid credentials");
    }
    console.log(userDoc);
    const validPassword = await bcrypt.compare(password, userDoc.password);
    if (!validPassword) {
      throw new HttpError(400, "Invalid credentials");
    }

    const token = await makeToken(userDoc);
    delete userDoc.password;

    res.json({
      token,
      success: true,
      message: "You are successfully logged in",
      data: userDoc,
    });
  },

  emailCheck: async (req, res) => {
    const email = req.body?.email.toLowerCase().trim();

    const existingAccount = await User.findOne({ email });
    if (existingAccount) {
      throw new HttpError(409, "Email Already registered, You can login");
    }
    res.json({ success: true, message: "valid email" });
  },
};

module.exports = authController;
