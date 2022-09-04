import {
  saveChildService,
  updateChildService,
  deleteChildService,
  getChildsService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveChildController = async (req, res) => {
  try {
    const parentID = req.user._id;
    const child = await saveChildService(req.body, parentID);
    res.json(Success(child, " Successfully child Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateChildController = async (req, res) => {
  try {
    const child = await updateChildService(req.params.id, req.body);
    res.json(Success(child, "Successfully child Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteChildController = async (req, res) => {
  try {
    const child = await deleteChildService(req.params.id);
    res.json(Success(child, "Successfully child Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getChildsController = async (req, res) => {
  try {
    const parentID = req.user._id;
    const childs = await getChildsService(parentID);
    res.json(Success(childs, "Successfully childrens fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
