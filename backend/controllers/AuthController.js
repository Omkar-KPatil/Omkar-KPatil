const User = require("../models/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log(" Signup request received:", req.body);
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res.status(400).json({ message: "All fields are required" });
      }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(" Hashed Password:", hashedPassword);

    const newUser = await User.create({ 
        email, 
        username, 
        password: hashedPassword, // Store hashed password
      });

      console.log(" User created successfully:", newUser);
  
      //  Generate token
      const token = createSecretToken(newUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      res.status(201).json({ message: "User signed up successfully", success: true, user: newUser });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
};
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }}