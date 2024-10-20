import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import router from "./application/routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// Routes
app.use(router);

export default app;
