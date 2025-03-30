import React, { useState, useMemo } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const INITIAL_TASKS = [
  {
    id: uuidv4(),
    name: "Completed task",
    time: 17,
    completed: false,
  },
  {
    id: uuidv4(),
    name: "Editing task",
    time: 5,
    completed: false,
  },
  {
    id: uuidv4(),
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
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const filteredTasks = useMemo(() => {
    if (filterTask === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filterTask === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  }, [tasks, filterTask]);

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks}
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
        onClearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
