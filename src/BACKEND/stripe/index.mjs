import stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripeSecretKey = process.env.stripe_Private_key;
if (!stripeSecretKey) {
  throw new Error("Stripe secret key not found in environment variables");
}

export default stripe(stripeSecretKey);
