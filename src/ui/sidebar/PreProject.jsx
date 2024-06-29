import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "New Project Development", to: "preProject/preProjectTable" },
  { value: "Confirmed Project", to: "" },
];
function PreProject() {
  const [show, setShow] = useState(false);
  return (
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-form-select"></i>
        <div data-i18n="Pre Project">Pre Project</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} to={el.to} />
        ))}
      </ul>
    </li>
  );
}

export default PreProject;
