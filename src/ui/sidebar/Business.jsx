import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const subArray = [
  { value: "Country", to: "/businessManagement/country" },
  { value: "State", to: "/businessManagement/state" },
  { value: "City / District", to: "/businessManagement/city" },
  { value: "Area / G.P", to: "/businessManagement/areaGram" },
  { value: "Village", to: "/businessManagement/village" },
  { value: "PIN", to: "/businessManagement/pin" },
];
const array = [
  { value: "Location Master", to: "" },

  { value: "Zone / Segment", to: "/businessManagement/zoneAndSegment" },
  { value: "Area", to: "/businessManagement/area" },
  { value: "Territory", to: "/businessManagement/territory" },
  { value: "Point", to: "" },
];
function Business() {
  const [show, setShow] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  return (
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link menu-toggle waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-form-select"></i>
        <div>Business Management</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, index) =>
          el.value === "Location Master" ? (
            <li className={subMenu ? "menu-item open" : "menu-item"}>
              <div
                onClick={() => {
                  setSubMenu(!subMenu);
                }}
                className="menu-link menu-toggle waves-effect"
              >
                <div>Location</div>
              </div>
              <ul className="menu-sub">
                {subArray.map((el, index) => (
                  <SubItems value={el.value} to={el.to} key={index} />
                ))}
              </ul>
            </li>
          ) : (
            <SubItems value={el.value} to={el.to} key={index} />
          )
        )}
      </ul>
    </li>
  );
}

export default Business;
