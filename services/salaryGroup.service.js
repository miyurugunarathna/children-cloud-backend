import {
  saveSalaryGroup,
  getSalaryGroup,
  getSalaryGroupById,
  getSalaryGroupByBillId,
  getSalaryGroupByPaymentId,
  getSalaryGroupByChildId,
  updateSalaryGroup,
  deleteSalaryGroup,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveSalaryGroupService = async (data) => {
  const {
    SalaryGroupName,
    SalaryGroupType,
    SalaryGroupAmount,
    billId,
    SalaryGroupStatus,
  } = data;
  try {
    const SalaryGroup = await saveSalaryGroup({
      SalaryGroupName,
      SalaryGroupType,
      SalaryGroupAmount,
      billId,
      SalaryGroupStatus,
    });
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupService = async () => {
  try {
    const SalaryGroup = await getSalaryGroup();
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByIdService = async (id) => {
  try {
    const SalaryGroup = await getSalaryGroupById(id);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByBillIdService = async (id) => {
  try {
    const SalaryGroup = await getSalaryGroupByBillId(id);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByPaymentIdService = async (id) => {
  try {
    const SalaryGroup = await getSalaryGroupByPaymentId(id);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByChildIdService = async (id) => {
  try {
    const SalaryGroup = await getSalaryGroupByChildId(id);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateSalaryGroupService = async (id, data) => {
  try {
    const SalaryGroup = await updateSalaryGroup(id, data);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteSalaryGroupService = async (id) => {
  try {
    const SalaryGroup = await deleteSalaryGroup(id);
    return Promise.resolve(SalaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
