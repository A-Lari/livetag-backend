const { UserModel } = require("../models/Users");

const users = {
  // Utilisateur Courtant
  getUsers(req, res) {
    UserModel.findById(req.user._id).then((user) => {
      res.send(user);
    });
  },

  putUserData(req, res) {
    const organisation = req.body.organisation;
    const email = req.body.email;

    if (!organisation) return res.sendStatus(400);
    if (!email) return res.sendStatus(400);

    console.log(email);
    //await UserModel.findByIdAndUpdate(req.user._id)
  },

  putUserPassword(req, res) {
    if (!password) return res.sendStatus(400);
    if (!confirmPassword) return res.sendStatus(400);
    // password = confirmPassword ?
    if (password !== confirmPassword) return res.sendStatus(400);
    console.log(password);
  },
};

module.exports = users;
