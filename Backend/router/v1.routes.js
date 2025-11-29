const router = require("express").Router();
const toyRoutes = require("./toy.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const suggestionsRoutes = require("./suggestions.routes");

router.use("/toy", toyRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/suggestions", suggestionsRoutes)

module.exports = router;
