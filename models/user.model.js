import mongoose from "mongoose";
const { Schema } = mongoose

const userModel = new Schema({
    full_name: String,
    email: String,
    username: String,
    password: String,
  });

export default userModel

