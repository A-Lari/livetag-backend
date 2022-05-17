var express = require("express");
var router = express.Router();

const inscriptionController = require("../controllers/Inscriptions");

router.get("/:idLink", inscriptionController.getInscriptionFromLink);

module.exports = router;
