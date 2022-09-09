import express from "express";
import {
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
  getPaymentByBillIdController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const paymentRouter = express.Router();

paymentRouter.post("/add", savePaymentController);
paymentRouter.get("/", getPaymentController);
paymentRouter.get("/:id", getPaymentByIdController);
paymentRouter.get("/bill/:id", getPaymentByBillIdController);
paymentRouter.put("/:id", updatePaymentController);
paymentRouter.delete("/:id", deletePaymentController);

export default paymentRouter;
