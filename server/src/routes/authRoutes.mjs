import express from "express";
const router = express.Router();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import test from "../controllers/autnController.mjs";




// middleware
router.use(cors({
  credentials: true,
  origin: process.env.CLIENT_MAIN_API_URL, // CLient
}));

router.get("/", test);

export default router;
