import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import employeeRouter from "./employeeReg.route.js";
import AttendanceRoute from "./attendance.route.js";
import eventRouter from "./event.route.js";
import scheduleRouter from "./schedule.route.js";
import childRouter from "./child.route.js";
import AssignStaffRouter from "./assignStaff.route.js";
import paymentRoute from "./payment.route.js";
import billRouter from "./bill.route.js";
import itemRouter from "./item.route.js";
import BabySitterRouter from "./childAllocate.route.js";
import paymentInqRouter from "./paymentInquery.route.js";
import salaryGroupRouter from "./salaryGroup.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/employee", employeeRouter);
apiRouter.use("/attendance", AttendanceRoute);
apiRouter.use("/events", eventRouter);
apiRouter.use("/schedule", scheduleRouter);
apiRouter.use("/child", childRouter);
apiRouter.use("/assign", AssignStaffRouter);
apiRouter.use("/payment", paymentRoute);
apiRouter.use("/bill", billRouter);
apiRouter.use("/item", itemRouter);
apiRouter.use("/babySitter", BabySitterRouter);
apiRouter.use("/paymentInq", paymentInqRouter);
apiRouter.use("/salaryGroup", salaryGroupRouter);

export default apiRouter;
