import { Router } from "express";
import Task from "../models/Task"
import { renderTasks } from "../controllers/task.controller";
const router = Router()

router.get("/", renderTasks)

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
// edit route
router.post("/edit/:id", async (req, res) => {

    const { id } = req.params

    await Task.findByIdAndUpdate(id, req.body)

    console.log(req.body);
    console.log(req.params.id);

    res.redirect("/");
})

// delete router
// El usuario "elimina", llega al backend, se ejecuta el siguiente código y por último, se direcciona a la misma página
router.get("/delete/:id", async (req, res) => {
    const { id } = req.params;

    await Task.findByIdAndDelete(id); //no es necesario pasar un body porque no lo va a actualizar. Solo borrará por id
    res.redirect("/");
})

// toggleDone -> toggle = que cambie a true o false
router.get("/toggleDone/:id", async (req, res) => {

    const { id } = req.params;

    const task = await Task.findById(id);

    // Por defecto es false, el símbolo ! lo convierte en true
    task.done = !task.done;

    // Guardar
    await task.save();

    res.redirect("/");
})

export default router;