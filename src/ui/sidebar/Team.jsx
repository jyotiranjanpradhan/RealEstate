import { Link } from "react-router-dom";

function Team() {
  return (
    <li class="menu-item">
      <Link to="/teamManagement" class="menu-link">
        <i class="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Team Management</div>
      </Link>
    </li>
  );
}

export default Team;
