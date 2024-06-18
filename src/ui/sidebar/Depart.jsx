import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Department Name", to: "" },
  { value: "Designation", to: "" },
  { value: "Level", to: "" },
  { value: "Grade", to: "" },
  { value: "Organisation Structure", to: "" },
];
function Depart() {
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
        <div>Department</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default Depart;
