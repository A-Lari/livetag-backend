let express = require("express");
let router = express.Router();
const EventsModel = require("../models/Events");
const { checkAuth } = require("./checkAuth");

/* POST events. */
router.post("/", checkAuth, function (req, res) {
  const { event_name, start_date, end_date, place, description, code } =
    req.body;
  if (!event_name || !start_date || !end_date || !place || !description)
    return res.sendStatus(400);
  EventsModel.create({
    event_name,
    start_date,
    end_date,
    place,
    description,
    code,
    user: req.user._id,
  })
    .then(() => {
      console.log("Succesfully sent to DB");
      res.send("Client bien reçu en DB");
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

/* GET events listing. */
router.get("/", checkAuth, function (req, res, next) {
  EventsModel.find().then((result) => {
    res.send(result);
  });
});

module.exports = router;
