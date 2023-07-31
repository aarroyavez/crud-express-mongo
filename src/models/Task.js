import { Schema, model } from "mongoose";

const task = new Schema({
    title: String,
    description: String,
    done: Boolean,

}, {
    timestamps: true
})      