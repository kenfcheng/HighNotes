const express = require("express");

const router = express.Router();

const Profile = require("../../database/models/userprofile");

router.get("/", (req, res) => {
  Profile.findOne({ username: req.user.username }, (err, profile) => {
    console.log("profile", profile);
    res.json(profile);
    if (err) {
      console.log("User Create Error: ", err);
      return;
    }
  });

  // if (req.user) {
  //   res.json({ username: req.user.username });
  //   console.log(req.query);
  // } else {
  //   res.json({ username: null });
  // }
});

router.post("/", (req, res) => {
  const {
    username,

    email,
    city,
    state,
    country,
    aboutMe,
    faveSong,
  } = req.body;
  console.log("Profile", Profile);

  Profile.findOne({ username: username }, (err, profile) => {
    console.log("profile", profile);
    if (err) {
      console.log("User Create Error: ", err);
      return;
    }

    if (profile) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }
    async function addUser() {
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
    addUser();
  });
});

// router.post(
//   "/login",
//   (req, res, next) => {
//     next();
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("LOGGED IN", req.user);
//     res.send({
//       username: req.user.username,
//     });
//   }
// );

module.exports = router;
