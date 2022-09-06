import mongoose from "mongoose";

const { Schema } = mongoose;

const empSchema = new Schema({
  empID: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  recruitDate: {
    type: Date,
    required: false,
  },
  image: {
    type: String,
    required: false,
    data: Buffer,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export const Employee = mongoose.model("Employee", empSchema);