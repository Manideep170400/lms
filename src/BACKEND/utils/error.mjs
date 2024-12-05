export const errorHandler = (res, data, code = 500) => {
  let msg = data;
  if (typeof data === "object") {
    msg = data.message;
  }
  if (!msg) {
    msg = "Internal Server Error";
  }
  if (code !== 500) {
    return res.status(code).json({ message: msg });
  }
  return res.status(500).json({ message: msg });
};
