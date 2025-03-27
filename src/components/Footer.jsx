import TasksFilter from "./TasksFilter";

const Footer = ({ tasks, filter, onFilterChange, onClearCompleted }) => {
  const itemsLeft = tasks.filter((task) => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
