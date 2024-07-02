import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Product Incentive", to: "" },
  { value: "Performance", to: "" },
];
function Incentive() {
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
        <i className="menu-icon tf-icons mdi mdi-flip-to-front"></i>
        <div>incentive</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, i) =>
          el.value === "Performance" ? (
            <li className={subMenu ? "menu-item open" : "menu-item"}>
              <div
                onClick={() => {
                  console.log(subMenu);
                  setSubMenu(!subMenu);
                }}
                className="menu-link menu-toggle waves-effect"
              >
                <div>Performance</div>
              </div>
              <ul className="menu-sub">
                <SubItems
                  value="Goal and Target"
                  to="/incentive/goalAndTarget"
                />
              </ul>
            </li>
          ) : (
            <SubItems value={el.value} key={i} />
          )
        )}
      </ul>
    </li>
  );
}

export default Incentive;
