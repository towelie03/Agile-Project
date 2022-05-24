import mongoose from "mongoose";
const { Schema } = mongoose;


const userModel = new Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  study: {type: Number, default:25},
  short: {type: Number, default: 5},
  long: {type: Number, default: 15},
  });

const User = mongoose.model("users", userModel)

export { User };

