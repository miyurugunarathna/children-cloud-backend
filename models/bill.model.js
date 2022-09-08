import mongoose from "mongoose";

const { Schema } = mongoose;

const BillSchama = new Schema(
  {
    BillName: {
      type: String,
      required: true,
    },
    ChildId: {
      type: String,
      required: true,
    },
    item: {
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

export const Bill = mongoose.model("Bill", BillSchama);
