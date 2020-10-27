const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const profileSchema = new Schema({
  username: { type: String, unique: true, required: true },

  email: { type: String, unique: true, required: false },
  state: { type: String, unique: false, required: false },
  city: { type: String, unique: false, required: false },
  country: { type: String, unique: false, required: false },
  aboutMe: { type: String, unique: false, required: false },
  faveSong: { type: String, unique: false, required: false },
  messages: [{ type: Schema.Types.ObjectID, ref: "Message" }],
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
