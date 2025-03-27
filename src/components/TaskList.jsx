import Task from "./Task";

const TaskList = ({ tasks, onUpdateTask, onDeleteTaskName, onStatusTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          disabled={task.completed}
          onUpdateTask={onUpdateTask}
          onDeleteTaskName={onDeleteTaskName}
          onStatusTask={onStatusTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
