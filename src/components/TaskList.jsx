import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => (
        <Task key={task.id} name={task.name} time={task.time} />
      ))}
    </ul>
  );
};

export default TaskList;
