import express from "express";
import {
  saveChildController,
  updateChildController,
  deleteChildController,
  getChildsController,
  getAllChildsController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const childRouter = express.Router();

childRouter.post("/", authenticate, saveChildController);
childRouter.delete("/:id", deleteChildController);
childRouter.put("/:id", updateChildController);
childRouter.get("/", authenticate, getChildsController);
childRouter.get("/all", getAllChildsController);

export default childRouter;
