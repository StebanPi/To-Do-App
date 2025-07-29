import TasksContainer from "./components/layout/TasksContainer";
import useTasks from "./components/hooks/useTasks";
import TasksNavbar from "./components/layout/TasksNavbar";

function App() {
  const { tasks, AñadirTarea, eliminarTarea } = useTasks();

  return (
    <div className="min-h-screen bg-[var(--background)] dark:bg-[var(--background)] p-8">
      <TasksNavbar funcionAñadir={AñadirTarea}></TasksNavbar>

      <TasksContainer
        tasks={tasks}
        eliminarTarea={eliminarTarea}
      ></TasksContainer>
    </div>
  );
}

export default App;
