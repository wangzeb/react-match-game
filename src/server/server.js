import express from "express";
import config from "server/config";
import morgan from "morgan";
import bodyParser from "body-parser";
import serialize from "serialize-javascript";

import serverRenderer from "renderers/serverRender";
import fs from "fs";
import path from "path";

const app = express();
app.enable("trust proxy");
app.use(morgan("common"));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.locals.serialize = serialize;

try {
  app.locals.gVars = require("../../.reactful.json");
} catch (err) {
  app.locals.gVars = {};
}

app.get("/", async (_, res) => {
  try {
    const vars = await serverRenderer();
    res.render("index", vars);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

app.listen(config.port, config.host, () => {
  fs.writeFileSync(
    path.resolve(".reactful.json"),
    JSON.stringify(
      { ...app.locals.gVars, host: config.host, port: config.port },
      null,
      2
    )
  );
  console.info(`Running on ${config.host}:${config.port}`);
});
