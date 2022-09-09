import {
  saveItemService,
  getItemService,
  getItemByIdService,
  updateItemService,
  deleteItemService,
  getItemByChildIdService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveItemController = async (req, res) => {
  try {
    const bill = await saveItemService(req.body);
    res.json(Success(bill, "Item Creation Successfull"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getItemController = async (req, res) => {
  try {
    const bill = await getItemService();
    res.json(Success(bill, "Fetched Item Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getItemByIdController = async (req, res) => {
  try {
    const billId = req.params.id;
    const bill = await getItemByIdService(billId);
    res.json(Success(bill, "Fetched Item Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getItemByChildIdController = async (req, res) => {
  try {
    const childId = req.params.id;
    const bill = await getItemByChildIdService(childId);
    res.json(Success(bill, "Fetched Item Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateItemController = async (req, res) => {
  try {
    const bill = await updateItemService(req.params.id, req.body);
    res.json(Success(bill, "Successfully Item Details Updated"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteItemController = async (req, res) => {
  try {
    const bill = await deleteItemService(req.params.id);
    res.json(Success(bill, "Successfully Item Details Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
