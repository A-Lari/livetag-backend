let express = require("express");
let router = express.Router();

const mobileController = require("../controllers/Mobile");

/* GET events listing. */
router.get("/:code", mobileController.getEventByCode);

/*Get participant */
router.get("/:idParticipant", mobileController.getParticipantById);

module.exports = router;
