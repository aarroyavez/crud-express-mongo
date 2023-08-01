import Task from "../models/Task";

// Mostrar tareas
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  // console.log(tasks)

  // index hace referencia al hbs
  res.render("index", { tasks: tasks }); //propiedad tasks y su valor son las tareas que obtengo en la base de datos (tasks)
};

// Crear tareas
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    // Objeto que se guardara en mongodb
    // const taskSaved = await task.save()
    await task.save();

    // console.log(taskSaved)
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//Consulta una tarea y luego renderiza un formulario para poderlo editar
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean(); //lean para que admita objetos de js y no de mongodb

    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

// Editar tareas
export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  console.log(req.body);
  console.log(req.params.id);

  res.redirect("/");
};

// Eliminar Tareas
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id); //no es necesario pasar un body porque no lo va a actualizar. Solo borrará por id
  res.redirect("/");
};

export const toggleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  // Por defecto es false, el símbolo ! lo convierte en true
  task.done = !task.done;

  // Guardar
  await task.save();

  res.redirect("/");
};
