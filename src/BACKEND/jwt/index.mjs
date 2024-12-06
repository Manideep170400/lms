import jwt from "jsonwebtoken";

const SECRET_KEY = "jwtSecurity";
const JWT_EXPIRES_IN = "1h";

export const encode = (payload) => {
  try {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });
  } catch (error) {
    console.error("Error in encode:", error);
  }
};

export const decode = (token) => jwt.verify(token, SECRET_KEY);
