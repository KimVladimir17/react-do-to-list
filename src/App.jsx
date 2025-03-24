import React, { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import "./App.css";

const INITIAL_TASKS = [
  {
    id: "1",
    name: "Completed task",
    time: 17,
  },
  {
    id: "2",
    name: "Editing task",
    time: 5,
  },
  {
    id: "3",
    name: "Active task",
    time: 5,
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const saveTaskDataHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onSaveTaskDate={saveTaskDataHandler} />
      </header>
      <section className="main">
        <TaskList tasks={tasks} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
