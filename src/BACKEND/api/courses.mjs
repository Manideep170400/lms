import { Router } from "express";
import { authorize } from "../authorize/index.mjs";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.mjs";
import jwtMiddleware from "../../middelware.mjs";

const router = Router();

router.get("/courses", jwtMiddleware, authorize, getCourses);
router.post("/courses", authorize, createCourse);
// router.put("/courses/:id", authorize(["instructor", "admin"]), updateCourse);
// router.delete("/courses/:id", authorize(["admin"]), deleteCourse);
export default router;
