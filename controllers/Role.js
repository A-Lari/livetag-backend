const RoleModel = require("../models/Roles");

const roleController = {

  // Retoune les liste des roles pour un evennement
  getRoles(req, res) {
    const idEvent = req.query.idEvent;
    console.log("==========> getRoles idEvent=", idEvent);
    if (!idEvent || idEvent === "") return res.sendStatus(400);
    const query = {event: idEvent};
    console.log("query=", query);

    RoleModel.find(query)
      .populate(["activities"])
      .then((roles) => {
        res.send(roles);
      });    
  },

  // Retoune un role pour un id donnée
  getRole(req, res) {
    console.log("==========> getRole");
    const idRole = req.params.idRole;
    console.log(idRole);
    RoleModel.findById(idRole)
    .populate(["activities"])
      .then((role) => {
        res.send(role);
      });
  },

  // Créer un role pour un evennement
  createRole(req, res) {
    console.log("==========> createRole");
    console.log(req.body);
    const { role_name, activities=[], event } = req.body;
    console.log(role_name, activities, event);

    // check variables
    if (!role_name || !event) return res.sendStatus(400);

    RoleModel.create({
        role_name,
        activities,
        event,
    })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => res.sendStatus(500));
  },

  // Supprimer un role pour un id donnée
  deleteRole(req, res) {
    console.log("==========> deleteRole");
    const idRole = req.params.idRole;
    console.log(idRole);
    RoleModel.findByIdAndRemove(idRole)
      .then((result) => {
        console.log("role supprimé", result);
        res.send("role supprimé");
      });
  },

  //TODO a t'on besoin de mettre à jour l'event?
  updateRole(req, res) {
    console.log("==========> updateRole");
    const idRole = req.params.idRole;
    console.log(req.body);
    const { role_name, activities=[], event } = req.body;    
    const update = { role_name, activities };
    RoleModel.findOneAndUpdate(
      { _id: idRole },
      update,
      { new: true }
    ).then((result) => {
      console.log(result);
      res.send(result);
    });
  },

};

module.exports = roleController;
