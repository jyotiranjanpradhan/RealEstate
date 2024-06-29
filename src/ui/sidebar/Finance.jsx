import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Payment Receipt", to: "" },
  { value: "Demand Generation", to: "" },
  { value: "Salary", to: "" },
  { value: "Commision", to: "" },
  { value: "Receivables", to: "" },
  { value: "Profit and Loss Report", to: "" },
  { value: "Expenses", to: "" },
];
function Finance() {
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
        <div>Finance</div>
      </div>
      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} />
        ))}
      </ul>
    </li>
  );
}

export default Finance;
