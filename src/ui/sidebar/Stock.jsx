import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Stock() {
  const [show, setShow] = useState(false);
  return (
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link menu-toggle waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-file-document-outline"></i>
        <div>Stock</div>
      </div>
      <ul className="menu-sub">
        <SubItems value="Project Wise Stock" />
        <SubItems value="Product Wise Stock" />
      </ul>
    </li>
  );
}

export default Stock;
