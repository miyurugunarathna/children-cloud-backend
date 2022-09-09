import express from "express";
import {
  saveUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.post("/login", loginUser);
userRouter.get("/", authenticate, getUser);
userRouter.put("/", authenticate, updateUser);
userRouter.delete("/", authenticate, deleteUser);

export default userRouter;
