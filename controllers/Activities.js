const ActivitiesModel = require("../models/Activities");

const activities = {
  getAllActivities(req, res) {
    ActivitiesModel.find().then((result) => {
      console.log(result);
      res.send(result);
    });
  },

  getActivitiesById(req, res) {
    ActivitiesModel.findById(req.params.id).then((result) => {
      console.log(result);
      res.send(result);
    });
  },

  deleteActivities(req, res) {
    console.log("==========> maj activity");
    const idActivity = req.params.id;
    console.log(idActivity);
    ActivitiesModel.findByIdAndDelete(idActivity).then((result) => {
      console.log("activité supprimé", result);
      res.send("activité supprimé");
    });
  },

  updateActivities(req, res) {
    const idActivity = req.params.idActivity;
    console.log(req.body);
    const { activity_name, activity_date, description, price } = req.body;
    const update = { activity_name, activity_date, description, price };
    ActivitiesModel.findOneAndUpdate({ _id: idActivity }, update, {
      new: true,
    }).then((result) => {
      console.log("activité mise à jour");
      console.log(result);
      res.send(result);
    });
  },

  createActivities(req, res) {
    const { activity_name, activity_date, description, price, event } =
      req.body;

    ActivitiesModel.create({
      activity_name,
      activity_date,
      description,
      price,
      // event: req.event.id,
    })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => res.sendStatus(500));
  },

  searchActivitiesByTitle(req, res) {
    const title = req.params.activity_name;
    console.log("searchByTitle", title);
    const query =
      title === "All" ? {} : { title: { $regex: `^${title}`, $options: "i" } };
    ActivitiesModel.find(query).then((activityList) => {
      console.log(activityList);
      res.send(activityList);
    });
  },
};

module.exports = activities;
