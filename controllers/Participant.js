const ParticipantModel = require("../models/Participants");
const Role = require("../models/Roles");
const Event = require("../models/Events");
const Activities = require("../models/Activities");

/* GET users listing. */
const participants = {
  getAllParticipants(req, res) {
    ParticipantModel.find()
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getOneParticipant(req, res) {
    ParticipantModel.find({ _id: req.params.id })
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};

module.exports = participants;
