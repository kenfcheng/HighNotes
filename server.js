const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const messageFormatter = require("./messages");
const {
  addUser,
  findCurrentUser,
  userExits,
  findUsersInRoom,
} = require("./controllers/users");

const mongooseConnection = require("./database");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const optimus = "ChatRoom Admin";

// Run when a client connects, to the single client
io.on("connection", (socket) => {
  socket.on("pickRoom", ({ username, room }) => {
    const user = addUser(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", messageFormatter(optimus, "Welcome to ChatRoom!"));

    // Broadcast when a user connects: emits to everyone except the user connecting
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        messageFormatter(optimus, `${user.username} has Joined the chat`)
      );

    // list users and rooms in use to left on the panel-
    io.to(user.room).emit("usersInRoom", {
      room: user.room,
      users: findUsersInRoom(user.room),
    });
  });

  // Listen for chatMessage, access to msg as parameter
  socket.on("chatMessage", (msg) => {
    const user = findCurrentUser(socket.id);
    // console.log(msg);
    io.to(user.room).emit("message", messageFormatter(user.username, msg));
  });
  // When client disconnects, must be inside function
  socket.on("disconnect", () => {
    const user = userExits(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        messageFormatter(optimus, `${user.username} has left the chat`)
      );
      // list users and rooms in use
      // this time updating that a user has left
      io.to(user.room).emit("usersInRoom", {
        room: user.room,
        users: findUsersInRoom(user.room),
      });
    }
  });
});

// Sessions
app.use(
  session({
    secret: "RANDOM STRING",
    store: new MongoStore({
      mongooseConnection,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// User Profile
app.post("/api", (req, res) => {
  console.log(req);
});

// Pictures
app.post("api/image-upload", (req, res) => {
  console.log(req);
});
