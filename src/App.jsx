import TasksContainer from "./components/layout/TasksContainer";
import TasksNavbar from "./components/layout/TasksNavbar";
import TasksProvider from "./context/TasksProvider";

function App() {
  return (
    <TasksProvider>
      <div className="min-h-screen bg-[var(--background)] dark:bg-[var(--background)] p-8">
        <TasksNavbar></TasksNavbar>
        <TasksContainer></TasksContainer>
      </div>
    </TasksProvider>
  );
}

export default App;
