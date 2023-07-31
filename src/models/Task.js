import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

// A partir del Schema, crear el modelo de datos

export default model("Task", taskSchema);
