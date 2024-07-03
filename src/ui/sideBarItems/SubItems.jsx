import { Link } from "react-router-dom";

function SubItems({ value, to }) {
  return (
    <li className="menu-item">
      <Link to={to} className="menu-link">
        <div>{value}</div>
      </Link>
    </li>
  );
}

export default SubItems;
