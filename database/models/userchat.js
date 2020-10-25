// UserChat Schema
const userChatSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },

    message: {
      type: String,
    },
    sender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserChat = mongoose.model("UserChat", userChatSchema);

module.exports = UserChat;
