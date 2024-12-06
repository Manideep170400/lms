import { Router } from "express";
import jwtMiddleware from "../../middelware.mjs";

import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/courses.mjs";

const router = Router();

router.post("/create", createUser);

// Example route (GET method)
router.get("/", jwtMiddleware, getUser);

// Update (PUT method)
router.put("/:id", updateUser);

// Delete (DELETE method)
router.delete("/:id", deleteUser);

export default router;
