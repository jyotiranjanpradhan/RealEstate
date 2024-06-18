import { Link } from "react-router-dom";

function Board() {
  return (
    <li class="menu-item active">
      <Link to="#a" class="menu-link">
        <i class="menu-icon tf-icons mdi mdi-home-outline"></i>
        <div>Dashboards</div>
      </Link>
    </li>
  );
}

export default Board;
