const suggestionController = require("../controllers/suggestions.controller");
const auth = require("../middleware/auth.middleware");

const router = require("express").Router();

router.get("/general", [auth], suggestionController.getGeneralSuggestion);
router.get("/", [auth], suggestionController.getSuggestions)
router.get("/:suggestionId", [auth], suggestionController.getSpecificSuggestion)

module.exports = router;
