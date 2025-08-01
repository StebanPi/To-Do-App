import CardTodo from "./../utils/CardTodo";
import Tasks from "./../../context/Tasks.js";
const TasksContainer = () => {
  const { tasks } = Tasks();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {tasks.length === 0 ? (
          <h2 className="text-center lg:col-span-3">
            No hay tareas registradas...
          </h2>
        ) : (
          tasks.map(({ title, description, date, id, completed }) => {
            return (
              <CardTodo
                key={id}
                title={title}
                description={description}
                date={date}
                completed={completed}
                id={id}
              ></CardTodo>
            );
          })
        )}
      </div>
    </>
  );
};
export default TasksContainer;
