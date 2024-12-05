import jwt from "jsonwebtoken";

const SECRET_KEY = "jwtSecurity";
const JWT_EXPIRES_IN = "1h";

export const encode = (payload) => {
  jwt.sign(payload, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN }, (err, token) => {
    if (err) throw err;
    return token;
  });
};

export const decode = (token) => jwt.verify(token, SECRET_KEY);
