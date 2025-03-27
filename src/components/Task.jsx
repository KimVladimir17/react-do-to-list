import React, { useState } from "react";

const Task = ({
  task,
  onUpdateTask,
  onDeleteTaskName,
  onStatusTask,
  disabled,
}) => {
  const [inputEditName, setInputEditName] = useState(task.name);
  const [inputEditingName, setInputEditingName] = useState(false);

  const editTaskHandler = (e) => {
    setInputEditName(e.target.value);
  };

  const editTaskNameHandler = () => {
    setInputEditingName(true);
  };

  const editTaskSubmitHandler = (e) => {
    e.preventDefault();
    onUpdateTask(task.id, inputEditName);
    setInputEditingName(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {!inputEditingName && (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => onStatusTask(task.id)}
          ></input>
          <label>
            <span>{task.name}</span>
            <span className="created">created {task.time} minutes ago</span>
          </label>
          <button
            className="icon icon-edit"
            disabled={disabled}
            onClick={editTaskNameHandler}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDeleteTaskName(task.id)}
          ></button>
        </div>
      )}
      {inputEditingName && (
        <form onSubmit={editTaskSubmitHandler}>
          <input
            type="text"
            className="edit"
            value={inputEditName}
            onChange={editTaskHandler}
          />
        </form>
      )}
    </li>
  );
};

export default Task;
