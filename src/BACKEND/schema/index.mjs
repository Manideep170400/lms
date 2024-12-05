import Userschema from "./user.mjs";

const init = () => {
  console.log("init schema");
  return { User: Userschema };
};

export default init;
