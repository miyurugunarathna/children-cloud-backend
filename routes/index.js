import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import eventRouter from "./event.route.js";
import scheduleRouter from "./schedule.route.js";
import childRouter from "./child.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/events", eventRouter);
apiRouter.use("/schedule", scheduleRouter);
apiRouter.use("/child", childRouter);

export default apiRouter;
