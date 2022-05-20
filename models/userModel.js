import mongoose from "mongoose";
const { Schema } = mongoose;


const userModel = new Schema({
    Username: { type: String, required: true },
    Password: { type: String, required: true }
  });

const User = mongoose.model("users", userModel)

export { User };

