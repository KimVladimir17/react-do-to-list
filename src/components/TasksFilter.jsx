import PropTypes from "prop-types";
import { BUTTONS } from "../constants.js/constants";
const TasksFilter = ({ filter, onFilterChange }) => {
  return (
    <ul className="filters">
      {BUTTONS.map(({ name, filterValue }) => (
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

TasksFilter.propTypes = {
  filter: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default TasksFilter;
