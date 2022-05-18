const RoleModel = require("../models/Roles");
const ParticipantModel = require("../models/Participants");
const API_URL = process.env.API_URL;
const SITE_URL = process.env.SITE_URL;
const dayjs = require("dayjs");
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween);

const inscriptionController = {

  /* Check idlink and redirect to front-end for registration page*/
  getInscriptionFromLink(req, res) {
    res.set('Cache-control', `no-cache`);
    const idLink = req.params.idLink;
    console.log("getInscriptionFromLink", idLink);
    const query = {link: `${API_URL}/inscriptions/${idLink}`};
    console.log("query=", query);
    RoleModel.findOne(query)
      .populate(["event"])
      .then((role) => {
        console.log(role);
        const start = Date.now();
        if(dayjs(start).isBetween(role.event.start_date, role.event.end_date, 'day', '[]')) {
          res.redirect(301, `${SITE_URL}/inscriptions/${idLink}`);
        } else res.status(401).send("La date courante n'est plus incluse dans la période de l'evennement");
      })
      .catch((error) => {
        console.log("Error getInscriptionFromLink", error);
        res.sendStatus(500);
      });
  },

  /* Check idlink and create participant from role inscription page*/
  createInscriptionFromLink(req, res) {
    const { firstname, lastname, email, telephone, optional_activities } = req.body;
    const idLink = req.params.idLink;
    const query = {link: `${API_URL}/inscriptions/${idLink}`};
    console.log("createInscriptionFromLink query=", query);
    RoleModel.findOne(query)
      .then((role) => {
        const newParticipant = new ParticipantModel({
          firstname,
          lastname,
          email,
          telephone,
          role : role._id,
          optional_activities,
          event: role.event,
        });

        ParticipantModel.create(newParticipant)
        .then((createdParticipant) => {
          res.send(createdParticipant);
        })
        .catch((error) => {
          console.log("Error create participant from inscription", error);
          res.sendStatus(500);
        });
      })
      .catch((error) => {
        console.log("Error createInscriptionFromLink", error);
        res.sendStatus(500);
      });
  },

};

module.exports = inscriptionController;
