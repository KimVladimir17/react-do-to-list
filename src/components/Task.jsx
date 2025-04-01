import React, { useState, useEffect, useRef } from "react";
const Task = ({
  task,
  onUpdateTask,
  onDeleteTaskName,
  onStatusTask,
  disabled,
}) => {
  const [inputEditName, setInputEditName] = useState(task.name);
  const [inputEditingName, setInputEditingName] = useState(false);
  const [originalName, setOriginalName] = useState(task.name);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputEditingName) {
      editInputRef.current.focus();
    }
  }, [inputEditingName]);

  const editTaskHandler = (e) => {
    setInputEditName(e.target.value);
    setOriginalName(task.name);
  };

  const editTaskNameHandler = () => {
    setInputEditingName(true);
  };

  const editTaskSubmitHandler = (e) => {
    e.preventDefault();
    setInputEditingName(false);
    if (inputEditName.trim() === "") {
      setInputEditName(originalName);
      return;
    }
    onUpdateTask(task.id, inputEditName);
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
            ref={editInputRef}
            onBlur={editTaskSubmitHandler}
          />
        </form>
      )}
    </li>
  );
};

export default Task;
