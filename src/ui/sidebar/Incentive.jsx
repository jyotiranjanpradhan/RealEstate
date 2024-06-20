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
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-flip-to-front"></i>
        <div>incentive</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) =>
          el.value === "Performance" ? (
            <li class={subMenu ? "menu-item open" : "menu-item"}>
              <div
                onClick={() => {
                  console.log(subMenu);
                  setSubMenu(!subMenu);
                }}
                class="menu-link menu-toggle waves-effect"
              >
                <div>Performance</div>
              </div>
              <ul class="menu-sub">
                <SubItems
                  value="Goal and Target"
                  to="/incentive/goalAndTarget"
                />
              </ul>
            </li>
          ) : (
            <SubItems value={el.value} />
          )
        )}
      </ul>
    </li>
  );
}

export default Incentive;
