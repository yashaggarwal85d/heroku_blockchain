const mongoose = require("mongoose");
const ProfilePicUrl =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  phone: {
    type: String,
    required: true,
    min: 13,
    max: 20,
  },
  password: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  rooms_id: [String],
  profile_pic: {
    type: String,
    default: ProfilePicUrl,
  },
  status: {
    type: String,
    default: "Hello there",
  },
});

module.exports = mongoose.model("user", UserSchema);
