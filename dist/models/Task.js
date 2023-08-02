"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    // tipo de dato
    required: true,
    // error si no hay título
    unique: true,
    // título único
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false // siempre que se crea tarea, no está hecha
  }
}, {
  timestamps: true,
  // fecha de creación y actualización
  versionKey: false // para que no se añada __v: 0 por defecto de mongoose
});

// A partir del Schema, crear el modelo de datos
var _default = (0, _mongoose.model)("Task", taskSchema);
exports["default"] = _default;