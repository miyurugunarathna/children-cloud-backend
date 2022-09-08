import { saveUser, loginUser, getUser } from "./user.repository.js";
import {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
} from "./medicine.repository.js";

import {
  savePayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} from "./payment.repository.js";

import {
  saveBill,
  getBill,
  getBillById,
  updateBill,
  deleteBill,
} from "./bill.repository.js";

export {
  saveUser,
  loginUser,
  getUser,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
  savePayment,
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  saveBill,
  getBill,
  getBillById,
  updateBill,
  deleteBill,
};
