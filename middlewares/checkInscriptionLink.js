const RoleModel = require("../models/Roles");
const dayjs = require("dayjs");
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween);

const checkInscriptionLink = (req, res, next) => {
  console.log("===> checkInscriptionLink");
  const idRole = req.params.idRole;
  console.log(idRole);
  RoleModel.findById(idRole)
    .populate(["event"])
    .then((role) => {
      const start = Date.now();
      if(dayjs(start).isBetween(role.event.start_date, role.event.end_date, 'day', '[]')) next();
      else res.status(401).send("La date courante n'est plus incluse dans la période de l'evennement");
    })
    .catch((error) => {
      console.log("Error checkInscriptionLink", error);
      res.sendStatus(500);
    });
};

module.exports = checkInscriptionLink;
