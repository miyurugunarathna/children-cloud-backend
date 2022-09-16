import mongoose from "mongoose";

const { Schema } = mongoose;

const assignStaffSchema = new Schema(
  {
    childID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    staff: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true, versionKey: false },
);

export const AssignStaff = mongoose.model("AssignStaff", assignStaffSchema);
