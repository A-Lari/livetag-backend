const EventsModel = require("../models/Events");

const MobileController = {
  getEventByCode(req, res) {
    const code = req.params.code;
    console.log("je suis le code", code);

    EventsModel.findOne({ code }).then((result) => {
      res.send(result);
    });
  },
};

module.exports = MobileController;
