import { Link } from "react-router-dom";

function Team() {
  return (
    <li className="menu-item">
      <Link to="/teamManagement" className="menu-link">
        <i className="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Team Management</div>
      </Link>
    </li>
  );
}

export default Team;
