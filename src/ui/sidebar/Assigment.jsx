import { Link } from "react-router-dom";

function Assigment() {
  return (
    <li class="menu-item">
      <Link to="#a" class="menu-link">
        <i class="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Assignment</div>
      </Link>
    </li>
  );
}

export default Assigment;
