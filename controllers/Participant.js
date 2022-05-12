const ParticipantModel = require("../models/Participants");
const Role = require("../models/Roles");
const Event = require("../models/Events");
const Activities = require("../models/Activities");

/* GET  */
const participants = {
  getAllParticipants(req, res) {
    ParticipantModel.find()
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error getAll participant:", error);
        res.sendStatus(500);
      });
  },

  getOneParticipant(req, res) {
    ParticipantModel.findById(req.params.id)
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error getOne participant:", error);
        res.sendStatus(500);
      });
  },
  getParticipantByName(req, res) {
    ParticipantModel.find({
      firstname: req.params.firstname,
      lastname: req.params.lastname,
    })
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error getByName participant:", error);
        res.sendStatus(500);
      });
  },
  getParticipantByEmail(req, res) {
    ParticipantModel.find({
      email: req.params.email,
    })
      .populate(["role", "optional_activities", "event"])
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error getByName participant:", error);
        res.sendStatus(500);
      });
  },

  /* POST */
  createParticipant(req, res) {
    const {
      firstname,
      lastname,
      email,
      telephone,
      role,
      optional_activities,
      event,
    } = req.body;

    const newParticipant = new ParticipantModel({
      firstname,
      lastname,
      email,
      telephone,
      role,
      optional_activities,
      event,
    });

    ParticipantModel.create(newParticipant)
      .then(() => {
        res.send(`Participant created`);
      })
      .catch((error) => {
        console.log("Error create participant : ", error);
        res.sendStatus(500);
      });
  },

  /* PUT */
  updateParticipant(req, res) {
    const {
      firstname,
      lastname,
      email,
      telephone,
      role,
      optional_activities,
      event,
    } = req.body;

    const updateData = {
      firstname,
      lastname,
      email,
      telephone,
      role,
      optional_activities,
      event,
    };
    console.log(updateData);
    ParticipantModel.findByIdAndUpdate(req.params.id, updateData)
      .then(() => {
        res.send(`Participant updated`);
      })
      .catch((error) => {
        console.log("Error create participant : ", error);
        res.sendStatus(500);
      });
  },

  /* DELETE */
  deleteParticipant(req, res) {
    ParticipantModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.send(`Participant deleted`);
      })
      .catch((error) => {
        console.log("Error delete participant : ", error);
        res.sendStatus(500);
      });
  },

  /* COUNT */
  countParticipantsByRole(req, res) {
    const idRole = req.params.id;
    if (!idRole || idRole === "") return res.sendStatus(400);
    const query = {role: idRole};
    console.log("countParticipantsByRole :: query=", query)
    ParticipantModel.countDocuments(query)
      .then((count) => {
        console.log(count)
        res.send(String(count));
      })
      .catch((error) => {
        console.log("Error countParticipantsByRole", error);
        res.sendStatus(500);
      });
  },

};

module.exports = participants;
