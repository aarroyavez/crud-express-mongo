import express from "express";
// const express = require("express")
import indexRouter from "./routes/index.routes";

const app = express();

app.use(indexRouter);

app.listen(5090, () => {
  console.log("Server on port " + 5090);
});
