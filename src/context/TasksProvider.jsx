import TasksContext from "./TasksContext";
import useTasks from "../hooks/useTasks";

const TasksProvider = ({ children }) => {
  const { tasks, eliminarTarea, añadirTarea, actualizarTarea } = useTasks();

  return (
    <TasksContext.Provider
      value={{ tasks, eliminarTarea, añadirTarea, actualizarTarea }}
    >
      {children}
    </TasksContext.Provider>
  );
};
export default TasksProvider;
