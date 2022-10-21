import {
  saveSalaryGroupService,
  getSalaryGroupService,
  getSalaryGroupByIdService,
  getSalaryGroupByStaffIdService,
  updateSalaryGroupService,
  deleteSalaryGroupService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveSalaryGroupController = async (req, res) => {
  try {
    const salaryGroup = await saveSalaryGroupService(req.body);
    res.json(Success(salaryGroup, "SalaryGroup Successfull"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSalaryGroupController = async (req, res) => {
  try {
    const salaryGroup = await getSalaryGroupService();
    res.json(Success(salaryGroup, "Fetched SalaryGroup Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSalaryGroupByIdController = async (req, res) => {
  try {
    const SalaryGroupId = req.params.id;
    const salaryGroup = await getSalaryGroupByIdService(SalaryGroupId);
    res.json(Success(salaryGroup, "Fetched SalaryGroup Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSalaryGroupByStaffIdController = async (req, res) => {
  try {
    const SalaryGroupId = req.params.id;
    const salaryGroup = await getSalaryGroupByStaffIdService(SalaryGroupId);
    res.json(Success(salaryGroup, "Fetched SalaryGroup Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateSalaryGroupController = async (req, res) => {
  try {
    const salaryGroup = await updateSalaryGroupService(req.params.id, req.body);
    res.json(Success(salaryGroup, "Successfully SalaryGroup Details Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteSalaryGroupController = async (req, res) => {
  try {
    const salaryGroup = await deleteSalaryGroupService(req.params.id);
    res.json(Success(salaryGroup, "Successfully SalaryGroup Detail Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
