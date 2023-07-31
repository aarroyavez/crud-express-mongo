import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
        type: String, // tipo de dato
        required: true, // error si no hay título
        unique: true, // título único
    },
        description: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

// A partir del Schema, crear el modelo de datos

export default model("Task", taskSchema);
