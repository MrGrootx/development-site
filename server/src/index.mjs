import express from "express";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import allRoutes from "./routes/authRoutes.mjs";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", allRoutes);

const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
