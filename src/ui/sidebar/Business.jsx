import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Location Master", to: "" },
  { value: "Country", to: "" },
  { value: "State", to: "" },
  { value: "City / District", to: "" },
  { value: "Area / G.P", to: "" },
  { value: "Village", to: "" },
  { value: "PIN", to: "" },
  { value: "Zone / Segment", to: "" },
  { value: "Area", to: "" },
  { value: "Territory", to: "" },
  { value: "Point", to: "" },
];
function Business() {
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
        <div>Business Management</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default Business;
