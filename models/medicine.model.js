import mongoose from "mongoose";

const { Schema } = mongoose;

const MedicineSchema = new Schema(
  {
    childID: {
      type: String,
      required: true,
    },
    medicineName: {
      type: String,
      required: true,
    },
    morning: {
      type: String,
      required: true,
    },
    evening: {
      type: String,
      required: true,
    },
    beforAfterMeal: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Medicine = mongoose.model("Medicine", MedicineSchema);
