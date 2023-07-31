import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String, // tipo de dato
      required: true, // error si no hay título
      unique: true, // título único
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false, // siempre que se crea tarea, no está hecha
    },
  },
  {
    timestamps: true,
    versionKey: false // para que no se añada __v: 0 por defecto de mongoose
  }
);

// A partir del Schema, crear el modelo de datos

export default model("Task", taskSchema);
