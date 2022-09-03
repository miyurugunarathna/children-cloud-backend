import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);

export default apiRouter;
