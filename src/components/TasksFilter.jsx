const TasksFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: "All", filterValue: "all" },
    { name: "Active", filterValue: "active" },
    { name: "Completed", filterValue: "completed" },
  ];
  return (
    <ul className="filters">
      {buttons.map(({ name, filterValue }) => (
        <li key={filterValue}>
          <button
            className={filter === filterValue ? "selected" : ""}
            onClick={() => onFilterChange(filterValue)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksFilter;
