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
    <li className={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu-link menu-toggle waves-effect"
      >
        <i className="menu-icon tf-icons mdi mdi-file-document-outline"></i>
        <div>Finance</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, index) => (
          <SubItems value={el.value} key={index} />
        ))}
      </ul>
    </li>
  );
}

export default Finance;
