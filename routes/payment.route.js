import express from "express";
import {
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const paymentRouter = express.Router();

paymentRouter.post("/add", savePaymentController);
paymentRouter.get("/", getPaymentController);
paymentRouter.get("/:id", getPaymentByIdController);

export default paymentRouter;
