import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Project() {
  const [show, setShow] = useState(false);
  return (
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-file-document-outline"></i>
        <div data-i18n="Projects">Projects</div>
      </div>
      <ul class="menu-sub">
        <SubItems value="Project Type" />

        <SubItems value="Payment Schedule" />
        <SubItems value="Product Type" />
        <SubItems value="Raise Cost Type" />
        <SubItems value="Amenity Master" />
        <SubItems value="Nearby Master" />

        <SubItems value="Facing Master" />
        <SubItems value="Commision Setup" />
        <SubItems value="Ownership Type" />

        <SubItems value="Approval Body" />
        <SubItems value="Tax" />
        <SubItems value="Project" />
      </ul>
    </li>
  );
}

export default Project;
