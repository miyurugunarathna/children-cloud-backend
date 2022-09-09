import { Item } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveItem = (data) =>
  Item.create(data)
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getItem = () =>
  Item.find({})
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getItemById = (id) =>
  Item.findById(id)
    .then((item) => {
      if (!item) {
        throw new AppError("Item Details not Found", 404);
      }
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getItemByChildId = (id) =>
  Item.find({ childId: id })
    .then((item) => {
      if (!item) {
        throw new AppError("Item Details not Found", 404);
      }
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const updateItem = (id, data) =>
  Item.findByIdAndUpdate(id, data, { new: true })
    .then((item) => {
      if (!item) {
        throw new AppError("Item Details not Found", 404);
      }
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const deleteItem = (id) =>
  Item.findByIdAndDelete(id)
    .then((item) => {
      if (!item) {
        throw new AppError("Item Details not Found", 404);
      }
      return Promise.resolve(item);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
