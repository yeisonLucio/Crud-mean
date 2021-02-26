const mongoose = require("mongoose");

const autoSchema = new mongoose.Schema({
  marca: {
    type: String,
    default: "generico",
  },
  modelo: Number,
  color: String,
  precio: Number,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

const Auto = mongoose.model("auto", autoSchema);

module.exports = Auto;
