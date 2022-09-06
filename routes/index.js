import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import employeeRouter from "./employeeReg.route.js";
import AttendanceRoute from "./attendance.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/employee", employeeRouter);
apiRouter.use("/attendance", AttendanceRoute);

export default apiRouter;
