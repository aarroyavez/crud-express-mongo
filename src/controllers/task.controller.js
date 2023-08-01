export const renderTasks = async (req, res) => {

    const tasks = await Task.find().lean()
    // console.log(tasks)

    // index hace referencia al hbs
    res.render("index", { tasks: tasks }) //propiedad tasks y su valor son las tareas que obtengo en la base de datos (tasks)
}