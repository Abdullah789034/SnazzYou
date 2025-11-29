const aiService = require("../services/openai.service");
const fs = require("fs");
const obj = require("../utils/dummyData");
const { deleteFile } = require("../utils/fileManagement");
const HttpError = require("../utils/customError");

const toyController = {
  getSuggestion: async (req, res) => {
    if (!req.file) {
      throw HttpError(400, "Image is required in body");
    }

    const { path } = req.file;
    const imageUrl = `${process.env.DOMAIN}/${path.replace("public/", "")}`;
    // if (process.env.ENV == "dev") {
    deleteFile(path);
    return res.json(obj);
    // }
    const analysis = await aiService.analyseImage(imageUrl);
    // const analysis = await aiService.analyseImage(
    //   "https://i.ibb.co/wBFLKWb/Whats-App-Image-2024-06-28-at-00-00-56-27f26376.jpg"
    // ); //FOR TESTING PURPOSE
    if (!analysis) {
      deleteFile(path);
      return res.status(500).json({
        success: false,
        message: "Something went wrong while image analysis",
      });
    }
    if (!analysis?.human) {
      return res.status(400).json({
        success: false,
        message: "There is no detected in Image",
      });
    }

    const suggestion = await aiService.suggestStyle(analysis);
    if (!suggestion) {
      deleteFile(path);
      return res.status(500).json({
        success: false,
        message: "Something went wrong, try again later",
      });
    }

    deleteFile(path);
    res.json({
      success: true,
      message: "Successfully Completed Analysis",
      suggestion,
      analysis,
    });
  },
};

module.exports = toyController;
