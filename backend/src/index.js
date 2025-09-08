import 'dotenv/config'; // This auto-loads the .env file into process.env
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();
console.log("Loaded API Key:", process.env.OPENAI_API_KEY ? "YES" : "NO");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
  res.send("AI Form Builder Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
