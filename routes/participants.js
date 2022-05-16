var express = require("express");

const participants = require("../controllers/Participant");
const { checkAuth } = require("./checkAuth");

var router = express.Router();

/* GET */
router.get("/", participants.getAllParticipants);
//router.get("/", checkAuth, participants.getAllParticipants);
router.get("/:id", participants.getOneParticipant);
//router.get("/:id", checkAuth, participants.getOneParticipant);
router.get("/byname/:firstname/:lastname", participants.getParticipantByName); // NO OK
router.get("/byemail/:email", participants.getParticipantByEmail);
router.get("/byevent/:idEvent", participants.getParticipantByEvent);

/* POST */
router.post("/", participants.createParticipant);

/* PUT */
router.put("/:id", participants.updateParticipant);

/* DELETE */
router.delete("/:id", participants.deleteParticipant);

/* COUNT */
router.get("/roles/:id/count", checkAuth, participants.countParticipantsByRole);

module.exports = router;
