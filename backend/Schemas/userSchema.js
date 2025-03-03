const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
      },
      username: {
        type: String,
        required: [true, "Your username is required"],
      },
      password: {
        type: String,
        required: [true, "Your password is required"],
      },
      createdAt: {
        type: Date,
        default: new Date(),
      }
})

// module.exports = mongoose.model('User', UserSchema);
module.exports = { UserSchema };