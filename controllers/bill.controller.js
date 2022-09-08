import {
  saveBillService,
  getBillService,
  getBillByIdService,
  updateBillService,
  deleteBillService,
  getBillByChildIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveBillController = async (req, res) => {
  try {
    const bill = await saveBillService(req.body);
    res.json(Success(bill, "Bill Creation Successfull"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getBillController = async (req, res) => {
  try {
    const bill = await getBillService();
    res.json(Success(bill, "Fetched Bill Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getBillByIdController = async (req, res) => {
  try {
    const billId = req.params.id;
    const bill = await getBillByIdService(billId);
    res.json(Success(bill, "Fetched Bill Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getBillByChildIdController = async (req, res) => {
  try {
    const childId = req.params.id;
    const bill = await getBillByChildIdService(childId);
    res.json(Success(bill, "Fetched Bill Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateBillController = async (req, res) => {
  try {
    const bill = await updateBillService(req.params.id, req.body);
    res.json(Success(bill, "Successfully Bill Details Updated"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteBillController = async (req, res) => {
  try {
    const bill = await deleteBillService(req.params.id);
    res.json(Success(bill, "Successfully Bill Details Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
