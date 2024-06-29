import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Follow Up", to: "/followUp" },
  { value: "Pre Sales Enquiry", to: "/followUp/preSalesEnquiry" },
  { value: "Quotation", to: "/followUp/Quotation" },
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
          <SubItems value={el.value} to={el.to} />
        ))}
      </ul>
    </li>
  );
}

export default FollowUp;
