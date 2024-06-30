import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Location Master", to: "" },
  { value: "Country", to: "/businessManagement/country" },
  { value: "State", to: "/businessManagement/state" },
  { value: "City / District", to: "/businessManagement/city" },
  { value: "Area / G.P", to: "/businessManagement/areaGram" },
  { value: "Village", to: "/businessManagement/village" },
  { value: "PIN", to: "/businessManagement/pin" },
  { value: "Zone / Segment", to: "/businessManagement/zoneAndSegment" },
  { value: "Area", to: "/businessManagement/area" },
  { value: "Territory", to: "/businessManagement/territory" },
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
          <SubItems value={el.value} to={el.to} />
        ))}
      </ul>
    </li>
  );
}

export default Business;
