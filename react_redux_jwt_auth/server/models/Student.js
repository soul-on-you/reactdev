const { Schema, model, ObjectId } = require("mongoose");

const Student = new Schema({
  userID: { type: ObjectId, unique: true , required: true, ref: "User" },
  tasks: [{ type: ObjectId, ref: "Task" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Student", Student);
