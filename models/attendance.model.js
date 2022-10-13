import mongoose from "mongoose";

const { Schema } = mongoose;

const attSchema = new Schema(
  {
    EmpID: {
      type: String,
      required: true,
    },

    INtime: {
      type: String,
      required: true,
    },
    OUTtime: {
      type: String,
      required: true,
    },
    TotalHrs: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Attendance = mongoose.model("Attendance", attSchema);
