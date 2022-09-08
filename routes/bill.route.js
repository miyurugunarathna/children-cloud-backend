import express from "express";
import {
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const billRouter = express.Router();

billRouter.post("/add", saveBillController);
billRouter.get("/", getBillController);
billRouter.get("/:id", getBillByIdController);
billRouter.put("/:id", updateBillController);
billRouter.delete("/:id", deleteBillController);

export default billRouter;
