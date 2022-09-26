import express from "express";
import initAPIRoute from "./routes/api";
import { authRouter } from "../src/auth/auth.routes";
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = 8797;

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// initAPIRoute(app);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});

export default app;
