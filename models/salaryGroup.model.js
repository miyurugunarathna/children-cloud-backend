import mongoose from "mongoose";

const { Schema } = mongoose;

const SalaryGroupSchama = new Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    salaryRate: {
      type: Number,
      required: true,
    },
    staffId: {
      type: Array,
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const SalaryGroup = mongoose.model("SalaryGroup", SalaryGroupSchama);
