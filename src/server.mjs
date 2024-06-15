import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getTractorsAround } from "./database.mjs";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

// TODO: do YOUR healthcheck ;)
app.get("/", (_, res) => {
  // a tractor in ascii art
  const healthcheck = `
  Sotracteur: OK
              ______
               |o  |   !
   __          |:\`_|---'-.
  |__|______.-.'_'.-----.|
 (o)(o)------''._.'     (O)
`;
  res.send(healthcheck);
});

app.get("/v1/tractors", (req, res) => {
  res.status(200).send("TODO: implement this endpoint");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
