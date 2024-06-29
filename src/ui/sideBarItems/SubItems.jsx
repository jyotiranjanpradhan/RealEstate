import { Link } from "react-router-dom";

function SubItems({ value, to }) {
  return (
    <li class="menu-item">
      <Link to={to} class="menu-link">
        <div>{value}</div>
      </Link>
    </li>
  );
}

export default SubItems;
