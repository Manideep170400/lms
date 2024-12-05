import { Router } from "express";
import { encode } from "../jwt/index.mjs";
import jwtMiddleware from "../../middelware.mjs";
import { errorHandler } from "../utils/error.mjs";
import initSchema from "../schema/index.mjs";

const schema = initSchema();
const router = Router();

router.post("/create", async (req, res) => {
  try {
    const exist = await schema.User.findOne({
      email: req.body.email,
    });
    if (exist) {
      return errorHandler(res, "User already exists");
    }
    const response = await schema.User.create(req.body);
    await response.save();
    res.status(201).send(response);
  } catch (error) {
    console.error("Error in /createUser:", error);
    return errorHandler(res, error);
  }
});

// Example route (GET method)
router.get("/", jwtMiddleware, async (req, res) => {
  try {
    const exist = await schema.User.findById(req.user.id);
    if (!exist) {
      return res.status(404).json({ message: "user not found" });
    }
    res.send(exist);
  } catch (error) {
    console.error("Error in GET /:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update (PUT method)
router.put("/:id", async (req, res) => {
  try {
    const response = await schema.User.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.send(response);
  } catch (error) {
    console.error("Error in PUT /:id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete (DELETE method)
router.delete("/:id", async (req, res) => {
  try {
    const response = await schema.User.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    console.error("Error in DELETE /:id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
