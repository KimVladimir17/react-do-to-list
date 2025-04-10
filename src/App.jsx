import React, { useState, useMemo, useEffect } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import "./App.css";
import INITIAL_TASKS from "./db/initial_tasks";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filterTask, setFilterTask] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const firstTenTasks = data.slice(0, 7);
        const transformedTasks = firstTenTasks.map((todo) => ({
          id: todo.id.toString(),
          name: todo.title,
          completed: todo.completed,
          createdAt: Date.now(),
        }));
        setTasks(transformedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const saveTaskDataHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const updateTask = (id, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const deleteTaskName = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const statusTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
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
