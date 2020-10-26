const moment = require("moment");

function messageFormatter(username, text) {
  return {
    // username: username is the same as below
    username,
    text, // the message text
    time: moment().format("HH:mm"),
  };
}

module.exports = messageFormatter;
