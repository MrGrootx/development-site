import express from "express";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

const app = express();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());

import allRoutes from "./routes/authRoutes.mjs";
app.use("/", allRoutes);

const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
