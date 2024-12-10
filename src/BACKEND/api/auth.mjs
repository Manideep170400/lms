import { Router } from "express";
import { encode } from "../jwt/index.mjs";
import { errorHandler } from "../utils/error.mjs";
import initSchema from "../schema/index.mjs";
import { comparePassword } from "../bycrypt/index.mjs";

const schema = initSchema();
const router = Router();

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    let exist = await schema.User.findOne({ email });
    if (!exist) {
      return errorHandler(res, "User not found", 404);
    }

    const isMatch = await comparePassword(password, exist.password);
    if (!isMatch) {
      return errorHandler(res, "Invalid credentials", 401);
    }
    let payload = {
      user: {
        id: exist._id,
        role: exist.role,
      },
    };
    const token = encode(payload);
    return res.status(200).json({ token });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
