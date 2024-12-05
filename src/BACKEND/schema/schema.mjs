import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const login = () => {
  const CreateUser = mongoose.model("create", createSchema);
  return {
    CreateUser,
  };
};

export default login;
