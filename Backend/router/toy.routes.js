const toyController = require("../controllers/toy.controller");
const { imageUpload } = require("../middleware/multer.middleware");

const router = require("express").Router();

router.post(
  "/suggest",
  [imageUpload.single("image")],
  toyController.getSuggestion
);

module.exports = router;
