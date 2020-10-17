// Database API key can be found in Settings tab in Database
const databaseId = "KaraokeBuddydb";
const username = request.get("username");
const password = request.get("password");

const userLoginInfo = DatabaseUser.login(databaseId, username, password);

const user = DatabaseUser.retrieve(
  databaseId,
  userLoginInfo._id,
  "to_userProfile",
  userLoginInfo.sessionToken
);

response.success(user, "application/json");
