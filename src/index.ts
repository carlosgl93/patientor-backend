import express from "express";
const cors = require("cors");
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  console.log(_req.get("Content-Type"));
  res.send("<h1>pong</h1");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`SERVER LISTENNING ON PORT ${PORT}`);
});
