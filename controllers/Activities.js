const ActivitiesModel = require("../models/Activities");

const activities = {
  getAllActivities(req, res) {
    const idEvent = req.query.idEvent;
    console.log("==========> getActivities idEvent=", idEvent);
    if (!idEvent || idEvent === "") return res.sendStatus(400);
    const query = { event: idEvent };
    console.log("query=", query);

    ActivitiesModel.find(query).then((result) => {
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
    const {
      activity_name,
      activity_date,
      description,
      price = 0,
      event,
    } = req.body;

    // check variables
    if (!activity_name || !event) return res.sendStatus(400);

    ActivitiesModel.create({
      activity_name,
      activity_date,
      description,
      price,
      event,
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
