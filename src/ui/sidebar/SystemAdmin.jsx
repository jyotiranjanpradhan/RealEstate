import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function SystemAdmin() {
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
        <div>System Admin</div>
      </div>
      <ul class="menu-sub">
        <SubItems value="Company Type" to={"systemAdmin/companyType"} />
        <SubItems value="Company Info" to={"systemAdmin/companyInfo"} />
        <SubItems value="Branch Type" to={"systemAdmin/branchType"} />
        <SubItems value="Branch Info" to={"systemAdmin/branchInfo"} />
        <SubItems value="Bank Info" to={"systemAdmin/bankInfo"} />
        <SubItems
          value="Board Of Directors"
          to={"systemAdmin/boardDirectors"}
        />
      </ul>
    </li>
  );
}

export default SystemAdmin;
