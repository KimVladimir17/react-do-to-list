import Task from "./Task";
import PropTypes from "prop-types";

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
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTaskName: PropTypes.func.isRequired,
  onStatusTask: PropTypes.func.isRequired,
};
export default TaskList;
