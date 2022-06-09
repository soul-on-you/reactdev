const { Schema, model } = require("mongoose");

const Role = new Schema({
  role: { type: String, required: true, unique: true },
});

module.exports = model("Role", Role);
