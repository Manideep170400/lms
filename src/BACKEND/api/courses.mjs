import { Router } from "express";
import initSchema from "../schema/index.mjs";
import { authorize } from "../authorize/index.mjs";

const schema = initSchema();
const router = Router();

router.get(
  "/courses",
  authorize(["student", "instructor", "admin"]),
  async (req, res) => {
    res.send("/courses");
    try {
    } catch (error) {}
  }
);
router.post(
  "/courses",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
    } catch (error) {}
  }
);
router.put(
  "/courses/:id",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
    } catch (error) {}
  }
);
router.delete(
  "/courses/:id",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
    } catch (error) {}
  }
);
export default router;
