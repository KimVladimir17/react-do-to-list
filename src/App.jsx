import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import "./App.css"; // Import styles

function App() {
  const tasks = [
    {
      name: "kk;k",
      time: 5,
    },
    {
      name: "iojo",
      time: 5,
    },
  ];
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={tasks} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
