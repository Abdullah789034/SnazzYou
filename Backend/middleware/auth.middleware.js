const jwt = require("../utils/jwt.js");
const HttpError = require("../utils/customError.js");
const User = require("../model/User.js");

const auth = async (req, res, next) => {
  const header = req.header("x-auth-token");
  if (!header) {
    const err = new HttpError(401, "unauthorized - You are not Logged In");
    throw err;
  }
  // const token = header.replace("Bearer ", "");
  const decodedData = jwt.readToken(header);
  if (!decodedData) {
    const err = new HttpError(401, "unauthorized - Invalid or Expired Token");
    throw err;
  }
  const userData = await User.findOne({ _id: decodedData?.id });
  if (!userData) {
    const err = new HttpError(401, "unauthorized - Invalid Token");
    throw err;
  }
  req.session = {};
  req.session.user = userData;
  next();
};

module.exports = auth;
