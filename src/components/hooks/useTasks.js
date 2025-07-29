import { useState, useEffect } from "react";

const useTasks = () => {
  // Leer tareas una sola vez desde localStorage al iniciar
  const [tasks, setTasks] = useState(() => {
    const dataGuardada = localStorage.getItem("tasks");
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  });

  // Guardar tareas cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const eliminarTarea = (id) => {
    const nuevasTareas = tasks.filter((task) => task.id !== id);
    setTasks(nuevasTareas);
  };

  const AñadirTarea = (fechaUsuario, tituloUsuario, descripcionUsuario) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(), // ID único y seguro
        title: tituloUsuario,
        description: descripcionUsuario,
        date: fechaUsuario,
        completed: false,
      },
    ]);
  };

  const actualizarTarea = (id) => {
    const tareasActualizadas = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(tareasActualizadas);
  };

  return {
    tasks,
    eliminarTarea,
    AñadirTarea,
    actualizarTarea,
  };
};

export default useTasks;
