import { Router } from "express";
import { authorize } from "../authorize/index.mjs";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.mjs";
const router = Router();

router.get(
  "/courses",
  authorize(["student", "instructor", "admin"]),
  getCourses
);
router.post("/courses", authorize(["instructor", "admin"]), createCourse);
router.put("/courses/:id", authorize(["instructor", "admin"]), updateCourse);
router.delete("/courses/:id", authorize(["admin"]), deleteCourse);
export default router;
