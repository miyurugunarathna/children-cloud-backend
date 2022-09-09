import mongoose from "mongoose";

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    childId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Item = mongoose.model("Item", ItemSchema);
