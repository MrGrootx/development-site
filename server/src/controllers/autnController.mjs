const test = (req, res) => {
  res.json({
    status: "success",
  });
};

import UserSchema from "../models/user.Schema.mjs";
import { comparePassword, hashPassword } from "../helpers/auth.mjs";

// Register End Poing
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if name entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // Checking if password entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // Checking if email entered
    const exist = await UserSchema.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login End Point
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Checking if email entered
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.json({
        error: "User not found",
      });
    }
    // Checking if password entered
    const match = await comparePassword(password, user.password);
    if (match) {
      return res.json({ msg: "Password work" });
    }
    if (!match) {
      res.json({
        error: "Password do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { test, registerUser, loginUser };
