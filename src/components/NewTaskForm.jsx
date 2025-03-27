import React, { useState } from "react";

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
    const taskData = {
      id: Math.random().toString(),
      name: inputName,
      // time: `${hours}:${minutes}`,
      status: "false",
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
