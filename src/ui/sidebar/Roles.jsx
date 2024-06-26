import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Roles() {
  const [show, setShow] = useState(false);
  return (
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-account-outline"></i>
        <div>Roles &amp; Right</div>
      </div>
      <ul class="menu-sub">
        <SubItems value="Roles Right" to="/rolesRight" />
        <SubItems value="module" to="/rolesRight/moduleForm" />
      </ul>
    </li>
  );
}

export default Roles;
