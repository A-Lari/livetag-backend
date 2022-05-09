const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    role_name: String,
    activities: [{ type: mongoose.Types.ObjectId, ref: "activities" }],
    event: { type: mongoose.Types.ObjectId, ref: "Event" },
  },
  { timestamps: true }
);

const RoleModel = mongoose.model("Role", RoleSchema);

module.exports = RoleModel;
