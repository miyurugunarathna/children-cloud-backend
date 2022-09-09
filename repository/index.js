import { saveUser, loginUser, getUser } from "./user.repository.js";
import {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
} from "./medicine.repository.js";

import {
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployee,
} from "./employeeReg.repository.js";

import {
  saveAttendance,
  getAttendance,
  getAllAttendance,
} from "./attendance.repository.js";

import {
  savePayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getPaymentByBillId,
} from "./payment.repository.js";

import {
  saveBill,
  getBill,
  getBillById,
  updateBill,
  deleteBill,
  getBillByChildId,
} from "./bill.repository.js";

import {
  saveItem,
  getItem,
  getItemById,
  updateItem,
  deleteItem,
  getItemByChildId,
} from "./item.repository.js";

export {
  saveUser,
  loginUser,
  getUser,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployee,
  saveAttendance,
  getAttendance,
  getAllAttendance,
  savePayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getPaymentByBillId,
  saveBill,
  getBill,
  getBillById,
  updateBill,
  deleteBill,
  getBillByChildId,
  saveItem,
  getItem,
  getItemById,
  updateItem,
  deleteItem,
  getItemByChildId,
};
