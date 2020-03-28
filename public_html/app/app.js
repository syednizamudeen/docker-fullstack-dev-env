"use strict";
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");

// Constants
const HOST = "0.0.0.0";
const PORT = 3000;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World with Express\n");
});

mongoose
  .connect("mongodb://mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: "root",
    pass: "rootpassword",
    dbName: "app-demo"
  })
  .catch(function(reason) {
    console.log("Unable to connect to the mongodb instance. Error: ", reason);
  });

let db = mongoose.connection;

if (!db) console.error("Error connecting db");
else console.log("Db connected successfully");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

let apiRoutes = require("./api-routes");
app.use("/api", apiRoutes);

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
