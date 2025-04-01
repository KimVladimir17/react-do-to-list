import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTaskForm = ({ onSaveTaskData }) => {
  const [inputName, setInputName] = useState("");
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const submitHandler = (event) => {
    // let now = new Date();
    // let hours = now.getHours();
    // let minutes = now.getMinutes();
    event.preventDefault();
    if (inputName.trim() === "") {
      return;
    }
    const taskData = {
      id: uuidv4(),
      name: inputName,
      // time: `${hours}:${minutes}`,
      completed: false,
    };
    onSaveTaskData(taskData);
    setInputName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputName}
        onChange={nameChangeHandler}
      />
    </form>
  );
};

export default NewTaskForm;
