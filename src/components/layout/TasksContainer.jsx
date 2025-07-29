import CardTodo from "./../utils/CardTodo";
const TasksContainer = ({ tasks, eliminarTarea }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                eliminarTarea={eliminarTarea}
              ></CardTodo>
            );
          })
        )}
      </div>
    </>
  );
};
export default TasksContainer;
