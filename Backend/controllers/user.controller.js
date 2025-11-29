const Analysis = require("../model/anaysis");
const Feedback = require("../model/Feedback");
const { analyseImage } = require("../services/openai.service");
const HttpError = require("../utils/customError");
const dummyData = require("../utils/dummyData");
const { deleteFile } = require("../utils/fileManagement");

const userController = {
  uploadImage: async (req, res) => {
    const { files } = req;
    const { user } = req.session;
    const pastAnalysis = await Analysis.find({ userId: user._id }).count();
    if (pastAnalysis > 2) {
      throw new HttpError(200, "You get only 3 analysis for now :)");
    }
    console.log(files);
    if (!files.length) {
      throw new HttpError(400, "No images were uploaded");
    }
    const links = [];
    for (const file of files) {
      links.push(`${process.env.DOMAIN}/${file.path.replace("public/", "")}`);
    }
    console.log(links);
    if (process.env.ENV == "DEV") {
      for (const file of files) {
        deleteFile(file.path);
      }
      console.log(links);
      return res.json({
        success: true,
        links,
        message: "Successfully analyzed you images (DUMMY)",
        data: dummyData.analysis || null,
      });
    }

    const analysis = await analyseImage(links);
    if (!analysis) {
      throw new HttpError(
        500,
        "Snazz Failed with Analysis, Please try again later"
      );
    }

    if (!analysis.human) {
      throw new HttpError(
        400,
        "No human detected in images, Try again with valid images"
      );
    }

    const savedAnalysis = await Analysis.create({ userId: user._id, analysis });
    for (const file of files) {
      deleteFile(file.path);
    }
    res.json({
      success: true,
      message: "Successfully analyzed you images",
      data: savedAnalysis || null,
    });
  },
  getSplash: async (req, res) => {
    const { user } = req.session;
    const sanitizedUser = user.toObject();
    delete sanitizedUser.password;
    sanitizedUser.analysis = null;

    const analysis = await Analysis.findOne({ userId: user._id }).sort({
      createdAt: -1,
    });
    if (analysis) {
      sanitizedUser.analysis = analysis.analysis;
    }

    res.json({
      success: true,
      message: "Successfull User Splash",
      data: sanitizedUser,
    });
  },

  takeFeedback: async (req, res) => {
    const { rating, comment } = req.body;
    const { user } = req.session;

    await Feedback.create({ rating, comment, userId: user._id });

    return res.json({
      success: true,
      message: "Thanks for your feedback",
    });
  },
};
module.exports = userController;
