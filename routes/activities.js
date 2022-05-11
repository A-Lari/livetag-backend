var express = require("express");
var router = express.Router();
const { checkAuth } = require("./checkAuth");
const activities = require("../controllers/Activities");

/* GET activities page*/
router.get("/", activities.getAllActivities);

/* GET activities par ID */
router.get("/:id", checkAuth, activities.getActivitiesById);

/* delete activities */
router.delete("/:id", checkAuth, activities.deleteActivities);

/*Update activities */
router.post("/:idActivity", checkAuth, activities.updateActivities);

/*create activity*/
router.post("/", checkAuth, activities.createActivities);

// search by title
router.get(
  "/search/:activity_name",
  checkAuth,
  activities.searchActivitiesByTitle
);

module.exports = router;
