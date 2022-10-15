import mongoose from "mongoose";

const { Schema } = mongoose;

const attSchema = new Schema({
  EmpID: {
    type: String,
    required: true,
  },

  Status: {
    type: String,
    required: true,
  },
  Reason: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});

export const Attendance = mongoose.model("Attendance", attSchema);
