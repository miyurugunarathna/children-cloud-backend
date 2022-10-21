import { SalaryGroup } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveSalaryGroup = (data) =>
  SalaryGroup.create(data)
    .then((salaryGroup) => {
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getSalaryGroup = () =>
  SalaryGroup.find({})
    .then((salaryGroup) => {
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getSalaryGroupById = (id) =>
  SalaryGroup.findById(id)
    .then((salaryGroup) => {
      if (!salaryGroup) {
        throw new AppError("SalaryGroup Details not Found", 404);
      }
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getSalaryGroupByStaffId = (id) =>
  SalaryGroup.find({ staffId: id })
    .then((salaryGroup) => {
      if (!salaryGroup) {
        throw new AppError("SalaryGroup Details not Found", 404);
      }
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const updateSalaryGroup = (id, data) =>
  SalaryGroup.findByIdAndUpdate(id, data, { new: true })
    .then((salaryGroup) => {
      if (!salaryGroup) {
        throw new AppError("SalaryGroup Details not Found", 404);
      }
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const deleteSalaryGroup = (id) =>
  SalaryGroup.findByIdAndDelete(id)
    .then((salaryGroup) => {
      if (!salaryGroup) {
        throw new AppError("SalaryGroup Details not Found", 404);
      }
      return Promise.resolve(salaryGroup);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
