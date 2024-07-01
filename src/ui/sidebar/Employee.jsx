import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Company Type", to: "/employee/companyType" },
  { value: "Bank &amp; Others", to: "/employee/bank" },
  { value: "Salary", to: "/employee/salary" },
  { value: "Document", to: "/employee/document" },
  { value: "KYC", to: "/employee/KYC" },
];
function Employee() {
  const [show, setShow] = useState(false);
  return (
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-notebook-outline"></i>
        <div>Employee Management</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} to={el.to} />
        ))}
      </ul>
    </li>
  );
}

export default Employee;
