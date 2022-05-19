var express = require("express");
var router = express.Router();

const users = require("../controllers/Users");
const { checkAuth } = require("./checkAuth");

router.get("/", checkAuth, users.getUsers);

router.put("/data", checkAuth, users.putUserUserData);
router.put("/pwd", checkAuth, users.putUserUserPassword);

module.exports = router;
