import { Router } from "express";
import Task from "../models/Task"
const router = Router()

router.get("/", async (req, res) => {

    const tasks = await Task.find().lean()
    // console.log(tasks)

    // index hace referencia al hbs
    res.render("index", {tasks: tasks}) //propiedad tasks y su valor son las tareas que obtengo en la base de datos (tasks)
})

router.post("/tasks/add", async (req, res) => {

    const task = Task(req.body)

    // Objeto que se guardara en mongodb
    // const taskSaved = await task.save()
    await task.save()

    // console.log(taskSaved)
    res.redirect("/");
    // res.send("saved")
})

router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/edit", (req, res) => {
    res.render("edit")
})

export default router;