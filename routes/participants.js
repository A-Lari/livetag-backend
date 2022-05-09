var express = require("express");
var router = express.Router();

const Participant = require("../models/Participants");
const Role = require("../models/Roles");
const Event = require("../models/Events");
const Activities = require("../models/Activities");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Participant.find()
    .populate(["role", "optional_activities", "event"])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
