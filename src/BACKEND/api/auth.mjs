import { Router } from "express";
import { encode } from "../jwt/index.mjs";
import jwtMiddleware from "../../middelware.mjs";
import { errorHandler } from "../utils/error.mjs";
import initSchema from "../schema/index.mjs";

const schema = initSchema();
const router = Router();

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    let exist = await schema.User.findOne({ email });
    if (!exist) {
      return res.status(404).json({ message: "user not found" });
    }
    if (exist.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    let payload = {
      user: {
        id: exist._id,
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
