import { saveUser, loginUser } from "./user.controller.js";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
} from "./medicine.controller.js";

import {
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
} from "./payment.controller.js";

import {
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
} from "./bill.controller.js";

export {
  saveUser,
  loginUser,
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
  saveBillController,
  getBillController,
  getBillByIdController,
  updateBillController,
  deleteBillController,
};
