import express from "express";
// const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(5090, () => {
  console.log("Server on port " + 5090);
});
