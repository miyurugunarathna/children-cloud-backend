import {
  savePaymentService,
  getPaymentByIdService,
  getPaymentService,
  updatePaymentService,
  deletePaymentService,
  getPaymentByBillIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const savePaymentController = async (req, res) => {
  try {
    const payment = await savePaymentService(req.body);
    res.json(Success(payment, "Payment Successfull"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentController = async (req, res) => {
  try {
    const payment = await getPaymentService();
    res.json(Success(payment, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentByIdController = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await getPaymentByIdService(paymentId);
    res.json(Success(payment, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getPaymentByBillIdController = async (req, res) => {
  try {
    const billId = req.params.id;
    const payment = await getPaymentByBillIdService(billId);
    res.json(Success(payment, "Fetched Payment Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updatePaymentController = async (req, res) => {
  try {
    const payment = await updatePaymentService(req.params.id, req.body);
    res.json(Success(payment, "Successfully Payment Details Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deletePaymentController = async (req, res) => {
  try {
    const payment = await deletePaymentService(req.params.id);
    res.json(Success(payment, "Successfully Payment Detail Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
