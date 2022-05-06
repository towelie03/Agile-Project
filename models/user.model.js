import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  });

const userModel = new mongoose.model('User', userSchema)

export default userModel

