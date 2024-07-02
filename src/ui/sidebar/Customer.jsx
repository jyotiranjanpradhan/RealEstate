import { Link } from "react-router-dom";

function Customer() {
  return (
    <li className="menu-item">
      <Link to="/customer" className="menu-link">
        <i className="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Customer</div>
      </Link>
    </li>
  );
}

export default Customer;
