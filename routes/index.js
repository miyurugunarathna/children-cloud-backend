import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import paymentRoute from "./payment.route.js";
import billRouter from "./bill.route.js";
import itemRouter from "./item.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/payment", paymentRoute);
apiRouter.use("/bill", billRouter);
apiRouter.use("/item", itemRouter);

export default apiRouter;
