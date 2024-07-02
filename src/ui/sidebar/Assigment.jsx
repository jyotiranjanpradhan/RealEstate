import { Link } from "react-router-dom";

function Assigment() {
  return (
    <li className="menu-item">
      <Link to="#a" className="menu-link">
        <i className="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Assignment</div>
      </Link>
    </li>
  );
}

export default Assigment;
