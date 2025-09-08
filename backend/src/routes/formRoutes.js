import express from "express";
import { createForm, generateAIForm } from "../controllers/formController.js";

const router = express.Router();

router.post("/generate", generateAIForm); // AI form generation
router.post("/create", createForm);       // Save form to DB

export default router;
