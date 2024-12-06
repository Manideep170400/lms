import { errorHandler } from "../utils/error.mjs";
import initSchema from "../schema/index.mjs";
import validator from "validator";
import { hashedPassword } from "../bycrypt/index.mjs";

const schema = initSchema();

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const exist = await schema.User.findOne({
      email: req.body.email,
    });

    if (exist) {
      return errorHandler(res, "User already exists");
    }

    if (
      !validator.isEmail(req.body.email) ||
      !validator.isStrongPassword(req.body.password)
    ) {
      console.error("Error in /createUser: Invalid Email and password");
      return errorHandler(res, "Invalid Email and password");
    }

    req.body.password = await hashedPassword(req.body.password);
    const response = await schema.User.create(req.body);
    await response.save();
    res.status(200).send(response);
  } catch (error) {
    console.error("Error in /createUser:", error);
    return errorHandler(res, error);
  }
};
export const getUser = async (req, res) => {
  try {
    const exist = await schema.User.findById(req.user.id);
    if (!exist) {
      return errorHandler(res, "User not found", 404);
    }
    res.send(exist);
  } catch (error) {
    console.error("Error in GET /:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await schema.User.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.send(response);
  } catch (error) {
    console.error("Error in PUT /:id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const response = await schema.User.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    console.error("Error in DELETE /:id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
