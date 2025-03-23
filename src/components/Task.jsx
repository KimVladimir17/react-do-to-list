const Task = (props) => {
  const changeTaskNameHandler = () => {
    console.log("clock");
  };
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{props.name}</span>
          <span className="created">created {props.time} minutes ago</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={changeTaskNameHandler}
        ></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
