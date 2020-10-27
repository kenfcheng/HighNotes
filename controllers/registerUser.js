// Database API key can be found in Settings tab in Database
const databaseId = "KaraokeBuddydb";
const username = request.get("username");
const password = request.get("password");
const email = request.get("email");
const aboutMe = request.get("aboutMe");
const city = request.get("country");
const state = request.get("state");
const country = request.get("country");
const faveSong = request.get("faveSong");

// create user
const userLoginInfo = DatabaseUser.signUp(databaseId, {
  username: username,
  email: email,
  password: password,
  city: city,
  state: state,
  country: country,
  faveSong: faveSong,
  aboutMe: aboutMe,
});

// create UserProfile
const userProfileInfo = Collection.createObject(databaseId, "UserProfile", {
  email: email,
  username: username,
  city: city,
  state: state,
  country: country,
});

// link
DatabaseUser.update(
  databaseId,
  userLoginInfo._id,
  { to_userProfile: { collName: "UserProfile", _id: userProfileInfo._id } },
  userLoginInfo.sessionToken
);

const user = { username: username, email: email };

response.success(user, "application/json");
