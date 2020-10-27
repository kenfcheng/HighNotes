const express = require("express");

const router = express.Router();

const User = require("../../database/models/user");
const passport = require("../../passport");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log("User", User);

  User.findOne({ username: username }, (err, user) => {
    console.log("user", user);
    if (err) {
      console.log("User Create Error: ", err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }
    async function addUser() {
      const newUser = new User({
        username: username,
        password: password,
      });

      const savedUser = await User.create(newUser);
      console.log("savedUser", savedUser);
      res.json(savedUser);
    }
    addUser();
  });
});

router.post(
  "/login",
  (req, res, next) => {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("LOGGED IN", req.user);
    res.send({
      username: req.user.username,
    });
  }
);

router.get("/", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).json({ msg: "LOGGED OUT" });
  } else {
    res.status(404).json({ msg: "NO USER TO LOGOUT" });
  }
});

router.get("/messages", (req, res) => {
  User.find({})
    .populate("messages")
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
