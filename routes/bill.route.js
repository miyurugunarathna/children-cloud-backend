import express from "express";
import {
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
  getBillByChildIdController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const billRouter = express.Router();

billRouter.post("/add", saveBillController);
billRouter.get("/", getBillController);
billRouter.get("/:id", getBillByIdController);
billRouter.get("/child/:id", getBillByChildIdController);
billRouter.put("/:id", updateBillController);
billRouter.delete("/:id", deleteBillController);

export default billRouter;
