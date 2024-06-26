import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@mdi/font/css/materialdesignicons.min.css";
import "./css/rtl/core.css";
import "./css/rtl/theme-default.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import RolesAndRights from "./components/Rolesandright/RolesAndRights";
import DepartmentName from "./components/Department/department_name";
import Designation from "./components/Department/designation";
import Level from "./components/Department/label";
import Grade from "./components/Department/grade";
import Organisation_str from "./components/Department/organisation_str";
import Sidebar from "./ui/Sidebar";
import AppLayout from "./ui/AppLayout";
import SystemAdmin from "./components/system admin/SystemAdmin";
import CompanyType from "./components/system admin/CompanyType";
import BranchType from "./components/system admin/BranchType";
import Director from "./components/system admin/Director";
import BankInfo from "./components/system admin/BankInfo";
import BranchInfo from "./components/system admin/BranchInfo";
import CompanyInfo from "./components/system admin/CompanyInfo";

import CreateCompanyForm from "./components/system admin/Forms/CreateCompanyForm";
import PreProject from "./components/PreProject/PreProject";
import NewProject from "./components/PreProject/NewProject";
import DeadTable from "./components/enquiryBucket/DeadTable";
import EnquiryTable from "./components/enquiryBucket/EnquiryTable";
import BuyerPersona from "./components/enquiryBucket/BuyerPersona";
import CustomerForm from "./components/enquiryBucket/customerForm";
import ActivityStatus from "./components/enquiryBucket/ActivityStatus";
import EnquiryStatus from "./components/enquiryBucket/EnquiryStatus";
import EnquiryStage from "./components/enquiryBucket/EnquiryStage";
import EnquiryType from "./components/enquiryBucket/EnquiryType";
import SourceType from "./components/enquiryBucket/SourceType";
import CommunicationType from "./components/enquiryBucket/CommunicationType";
import VisitType from "./components/enquiryBucket/VisitType";
import QuotationType from "./components/enquiryBucket/QuotationType";
// import AddCustomerForm from "./components/enquiryBucket/AddCustomerForm";
import PaymentReciept from "./components/Sales/PaymentReciept";
import PaymentSchedule from "./components/Sales/PaymentSchedule";
import SalesAgreement from "./components/Sales/SalesAgreement";
import AddSalesAgreement from "./components/Sales/AddSalesAgreement";
import AddPaymentRecipt from "./components/Sales/AddPaymentRecipt";
import AddPaymentSchedule from "./components/Sales/AddPaymentSchedule";
import Customer from "./components/Customer/Customer";
import TeamManagement from "./components/TeamManagement/TeamManagement";
import Quotation from "./components/FollowUp/Quotation";
import BankInfoForm from "./components/system admin/Forms/BankInfoForm";
import Board from "./components/system admin/Forms/Board";
import BranchInfoForm from "./components/system admin/Forms/BranchInfoForm";
import PreSalesEnquiry from "./components/FollowUp/PreSalesEnquiry";
import FollowUp from "./components/FollowUp/FollowUp";
import GoalAndTarget from "./components/Incentives/GoalAndTarget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddCustomerForm from "./components/Customer/AddCustomerForm";
import Module from "./components/Rolesandright/Module";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rolesRight" element={<RolesAndRights />} />
            <Route path="/rolesRight/moduleForm" element={<Module />} />

            <Route element={<SystemAdmin />}>
              <Route path="systemAdmin/companyType" element={<CompanyType />} />
              <Route path="systemAdmin/companyInfo" element={<CompanyInfo />} />
              <Route
                path="systemAdmin/companyInfoForm"
                element={<CreateCompanyForm />}
              />
              <Route path="systemAdmin/branchType" element={<BranchType />} />
              <Route path="systemAdmin/boardDirectors" element={<Director />} />
              <Route path="systemAdmin/bankInfo" element={<BankInfo />} />
              <Route path="systemAdmin/branchInfo" element={<BranchInfo />} />
            </Route>

            <Route path="systemAdmin/bankInfoForm" element={<BankInfoForm />} />
            <Route
              path="systemAdmin/branchInfoForm"
              element={<BranchInfoForm />}
            />
            <Route path="systemAdmin/boardForm" element={<Board />} />

            <Route
              path="department/departmentName"
              element={<DepartmentName />}
            />
            <Route path="department/designation" element={<Designation />} />
            <Route path="department/level" element={<Level />} />
            <Route path="department/grade" element={<Grade />} />
            <Route
              path="department/organisationStr"
              element={<Organisation_str />}
            />

            <Route path="preProject/preProjectTable" element={<PreProject />} />
            <Route path="preProject/newProject" element={<NewProject />} />

            <Route path="enquiryBucket/deadTable" element={<DeadTable />} />
            <Route
              path="enquiryBucket/enquiryTable"
              element={<EnquiryTable />}
            />
            <Route
              path="enquiryBucket/buyerPersona"
              element={<BuyerPersona />}
            />
            <Route
              path="enquiryBucket/customerForm"
              element={<CustomerForm />}
            />

            <Route
              path="enquiryBucket/activityStatus"
              element={<ActivityStatus />}
            />
            <Route
              path="enquiryBucket/enquiryStatus"
              element={<EnquiryStatus />}
            />
            <Route
              path="enquiryBucket/enquiryStage"
              element={<EnquiryStage />}
            />
            <Route path="enquiryBucket/enquiryType" element={<EnquiryType />} />
            <Route path="enquiryBucket/sourceType" element={<SourceType />} />
            <Route
              path="enquiryBucket/communicationType"
              element={<CommunicationType />}
            />
            <Route path="enquiryBucket/visitType" element={<VisitType />} />
            <Route
              path="enquiryBucket/quotationType"
              element={<QuotationType />}
            />
            {/* <Route
              path="enquiryBucket/AddCustomer"
              element={<AddCustomerForm />}
            /> */}

            <Route path="sales/paymentRecipt" element={<PaymentReciept />} />
            <Route path="sales/paymentSchedule" element={<PaymentSchedule />} />
            <Route path="sales/salesAgreement" element={<SalesAgreement />} />
            <Route
              path="sales/addSalesAgreement"
              element={<AddSalesAgreement />}
            />
            <Route
              path="/sales/addPaymentReciept"
              element={<AddPaymentRecipt />}
            />
            <Route
              path="/sales/addPaymentSchedule"
              element={<AddPaymentSchedule />}
            />

            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/addCustomer" element={<AddCustomerForm />} />
            <Route path="/teamManagement" element={<TeamManagement />} />

            {/* <Route path="/followUp" element={<FollowUp />} /> */}
            <Route
              path="/followUp/preSalesEnquiry"
              element={<PreSalesEnquiry />}
            />
            <Route path="/followUp/Quotation" element={<Quotation />} />

            <Route
              path="/incentive/goalAndTarget"
              element={<GoalAndTarget />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
