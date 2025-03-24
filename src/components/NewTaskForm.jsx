import React, { useState } from "react";

const NewTaskForm = (props) => {
  const [inputName, setInputName] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      id: Math.random().toString(),
      name: inputName,
      // time: time,
    };

    props.onSaveTaskDate(taskData);

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
