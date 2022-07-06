/* eslint-env node */

import cors from "cors";
import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3001;

app.use(cors());

app.get("/search/:query", (req, res) => {
  const url = new URL("https://www.thecocktaildb.com/api/json/v1/1/search.php");

  if (req.params.query) {
    url.searchParams.append("s", req.params.query);
  }

  console.warn(url);

  return fetch(url, { method: "GET" })
    .then((s) => {
      return s.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => res.send(e));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
