import { Link } from "react-router-dom";

function Customer() {
  return (
    <li class="menu-item">
      <Link to="/customer" class="menu-link">
        <i class="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Customer</div>
      </Link>
    </li>
  );
}

export default Customer;
