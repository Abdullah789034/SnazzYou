const { imageUpload } = require("../middleware/multer.middleware");
const auth = require("../middleware/auth.middleware");
const userController = require("../controllers/user.controller");
const validationSchemas = require("../utils/validationSchemas");
const { validateRequest } = require("../middleware/validate.middleware");

const router = require("express").Router();

router.get("/", [auth], userController.getSplash);
router.post(
  "/uploads/images",
  [auth, imageUpload.array("image", 2)],
  userController.uploadImage
);
router.post(
  "/feedback",
  [auth, validateRequest(validationSchemas.user.feedback)],
  userController.takeFeedback
);
module.exports = router;
