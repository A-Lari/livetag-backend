const ParticipantModel = require("../models/Participants");

const checkBeforeDeleteRole = (req, res, next) => {
  console.log("===> checkBeforeDeleteRole");
  const idRole = req.params.idRole;
  if (!idRole) return res.sendStatus(400);
  const query = { role: idRole };
  ParticipantModel.countDocuments(query)
    .then((count) => {
      console.log(count);
      if (count > 0) {
        res
          .status(401)
          .send(
            "Role utilisé par les participants, vous ne pouvez pas le supprimer"
          );
      } else next();
    })
    .catch((error) => {
      console.log("Error checkBeforeDeleteRole", error);
      res.sendStatus(500);
    });
};

module.exports = checkBeforeDeleteRole;
