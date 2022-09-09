import express from "express";
import {
  saveItemController,
  getItemController,
  getItemByIdController,
  updateItemController,
  deleteItemController,
  getItemByChildIdController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const itemRouter = express.Router();

itemRouter.post("/add", saveItemController);
itemRouter.get("/", getItemController);
itemRouter.get("/:id", getItemByIdController);
itemRouter.get("/child/:id", getItemByChildIdController);
itemRouter.put("/:id", updateItemController);
itemRouter.delete("/:id", deleteItemController);

export default itemRouter;
