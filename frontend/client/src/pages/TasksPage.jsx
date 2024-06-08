import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskCard } from "../components/TaskCard";

export const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;
  return (
    <div className="grid md:grid-cols-3 gap-2 sm:grid-cols-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};
