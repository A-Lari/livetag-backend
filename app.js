var express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const participantsRouter = require("./routes/participants");
const authRouter = require("./routes/auth");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/participants", participantsRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
