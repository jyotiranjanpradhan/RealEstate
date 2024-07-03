import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "New Project Development", to: "preProject/preProjectTable" },
  { value: "Confirmed Project", to: "" },
];
function PreProject() {
  const [show, setShow] = useState(false);
  return (
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link menu-toggle waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-form-select"></i>
        <div data-i18n="Pre Project">Pre Project</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, i) => (
          <SubItems value={el.value} to={el.to} key={i} />
        ))}
      </ul>
    </li>
  );
}

export default PreProject;
