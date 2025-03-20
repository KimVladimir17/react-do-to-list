import "../assets/style.css/main.css";
import Footer from "./Footer.jsx";

function Main() {
  return (
    <div className="main">
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Completed task</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Editing task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <input type="text" className="edit" value="Editing task"></input>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Active task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default Main;
