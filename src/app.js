import express from "express";
// const express = require("express")
import exphbs from "express-handlebars";
import indexRouter from "./routes/index.routes";

const app = express();

// Decirle a express qué motor de plantilla voy a usar
app.engine(".hbs", exphbs({
    extname: ".hbs",
}
))

// Routes
app.use(indexRouter);

export default app;