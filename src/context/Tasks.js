import { useContext } from "react";
import TasksContext from "./TasksContext";

const Tasks = () => {
  const context = useContext(TasksContext);

  if (context === undefined) {
    throw new Error("useTasks debe ser usado dentro de TasksProvider");
  }

  return context;
};

export default Tasks;
