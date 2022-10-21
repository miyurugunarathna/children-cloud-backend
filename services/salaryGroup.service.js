import {
  saveSalaryGroup,
  getSalaryGroup,
  getSalaryGroupById,
  getSalaryGroupByStaffId,
  updateSalaryGroup,
  deleteSalaryGroup,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveSalaryGroupService = async (data) => {
  const { groupName, salaryRate, staffId, status } = data;
  try {
    const salaryGroup = await saveSalaryGroup({
      groupName,
      salaryRate,
      staffId,
      status,
    });
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupService = async () => {
  try {
    const salaryGroup = await getSalaryGroup();
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByIdService = async (id) => {
  try {
    const salaryGroup = await getSalaryGroupById(id);
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSalaryGroupByStaffIdService = async (id) => {
  try {
    const salaryGroup = await getSalaryGroupByStaffId(id);
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateSalaryGroupService = async (id, data) => {
  try {
    const salaryGroup = await updateSalaryGroup(id, data);
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteSalaryGroupService = async (id) => {
  try {
    const salaryGroup = await deleteSalaryGroup(id);
    return Promise.resolve(salaryGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
