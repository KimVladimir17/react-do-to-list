import TasksFilter from "./TasksFilter";

const Footer = () => {
  const itemsLeft = 2;

  return (
    <footer className="footer">
      <span className="todo-count">
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
