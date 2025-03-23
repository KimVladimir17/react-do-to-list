import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul className="todo-list">
      <Task name={props.tasks[0].name} time={props.tasks[0].time}></Task>
      <Task name={props.tasks[1].name} time={props.tasks[1].time}></Task>
    </ul>
  );
};

export default TaskList;
