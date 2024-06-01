const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRouters = require("./routers/feed");

const app = express();

const MONGODB_URI =
  "mongodb+srv://kaixiang82:Kaixiang82@cluster0.i7jg1ce.mongodb.net/messages";

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRouters);

mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(8080))
  .catch((err) => console.log(err));
