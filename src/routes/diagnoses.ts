import express from "express";
import diagnosesService from "../services/diagnoses";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(diagnosesService.getSensitiveAll());
});

router.post("/", (_req, res) => {
  res.send("new diagnoses to be soon");
});

export default router;
