import React, { useState, useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Task = ({
  task,
  onUpdateTask,
  onDeleteTaskName,
  onStatusTask,
  disabled,
}) => {
  const [inputEditName, setInputEditName] = useState(task.name);
  const [isEditing, setIsEditing] = useState(false);
  const [originalName, setOriginalName] = useState(task.name);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const editTaskHandler = (e) => {
    setInputEditName(e.target.value);
    setOriginalName(task.name);
  };

  const editTaskNameHandler = () => {
    setIsEditing(true);
  };

  const editTaskSubmitHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
    if (inputEditName.trim() === "") {
      setInputEditName(originalName);
      return;
    }
    onUpdateTask(task.id, inputEditName);
  };

  const timeAgo = formatDistanceToNow(task.createdAt, { includeSeconds: true });
  return (
    <li className={task.completed ? "completed" : ""}>
      {!isEditing && (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => onStatusTask(task.id)}
          ></input>
          <label>
            <span>{task.name}</span>
            <span className="created">created {timeAgo}</span>
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
      {isEditing && (
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
Task.propTypes = {
  task: PropTypes.array.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTaskName: PropTypes.func.isRequired,
  onStatusTask: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Task;
