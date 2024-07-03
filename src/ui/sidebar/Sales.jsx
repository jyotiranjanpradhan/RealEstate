import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

function Sales() {
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
        <div>Sales</div>
      </div>
      <ul className="menu-sub">
        <SubItems value="Payment Recipt" to="/sales/paymentRecipt" />
        <SubItems value="Payment schedule" to="/sales/paymentSchedule" />
        <SubItems value="Sales Agreement" to="/sales/salesAgreement" />
        <SubItems value="Collection" />
        <SubItems value="Demand Letted Master" />
        <SubItems value="Penalty Master" />
        <SubItems value="Cancelation Policy" />
        <SubItems value="Cancelation and Refund" />
        <SubItems value="Full and Final Settlement" />
      </ul>
    </li>
  );
}

export default Sales;
