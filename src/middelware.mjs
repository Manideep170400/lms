import { decode } from "./BACKEND/jwt/index.mjs";
import { HEADER_AUTH_KEY } from "./BACKEND/constants/index.mjs";

const jwtMiddleware = async (req, res, next) => {
  try {
    let token = await req.header(HEADER_AUTH_KEY);
    // console.log(token);
    if (!token) {
      return res
        .status(401)
        .send(JSON.stringify({ message: "token not found" }));
    }
    let data = decode(token);
    if (data) {
      req.user = data.user;
      next();
    }
  } catch (error) {
    console.error("error", error);
    res
      .status(500)
      .send(JSON.stringify({ message: "invalid token credentials" }));
  }
};
export default jwtMiddleware;
