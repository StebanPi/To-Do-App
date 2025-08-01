import { useReducer, useEffect } from "react";

// Tipos de acciones
const TASK_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  SET_TASKS: "SET_TASKS",
};

// Reducer function
const tasksReducer = (state, action) => {
  switch (action.type) {
    case TASK_ACTIONS.SET_TASKS:
      return action.payload;

    case TASK_ACTIONS.ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(), // ID único y seguro
          title: action.payload.titulo,
          description: action.payload.descripcion,
          date: action.payload.fecha,
          completed: false,
        },
      ];

    case TASK_ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case TASK_ACTIONS.UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );

    default:
      return state;
  }
};

const useTasks = () => {
  // Función para obtener el estado inicial desde localStorage
  const getInitialState = () => {
    const dataGuardada = localStorage.getItem("tasks");
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  };

  // useReducer en lugar de useState
  const [tasks, dispatch] = useReducer(tasksReducer, [], getInitialState);

  // Guardar tareas cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Funciones que dispatchen acciones
  const eliminarTarea = (id) => {
    dispatch({
      type: TASK_ACTIONS.DELETE_TASK,
      payload: { id },
    });
  };

  const añadirTarea = (fechaUsuario, tituloUsuario, descripcionUsuario) => {
    dispatch({
      type: TASK_ACTIONS.ADD_TASK,
      payload: {
        fecha: fechaUsuario,
        titulo: tituloUsuario,
        descripcion: descripcionUsuario,
      },
    });
  };

  const actualizarTarea = (id) => {
    dispatch({
      type: TASK_ACTIONS.UPDATE_TASK,
      payload: { id },
    });
  };

  return {
    tasks,
    eliminarTarea,
    añadirTarea,
    actualizarTarea,
  };
};

export default useTasks;
