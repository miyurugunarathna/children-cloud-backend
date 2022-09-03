import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import eventRouter from "./event.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/events", eventRouter);

export default apiRouter;
