const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    telephone: String,
    role: { type: mongoose.Types.ObjectId, ref: "Role" },
    optional_activities: [{ type: mongoose.Types.ObjectId, ref: "Activity" }],
    event: { type: mongoose.Types.ObjectId, ref: "Event" },
  },
  { timestamps: true }
);

const ParticipantModel = mongoose.model("Participant", ParticipantSchema);

module.exports = ParticipantModel;
