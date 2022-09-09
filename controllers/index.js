import { saveUser, loginUser } from "./user.controller.js";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
} from "./medicine.controller.js";

import {
  saveEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  getAllEmployeeController,
} from "./employeeReg.controller.js";

import {
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
} from "./attendance.controller.js";

import {
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
  getPaymentByBillIdController,
} from "./payment.controller.js";

import {
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
  getBillByChildIdController,
} from "./bill.controller.js";

import {
  saveItemController,
  getItemController,
  getItemByIdController,
  updateItemController,
  deleteItemController,
  getItemByChildIdController,
} from "./item.controller.js";

export {
  saveUser,
  loginUser,
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
  saveEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  getAllEmployeeController,
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  getPaymentByBillIdController,
  updatePaymentController,
  deletePaymentController,
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
  getBillByChildIdController,
  saveItemController,
  getItemController,
  getItemByIdController,
  updateItemController,
  deleteItemController,
  getItemByChildIdController,
};
