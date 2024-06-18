import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Pre Sales Enquiry", to: "" },
  { value: "Quotation", to: "" },
  { value: "Visit", to: "" },
];
function FollowUp() {
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
        <div data-i18n="FollowUp">FollowUp</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default FollowUp;
