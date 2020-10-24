const router = require("express").Router();
const userRoutes = require("./users");
const userProfileRoutes = require("./userprofile");

router.use("/users", userRoutes);
router.use("/userprofile", userProfileRoutes);

module.exports = router;
