import express from "express";
const router = express.Router();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

// Routes import
import { test, registerUser } from "../controllers/autnController.mjs";

// middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_MAIN_API_URL, // CLient
  })
);
// Routes
router.get("/", test);
router.post("/register", registerUser);

export default router;
