// UserChat Schema
const userChatSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
  },
});

const UserChat = mongoose.model("UserChat", userChatSchema);

module.exports = UserChat;
