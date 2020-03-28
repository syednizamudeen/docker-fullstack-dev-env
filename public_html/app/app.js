const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
// const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

// Constants
const HOST = "0.0.0.0";
const PORT = 3000;

mongoose.promise = global.Promise;

// App
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: "passport-tutorial",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

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

require("./models/User");
require("./config/passport");
app.use(require("./routes"));

app.get("/", (req, res) => {
  res.send("Hello World with Express\n");
});

// let apiRoutes = require("./api-routes");
// app.use("/api", apiRoutes);

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
