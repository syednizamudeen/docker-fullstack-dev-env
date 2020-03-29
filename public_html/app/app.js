const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const contactRouter = require("./routers/contact");
const bodyParser = require("body-parser");

const HOST = "0.0.0.0";
const PORT = 3000;

const app = express();

mongoose
  .connect("mongodb://mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    user: "root",
    pass: "rootpassword",
    dbName: "app-demo"
  })
  .catch(function(reason) {
    console.log("Unable to connect to the mongodb instance. Error: ", reason);
  });

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", contactRouter);

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
