var express = require("express");
var router = express.Router();
const ActivitiesModel = require("../models/Activities");
const { checkAuth } = require("./checkAuth");

/* GET activities page and create*/
router.get("/", checkAuth, function (req, res) {
  ActivitiesModel.find().then((result) => {
    console.log(result);
    res.send(result);
  });
});

/*create activity*/
router.post("/", checkAuth, function (req, res) {
  const { activity_name, activity_date, description, price, event } = req.body;

  ActivitiesModel.create({
    activity_name,
    activity_date,
    description,
    price,
    // event: req.event.id,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

/* GET activities par ID */
router.get("/:id", checkAuth, function (req, res) {
  ActivitiesModel.findById(req.params.id).then((result) => {
    console.log(result);
    res.send(result);
  });
});

/* delete activities */
router.delete("/:id", checkAuth, function (req, res) {
  console.log("==========> maj activity");
  const idActivity = req.params.id;
  console.log(idActivity);
  ActivitiesModel.findByIdAndRemove(idActivity).then((result) => {
    console.log("activité supprimé", result);
    res.send("activité supprimé");
  });
});

module.exports = router;
