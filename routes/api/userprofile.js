const express = require("express");

const router = express.Router();

const Profile = require("../../database/models/userprofile");

router.get("/", (req, res) => {
  console.log("userprofile");
  console.log(req.user.username);

  Profile.findOne({ username: req.user.username }, (err, profile) => {
    if (err) {
      console.log("Profile Create Error: ", err);
      return;
    }

    // if (profile) {
    //   res.json({
    //     error: `Sorry, already a profile with the username: ${req.user.username}`,
    //   });
    //   return;
    // }
    console.log(profile);
    if (req.user.username) {
      res.json({ userprofile: profile });
    } else {
      res.json({ userprofile: null });
    }
  });

  console.log("Profile1", Profile);
});

router.post("/", (req, res) => {
  Profile.findOne({ username: req.body.username }, (err, profile) => {
    if (err) {
      console.log("Profile Create Error: ", err);
      return;
    }

    if (profile) {
      res.json({
        error: `Sorry, already a profile with the username: ${req.body.username}`,
      });
      return;
    }
    const {
      username,
      email,
      city,
      state,
      country,
      aboutMe,
      faveSong,
    } = req.body;
    async function addProfile() {
      const newProfile = new Profile({
        username: username,
        email: email,
        city: city,
        state: state,
        country: country,
        aboutMe: aboutMe,
        faveSong: faveSong,
      });

      const savedProfile = await Profile.create(newProfile);
      console.log("savedProfile", savedProfile);
      res.json(savedProfile);
    }
    addProfile();
  });
});

module.exports = router;
