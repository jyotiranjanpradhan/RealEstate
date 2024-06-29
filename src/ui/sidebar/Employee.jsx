import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

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
        <SubItems value="Company Profile" />
        <SubItems value="Address" />
        <SubItems value="Company Profile" />
        <SubItems value="Personal Profile" />
        <SubItems value="Family Profile" />
        <SubItems value="Education Profile" />
        <SubItems value=" Training & Education Certification" />
        <SubItems value="Bank &amp; Others" />
        <SubItems value="Salary" />
        <SubItems value="Document" />
        <SubItems value="KYC" />
      </ul>
    </li>
  );
}

export default Employee;
