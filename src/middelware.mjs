import jwt from "jsonwebtoken";

const jwtMiddleware = async (req, res, next) => {
  try {
    let token = await req.header("x-auth-token");
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .send(JSON.stringify({ message: "token not found" }));
    }
    let decode = jwt.verify(token, "jwtSecurity");
    if (decode) {
      req.user = decode.user;
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
