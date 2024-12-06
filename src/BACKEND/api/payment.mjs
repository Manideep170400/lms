import { Router } from "express";
import payment from "../controllers/createCheckoutSession.mjs";

const router = Router();

router.post("/payment", payment);

export default router;
