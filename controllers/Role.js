const RoleModel = require("../models/Roles");

const roleController = {

  //TODO Ajouter une query pour rechercher les roles pour un event id
  getRoles(req, res) {
    console.log("==========> getRoles");
    RoleModel.find()
      .populate(["activities"])
      .then((roles) => {
        res.send(roles);
      });    
  },

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
