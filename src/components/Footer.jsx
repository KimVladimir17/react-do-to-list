import TasksFilter from "./TasksFilter";
import PropTypes from "prop-types";

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
Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
