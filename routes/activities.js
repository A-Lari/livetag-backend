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

/* GET activities par ID */
router.get("/:id", function (req, res) {
  ActivityModel.findById(req.params.id).then((result) => {
    console.log(result);
    res.send(result);
  });
});

/* delete activities */
router.delete("/:id", function (req, res) {
  console.log("==========> maj activities");
  const idActivity = req.params.id;
  console.log(idActivity);
  ActivityModel.findByIdAndRemove(idActivity).then((result) => {
    console.log("activité supprimé", result);
    res.send("activité supprimé");
  });
});

module.exports = router;
