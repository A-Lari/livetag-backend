const EventsModel = require("../models/Events");
const ParticipantModel = require("../models/Participants");

const MobileController = {
  getEventByCode(req, res) {
    const code = req.params.code;
    console.log("je suis l'event", code);

    EventsModel.findOne({ code }).then((result) => {
      res.send(result);
    });
  },

  getParticipantById(req, res) {
    const idParticipant = req.params.data._id;
    console.log("je suis le participant", idParticipant);

    ParticipantModel.findOne({ idParticipant }).then((result) => {
      res.send(result);
    });
  },
};

module.exports = MobileController;
