/**
 * Handles error responses by sending a JSON response with the appropriate status code and message.
 *
 * @param {object} res - The response object from the Express framework.
 * @param {object|string} data - The error data or message. If an object, the message will be extracted.
 * @param {number} [code=500] - The HTTP status code to use for the response. Defaults to 500.
 */
export const errorHandler = (res, data, code = 500) => {
  console.error("error", data);
  let msg = data;
  if (typeof data === "object") {
    msg = data.message;
  }
  console.log(msg);
  if (!msg) {
    msg = "Internal Server Error";
  }
  if (code !== 500) {
    return res.status(code).json({ message: msg });
  }
  return res.status(500).json({ message: msg });
};
