//Connect to Mongo database
// const MongoClient = require("mongodb").MongoClient;

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// MongoClient.connnect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err);

//   db = client.db(dbName);
//   console.log("Connected MongoDB: ${url}");
//   console.log("Database: ${dbName}");
// });

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/KaraokeBuddydb")
  .then(
    () => {
      console.log("CONNECTED TO MONGO");
    },
    (err) => {
      console.log("ERROR CONNECTING TO MONGO:", err);
    }
  );

module.exports = mongoose.connection;
