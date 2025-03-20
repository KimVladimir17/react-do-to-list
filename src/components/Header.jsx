import "../assets/style.css/header.css";

function Header() {
  return (
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        // autofocus
      ></input>
    </div>
  );
}

export default Header;
