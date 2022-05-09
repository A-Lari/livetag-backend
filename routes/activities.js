var express = require("express");
var router = express.Router();
const ActivityModel = require("../models/Activities");

/* GET activities page. */
router.get("/", function (req, res) {
  ActivityModel.find().then((result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
