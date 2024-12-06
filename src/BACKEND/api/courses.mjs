import { Router } from "express";
import initSchema from "../schema/index.mjs";
import { authorize } from "../authorize/index.mjs";
import { errorHandler } from "../utils/error.mjs";

const schema = initSchema();
const router = Router();

router.get(
  "/courses",
  authorize(["student", "instructor", "admin"]),
  async (req, res) => {
    try {
      const response = await schema.User.find();
      res.send(response);
    } catch (error) {
      console.error("error", error);
      return errorHandler(res, "Internal Server Error", 400);
    }
  }
);
router.post(
  "/courses",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      const response = await schema.create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      return errorHandler(res, "Internal Server Error", 400);
    }
  }
);
router.put(
  "/courses/:id",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      const response = await schema.User.updateMany(req.body.id);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      return errorHandler(res, "Internal Server Error", 400);
    }
  }
);
router.delete("/courses/:id", authorize(["admin"]), async (req, res) => {
  try {
    const response = await schema.User.deleteOne(req.params.id);
    res.send(response);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
});
export default router;
