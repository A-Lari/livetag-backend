const RoleModel = require("../models/Roles");

const roleController = {
  /* GET roles */
  getRoles(req, res) {
    const idEvent = req.query.idEvent;
    if (!idEvent || idEvent === "") return res.sendStatus(400);
    const query = { event: idEvent };
    RoleModel.find(query)
      .populate(["activities"])
      .then((roles) => {
        res.send(roles);
      })
      .catch((error) => {
        console.log("Error getRoles", error);
        res.sendStatus(500);
      });
  },

  /* GET role by id */
  getRole(req, res) {
    const idRole = req.params.idRole;
    console.log(idRole);
    RoleModel.findById(idRole)
      .populate(["activities"])
      .then((role) => {
        res.send(role);
      })
      .catch((error) => {
        console.log("Error getRole", error);
        res.sendStatus(500);
      });
  },

  /* POST roles */
  createRole(req, res) {
    const { role_name, activities = [], event } = req.body;
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
      .catch((error) => {
        console.log("Error createRole", error);
        res.sendStatus(500);
      });
  },

  /* DELETE role by id */
  deleteRole(req, res) {
    const idRole = req.params.idRole;
    RoleModel.findByIdAndRemove(idRole)
      .then((result) => {
        console.log("role supprimé", result);
        res.send("role supprimé");
      })
      .catch((error) => {
        console.log("Error deleteRole", error);
        res.sendStatus(500);
      });
  },

  /* UPDATE role by id */
  updateRole(req, res) {
    const idRole = req.params.idRole;
    const { role_name, activities = [], event } = req.body;
    const update = { role_name, activities };
    RoleModel.findOneAndUpdate({ _id: idRole }, update, { new: true })
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log("Error updateRole", error);
        res.sendStatus(500);
      });
  },
};

module.exports = roleController;
