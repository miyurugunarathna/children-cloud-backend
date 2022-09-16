import mongoose from "mongoose";

const { Schema } = mongoose;

const ChildSchema = new Schema(
  {
    parentID: {
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
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Child = mongoose.model("Child", ChildSchema);
