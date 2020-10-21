const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

const messageSchema = new Schema({
  body: { type: String },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
