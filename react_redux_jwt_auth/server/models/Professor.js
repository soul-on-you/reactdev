const { Schema, model, ObjectId } = require("mongoose");

const Professor = new Schema({
  userID: { type: ObjectId, required: true, ref: "User" },
  students: [{ type: ObjectId, ref: "Student" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Professor", Professor);
