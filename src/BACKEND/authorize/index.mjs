import { errorHandler } from "../utils/error.mjs";

const ROUTES_WITH_ROLES = {
  "POST_/api/course/courses": ["instructor", "admin"],
  "GET_/api/course/courses": ["instructor", "admin", "student"],
};

export const authorize = (req, res, next, permissions) => {
  console.log(req.originalUrl, req.method);
  if (
    req.user?.role &&
    ROUTES_WITH_ROLES[req.method + "_" + req.originalUrl]?.includes(
      req.user.role
    )
  ) {
    next();
  } else {
    return errorHandler(res, "unauthorized", 404);
  }
};
