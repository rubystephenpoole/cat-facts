import express from "express";
import morgan from "morgan";
import { routes } from "./routes";

const bodyParser = require("body-parser");
const cors = require("cors");
const { errors } = require("celebrate");
const app = express();

// don't do this in production, allows self-signed ssl
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.all("*", (req, res) => res.status(404).end());
app.use(errors());
app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`);
});
