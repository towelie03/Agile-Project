import mongoose from "mongoose";
const { Schema } = mongoose;


const timerModel = new Schema({
    study: {type: Number},
    short: {type: Number},
    long: {type: Number},
  });

const timer = mongoose.model("timers", timerModel)

export { timer };

