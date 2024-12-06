import { errorHandler } from "../utils/error.mjs";

export const authorize = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role) {
    next();
  } else {
    return errorHandler(res, "unauthorized", 404);
  }
};
