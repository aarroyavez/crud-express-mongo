"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task.controller");
var router = (0, _express.Router)();
router.get("/", _task.renderTasks);
router.post("/tasks/add", _task.createTask);

// router.get("/about", (req, res) => {
//     res.render("about")
// })

// toggleDone -> toggle = que cambie a true o false
router.get("/tasks/:id/toggleDone", _task.toggleDone);
router.get("/tasks/:id/edit", _task.renderTaskEdit);

// edit route
router.post("/tasks/:id/edit", _task.editTask);

// delete router
router.get("/tasks/:id/delete", _task.deleteTask);
var _default = router;
exports["default"] = _default;