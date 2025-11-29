const authController = require("../controllers/auth.controller");
const { validateRequest } = require("../middleware/validate.middleware");
const validationSchemas = require("../utils/validationSchemas");

const router = require("express").Router();

router.post(
  "/register",
  [validateRequest(validationSchemas.auth.register)],
  authController.register
);

router.post(
  "/email-check",
  [validateRequest(validationSchemas.auth.emailCheck)],
  authController.emailCheck
);
router.post(
  "/login",
  [validateRequest(validationSchemas.auth.login)],
  authController.login
);

module.exports = router;
