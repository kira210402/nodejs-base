import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: String,
  body: String,
  image: String,
  createAt: Date
})

const User = mongoose.model("User", userSchema);
export default User;
