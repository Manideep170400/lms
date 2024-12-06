import { errorHandler } from "../utils/error.mjs";
import stripe from "../stripe/index.mjs";
const payment = async (req, res) => {
  console.log(req.body);
  try {
    const response = await stripe.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.name,
            },
            unit_amount: req.body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.send(response.url);
    console.log(response.url);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
};

export default payment;
