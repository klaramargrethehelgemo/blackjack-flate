const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

// CORS for react app, port 3000
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// bruk middleware for static images
app.use(express.static("public"));

// les kortstokk fra fil
app.get("/", (req, res) => {
  res.send("Hello world!");
});

if (require.main === module) {
  app.listen(3030, () =>
    console.log("Blackjack server listening on port 3030!")
  );
}

module.exports = app;
