const test = (req, res) => {
  res.json({
    status: "success",
  });
};

import UserSchema from "../models/user.Schema.mjs";

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
        error: "Email is taken",
      });
    }
    const user = await UserSchema.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export { test, registerUser };
