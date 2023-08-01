import { Router } from "express";
import Task from "../models/Task"
const router = Router()

router.get("/", async (req, res) => {

    const tasks = await Task.find().lean()
    // console.log(tasks)

    // index hace referencia al hbs
    res.render("index", { tasks: tasks }) //propiedad tasks y su valor son las tareas que obtengo en la base de datos (tasks)
})

router.post("/tasks/add", async (req, res) => {
    try {
        const task = Task(req.body)

        // Objeto que se guardara en mongodb
        // const taskSaved = await task.save()
        await task.save()

        // console.log(taskSaved)
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})

router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/edit/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean(); //lean para que admita objetos de js y no de mongodb

        res.render("edit", { task });
    } catch (error) {
        console.log(error.message);
    }
})

// Para en el frontend, debe usarse un método que crea un input oculto y es algo más complicado para poder usar el método http put
// se usa POST para efectos prácticos. Si hubiera un framework como react, tampoco sería necesario
// Para recibir los datos del formulario que envíe el frontend
router.post("/edit/:id", async (req, res) => {

    const {id} = req.params

    await Task.findByIdAndUpdate(id, req.body)

    console.log(req.body);
    console.log(req.params.id);

    res.redirect("/");
})

export default router;