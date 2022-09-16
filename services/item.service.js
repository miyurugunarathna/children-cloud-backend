import {
  saveItem,
  getItem,
  getItemById,
  updateItem,
  deleteItem,
  getItemByChildId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveItemService = async (data) => {
  const { itemName, childId, quantity, unitPrice, status } = data;
  try {
    const bill = await saveItem({
      itemName,
      childId,
      quantity,
      unitPrice,
      status,
    });
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getItemService = async () => {
  try {
    const bill = await getItem();
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getItemByChildIdService = async (id) => {
  try {
    const bill = await getItemByChildId(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getItemByIdService = async (id) => {
  try {
    const bill = await getItemById(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateItemService = async (id, data) => {
  try {
    const bill = await updateItem(id, data);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteItemService = async (id) => {
  try {
    const bill = await deleteItem(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
