const { UserModel } = require("../models/Users");

const users = {
  // Utilisateur Courtant
  getUsers(req, res) {
    UserModel.findById(req.user._id).then((user) => {
      res.send(user);
    });
  },

  //   createUser(req, res) {
  //     const userForm = req.body;

  //     if (!userForm.organisation) return res.sendStatus(400);
  //     if (!userForm.email) return res.sendStatus(400);
  //     if (!userForm.password) return res.sendStatus(400);

  //     // On vérifie que l'adresse mail n'existe pas déjà dans la bdd
  //     UserModel.find({ email: userForm.email })
  //       .then((result) => {
  //         if (result.length !== 0) return res.sendStatus(409);
  //         else {
  //           UserModel.create(userForm)
  //             .then(() => {
  //               res.sendStatus(201);
  //             })
  //             .catch(() => res.sendStatus(500));
  //         }
  //       })
  //       .catch(() => res.sendStatus(500));
  //   },

  //   // Renvoi l'utilisateur ID
  //   getUserById(req, res) {
  //     UserModel.findById(req.params.id)
  //       .then((oneUser) => {
  //         res.send(oneUser);
  //       })
  //       .catch(() => res.sendStatus(500));
  //   },

  //   modifyUsersById(req, res) {
  //     const idUser = req.params.id;
  //     const { organisation, email, password } = req.body;

  //     if (!organisation) return res.sendStatus(400);
  //     if (!email) return res.sendStatus(400);
  //     if (!password) return res.sendStatus(400);

  //     UserModel.findByIdAndUpdate(idUser, {
  //       organisation,
  //       email,
  //       password,
  //     })
  //       .then(() => {
  //         res.send(200);
  //       })
  //       .catch(() => {
  //         res.sendStatus(500);
  //       });
  //   },

  //   modifyCurrentUser(req, res) {
  //     const { organisation, email, password } = req.user;
  //     const updatedUser = req.body;

  //     UserModel.findByIdAndUpdate(req.user._id, updatedUser)
  //       .then(() => {
  //         res.send(200);
  //       })
  //       .catch(() => {
  //         res.sendStatus(500);
  //       });
  //   },

  //   deleteUserById(req, res) {
  //     UserModel.findByIdAndDelete(req.params.id)
  //       .then(() => {
  //         res.send(200);
  //       })
  //       .catch(() => {
  //         res.sendStatus(500);
  //       });
  //   },
};

module.exports = users;
