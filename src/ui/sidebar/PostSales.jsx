import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Registration", to: "" },
  { value: "Key handover", to: "" },
  { value: "OC/CC", to: "" },
];
function PostSales() {
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
        <div>Post Sales</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, i) => (
          <SubItems value={el.value} key={i} />
        ))}
      </ul>
    </li>
  );
}

export default PostSales;
