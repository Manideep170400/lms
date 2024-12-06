import { errorHandler } from "../utils/error.mjs";
import initSchema from "../schema/index.mjs";

const schema = initSchema();
export const getCourses = async (req, res) => {
  try {
    const response = await schema.User.find();
    res.send(response);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
};

export const createCourse = async (req, res) => {
  try {
    const response = await schema.create(req.body);
    res.send(response);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const response = await schema.User.updateMany(req.body.id);
    res.send(response);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const response = await schema.User.deleteOne(req.params.id);
    res.send(response);
  } catch (error) {
    console.error("error", error);
    return errorHandler(res, "Internal Server Error", 400);
  }
};
