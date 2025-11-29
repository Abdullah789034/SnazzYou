const Analysis = require("../model/anaysis");
const Suggestion = require("../model/Suggestion");
const { suggestStyle } = require("../services/openai.service");
const HttpError = require("../utils/customError");

const suggestionController = {
  getGeneralSuggestion: async (req, res) => {
    const { user } = req.session;
    const analysisDoc = await Analysis.findOne({ userId: user._id }).sort({
      createdAt: -1,
    });

    if (!analysisDoc) {
      throw new HttpError(
        200,
        "No images analysis available, upload images to get suggestion."
      );
    }

    const userAnalysis = analysisDoc.analysis;
    userAnalysis.userDemographic = user;

    const suggestion = await suggestStyle(userAnalysis);

    if (!suggestion) {
      throw new HttpError(
        500,
        "Error in getting Suggestions, Please try again later"
      );
    }

    const newSuggestion = await Suggestion.create({
      userId: user._id,
      suggestion,
    });

    res.json({
      success: true,
      message: "Suggestions created Successfully",
      data: newSuggestion,
    });
  },

  getSuggestions: async (req, res) => {
    const { user } = req.session;
    const suggestions = await Suggestion.find({ userId: user._id })
      .sort("-createdAt")
      .limit(10);

    return res.json({
      success: true,
      message: "",
      suggestions,
    });
  },

  getSpecificSuggestion: async (req, res) => {
    const { suggestionId } = req.params;
    const suggestion = await Suggestion.findOne({ _id: suggestionId });

    if (!suggestion) {
      throw new HttpError(404, "Suggestion not found");
    }

    return res.json({
      success: true,
      message: "",
      data: suggestion,
    });
  },
};

module.exports = suggestionController;
