import userroutes from "./user.mjs";
import authroutes from "./auth.mjs";

const api = (app) => {
  console.log("api");

  app.use("/api", authroutes);
  app.use("/api/user", userroutes);
  // app.use("/api/course", []);
};

export default api;
