import { Router } from "express";
import jwtMiddleware from "../../middelware.mjs";

import {
  UserCreate,
  getUser,
  // updateUser,
  // UserDelete,
} from "../controllers/user.mjs";

const router = Router();

router.post("/create", UserCreate);

// Example route (GET method)
router.get("/", jwtMiddleware, getUser);

// Update (PUT method)
// router.put("/:id", updateUser);

// // Delete (DELETE method)
// router.delete("/:id", UserDelete);

export default router;
