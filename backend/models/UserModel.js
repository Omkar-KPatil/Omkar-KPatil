const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true ,"Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true ,"Username is required"],
  },
  password: {
    type: String,
    required: [true ,"Password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  
  module.exports = mongoose.model("User", userSchema);