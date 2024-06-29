import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Stock() {
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
        <div>Stock</div>
      </div>
      <ul class="menu-sub">
        <SubItems value="Project Wise Stock" />
        <SubItems value="Product Wise Stock" />
      </ul>
    </li>
  );
}

export default Stock;
