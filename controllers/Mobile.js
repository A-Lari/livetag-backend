const EventsModel = require("../models/Events");
const ParticipantModel = require("../models/Participants");

const MobileController = {
  getEventByCode(req, res) {
    const code = req.params.code;
    console.log("getEventByCode", code);

    EventsModel.findOne({ code }).then((result) => {
      res.send(result);
    });
  },

  getParticipantById(req, res) {
    const idParticipant = req.params.id;
    console.log("getParticipantById", idParticipant);

    ParticipantModel.findById(idParticipant)

      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error getParticipantById :", error);
        res.sendStatus(500);
      });
  },
};

module.exports = MobileController;
