import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

// router.get("/about", (req, res) => {
//     res.render("about")
// })

router.get("/tasks/:id/edit", renderTaskEdit);

// edit route
router.post("/tasks/:id/edit", editTask);

// delete router
router.get("/delete/:id", deleteTask);

// toggleDone -> toggle = que cambie a true o false
router.get("/toggleDone/:id", toggleDone);

export default router;
