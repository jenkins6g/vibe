const express = require("express");

const app = express();
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ Hello: "World!" });
});

app.listen(PORT);
