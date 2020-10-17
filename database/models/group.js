// Group Models
const groupSchema = new Schema({
  name: { type: String },
  is_active: { type: Boolean },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
