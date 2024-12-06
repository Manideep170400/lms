import { genSalt, hash, compare } from "bcrypt";

export const hashedPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password, hash) =>
  await compare(password, hash);
