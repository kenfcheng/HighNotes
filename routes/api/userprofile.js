const express = require("express");

const router = express.Router();

const Profile = require("../../database/models/userprofile");

router.get("/api/userprofile", (req, res) => {
  if (req.userprofile) {
  } else {
    res.json({ userprofile: null });
  }
  console.log("Profile", Profile);
});

module.exports = router;
