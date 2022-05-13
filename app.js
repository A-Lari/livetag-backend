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
const activitiesRouter = require("./routes/activities");
const authRouter = require("./routes/auth");
const eventsRouter = require("./routes/events");
const roleRouter = require("./routes/roles");
const mobileRouter = require("./routes/mobile");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/participants", participantsRouter);
app.use("/activities", activitiesRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/roles", roleRouter);
app.use("/mobile", mobileRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
