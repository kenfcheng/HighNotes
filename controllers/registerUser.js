// Database API key can be found in Settings tab in Database
const databaseId = "KaraokeBuddydb";
const username = request.get("username");
const password = request.get("password");
const email = request.get("email");

// create user
const userLoginInfo = DatabaseUser.signUp(databaseId, {
  username: username,
  password: password,
});

// create UserProfile
const userProfileInfo = Collection.createObject(databaseId, "UserProfile", {
  email: email,
  username: username,
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
