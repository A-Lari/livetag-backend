var express = require("express");
var router = express.Router();

const Participant = require("../models/Participants");
const Role = require("../models/Roles");
const Event = require("../models/Events");
const Activities = require("../models/Activities");

const roleController = require("../controllers/Role");

const { checkAuth } = require("./checkAuth");
const checkBeforeDeleteRole = require("../middlewares/checkBeforeDeleteRole")

router.post("/", checkAuth, roleController.createRole);
router.get("/", checkAuth, roleController.getRoles);
router.get("/:idRole", checkAuth, roleController.getRole);
router.delete("/:idRole", checkAuth, checkBeforeDeleteRole, roleController.deleteRole);
router.post("/:idRole", checkAuth, roleController.updateRole);
router.get("/activities/:id/count", checkAuth, roleController.countRolesByActivity);

module.exports = router;
