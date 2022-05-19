import mongoose from "mongoose";
const { Schema } = mongoose;


const userModel = new Schema({
    Username: { type: String },
  });

const User = mongoose.model("users", userModel)

export { User };

