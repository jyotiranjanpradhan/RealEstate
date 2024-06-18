import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Product Incentive", to: "" },
  { value: "Performance", to: "" },
  { value: "Goal and Target", to: "" },
];
function Incentive() {
  const [show, setShow] = useState(false);
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
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default Incentive;
