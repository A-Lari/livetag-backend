var express = require("express");

const participants = require("../controllers/Participant");
const checkAuth = require("./checkAuth");

var router = express.Router();

/* GET */
router.get("/", participants.getAllParticipants);
//router.get("/", checkAuth, participants.getAllParticipants);
router.get("/:id", participants.getOneParticipant);
//router.get("/:id", checkAuth, participants.getOneParticipant);

module.exports = router;
