import mongoose from "mongoose";
const { Schema } = mongoose;


const userModel = new Schema({
    uname: { 
      type: String, 
      required: true,
      minlength: 5,
      maxlength: 15,
      unique: true
    }
  });


export { userModel };

