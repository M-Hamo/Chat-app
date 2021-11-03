//  Cheeks which server we are
process.env.NODE_ENV !== "production" && require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());

require("./Controllers/socket");

app.get("/", (req, res) => {
  res.send(`<h1>Chat app running...<h1/>`);
});

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
