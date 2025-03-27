import React, { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import "./App.css";

const INITIAL_TASKS = [
  {
    id: Math.random().toString(),
    name: "Completed task",
    time: 17,
    completed: false,
  },
  {
    id: Math.random().toString(),
    name: "Editing task",
    time: 5,
    completed: false,
  },
  {
    id: Math.random().toString(),
    name: "Active task",
    time: 5,
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filterTask, setFilterTask] = useState("all");

  const saveTaskDataHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
    console.log(tasks);
  };

  const updateTask = (id, newName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName };
        }
        return task;
      })
    );
  };

  const deleteTaskName = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const statusTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const filteredTasks = () => {
    if (filterTask.filterValue === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filterTask.filterValue === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks()}
          onUpdateTask={updateTask}
          onDeleteTaskName={deleteTaskName}
          onStatusTask={statusTask}
          // filterTask={filterTask}
        />
      </section>
      <Footer
        tasks={tasks}
        filter={filterTask}
        onFilterChange={setFilterTask}
      />
    </section>
  );
}

export default App;
