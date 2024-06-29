import { useState } from "react";
import SubItems from "../sideBarItems/SubItems";
const array = [
  { value: "Quotation Type", to: "/enquiryBucket/quotationType" },
  { value: "Visit Type", to: "/enquiryBucket/visitType" },
  { value: "Communication Type", to: "/enquiryBucket/communicationType" },
  { value: "Source Type", to: "/enquiryBucket/sourceType" },
  { value: "Enquiry Type", to: "/enquiryBucket/enquiryType" },
  { value: "Lead Enquiry Stage", to: "/enquiryBucket/enquiryStage" },
  { value: "Lead Enquiry Status", to: "/enquiryBucket/enquiryStatus" },
  { value: "Lead Activity Status", to: "/enquiryBucket/activityStatus" },
  { value: "Customer Form", to: "/enquiryBucket/customerForm" },
  { value: "Buyer's Persona", to: "/enquiryBucket/buyerPersona" },
  { value: "Enquiry Table", to: "/enquiryBucket/enquiryTable" },
  { value: "Dead Table", to: "/enquiryBucket/deadTable" },
];

function Bucket() {
  const [show, setShow] = useState(false);
  return (
    <li class={show ? "menu-item open" : "menu-item"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        class="menu-link menu-toggle waves-effect"
      >
        <i class="menu-icon tf-icons mdi mdi-form-select"></i>
        <div>Enquiry Bucket</div>
      </div>

      <ul class="menu-sub">
        {array.map((el) => (
          <SubItems value={el.value} to={el.to} />
        ))}
      </ul>
    </li>
  );
}

export default Bucket;
