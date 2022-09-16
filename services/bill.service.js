import {
  saveBill,
  getBill,
  getBillById,
  updateBill,
  deleteBill,
  getBillByChildId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveBillService = async (data) => {
  const { billName, childId, item, totalBill, status } = data;
  try {
    const bill = await saveBill({
      billName,
      childId,
      item,
      totalBill,
      status,
    });
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillService = async () => {
  try {
    const bill = await getBill();
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillByChildIdService = async (id) => {
  try {
    const bill = await getBillByChildId(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillByIdService = async (id) => {
  try {
    const bill = await getBillById(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateBillService = async (id, data) => {
  try {
    const bill = await updateBill(id, data);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteBillService = async (id) => {
  try {
    const bill = await deleteBill(id);
    return Promise.resolve(bill);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
