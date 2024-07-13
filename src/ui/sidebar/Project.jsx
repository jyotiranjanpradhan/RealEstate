import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";

const array = [
  { value: "Project Type", to: "/project/projectType" },
  { value: "Payment Schedule", to: "/project/paymentSchedule" },
  { value: "Product Type", to: "/project/productType" },
  { value: "Raise Cost Type", to: "/project/raiseCostType" },
  { value: "Amenity Master", to: "/project/amenityMaster" },
  { value: "Nearby Master", to: "/project/nearbyMaster" },
  { value: "Facing Master", to: "/project/facingMaster" },
  { value: "Commision Setup", to: "/project/commisionSetup" },
  { value: "Ownership Type", to: "#" },
  { value: "Approval Body", to: "/project/approvalBody" },
  { value: "Tax", to: "/project/tax" },
  { value: "Project", to: "/project/" },
];

function Project() {
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
        <div data-i18n="Projects">Projects</div>
      </div>
      <ul className="menu-sub">
        {array.map((el, i) => (
          <SubItems value={el.value} to={el.to} key={i} />
        ))}
      </ul>
    </li>
  );
}

export default Project;
