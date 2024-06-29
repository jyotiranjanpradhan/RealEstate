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
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-file-document-outline"></i>
        <div>Post Sales</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default PostSales;
