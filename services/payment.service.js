import {
  savePayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getPaymentByBillId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const savePaymentService = async (data) => {
  const { paymentName, paymentType, paymentAmount, billId, paymentStatus } =
    data;
  try {
    const payment = await savePayment({
      paymentName,
      paymentType,
      paymentAmount,
      billId,
      paymentStatus,
    });
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentService = async () => {
  try {
    const payment = await getPayment();
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentByIdService = async (id) => {
  try {
    const payment = await getPaymentById(id);
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentByBillIdService = async (id) => {
  try {
    const payment = await getPaymentByBillId(id);
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updatePaymentService = async (id, data) => {
  try {
    const payment = await updatePayment(id, data);
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deletePaymentService = async (id) => {
  try {
    const payment = await deletePayment(id);
    return Promise.resolve(payment);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
