import { Link } from "react-router-dom";

function Board() {
  return (
    <li className="menu-item active">
      <Link to="/" className="menu-link">
        <i className="menu-icon tf-icons mdi mdi-home-outline"></i>
        <div>Dashboards</div>
      </Link>
    </li>
  );
}

export default Board;
