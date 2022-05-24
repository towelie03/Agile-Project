import mongoose from "mongoose";
import { User } from "./userModel";
const { Schema } = mongoose;


const timerModel = new Schema({
    Username: { type: String, required: true },
    Password: { type: String, required: true },
    study: {type: Number, default:25},
    short: {type: Number, default: 5},
    long: {type: Number, default: 15},
  });

const timer = mongoose.model("timers", timerModel)

export { timer };

