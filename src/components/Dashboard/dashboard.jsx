import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminView, useGetAdminData } from "../../hooks/Dashboard/useAdminView";

const Dashboard = () => {
  
  //user Profile 
const[userProfileName,setUserProfileName]=useState("Admin")
const[userProfileDepartment,setUserProfileDepartment]=useState("IT")
const[userProfileContact,setUserProfileContact]=useState("7978969958")
const[userProfileEmail,setUserProfileEmail]=useState("xyz@gmail.com")
const[userProfileDesignation,setUserProfileDesignation]=useState("Development Engineer")
const[userProfileImage,setUserProfileImage]=useState("/images/avatars/1.png")
//Enquirie 
const[EnquiriesProspet,setEnquiriesProspet]=useState(244)
const[EnquiriesLead,setEnquiriesLead]=useState(23.8)
const[EnquiriesSales,setEnquiriesSales]=useState(2.14)
//FollowUp 
const[FollowUpToday,setFollowUpToday]=useState("12,348")
const[FollowUpTodayPercentage,setFollowUpTodayPercentage]=useState("+12")
const[FollowUpUpcoming,setFollowUpUpcoming]=useState("8,450")
const[FollowUpUpcomingPercentage,setFollowUpUpcomingPercentage]=useState("+32")
const[FollowUpPending,setFollowUpPending]=useState("350")
const[FollowUpPendingPercentage,setFollowUpPendingPercentage]=useState("-18")
//Sales 
const[SalesTotalSales,setSalesTotalSales]=useState(23)
const[SalesPipelineSales,setSalesPipelineSales]=useState(35)
const[SalesQuote,setSalesQuote]=useState(30)
//LeadStatus 
const[LeadStatusHotLead,setLeadStatusHotLead]=useState(20)
const[LeadStatusColdLead,setLeadStatusColdLead]=useState(50)
const[LeadStatusWarmLead,setLeadStatusWarmLead]=useState(20)
//Finance
const[FinanceSalary,setFinanceSalary]=useState(1.2)
const[FinanceCommissionEarned,setFinanceCommissionEarned]=useState(834)
const[FinanceCommissionReceived,setFinanceCommissionReceived]=useState(3.7)
const[FinanceCommissionDue,setFinanceCommissionDue]=useState(2.5)
//Target
const[TargetPercentage,setTargetPercentage]=useState("39.7")
const[TargetmonthPercentage,setTargetmonthPercentage]=useState("28.3")
const[TargetAnnualPercentage,setTargetAnnualPercentage]=useState("17.4")
//Performance
const[PerformanceChartCallwithWood,setPerformanceChartCallwithWood]=useState({date:"21 Jul",time:"08:20-10:30"})
const[PerformanceChartConferencecall,setPerformanceChartConferencecall]=useState({date:"21 Jul",time:"08:20-10:30"})
const[PerformanceChartMeetingwithMark,setPerformanceChartMeetingwithMark]=useState({date:"21 Jul",time:"08:20-10:30"})
//Visits
const[Visits,setVisits]=useState("42.5")
const[VisitsPercentage,setVisitsPercentage]=useState("+18.4")
const[VisitsMobile,setVisitsMobile]=useState("2,890")
const[VisitsMobilePercentage,setVisitsMobilePercentage]=useState("23.5")
const[VisitsDesktop,setVisitsDesktop]=useState("76.5")
const[VisitsDesktopPercentage,setVisitsDesktopPercentage]=useState("22,465")
//LeadFunnel
const[LeadFunnelDate,setLeadFunnelDate]=useState("17 Nov 23")
const[LeadFunnelDuration,setLeadFunnelDuration]=useState("32")
//CustomerList
const[CustomerListPhone1,setCustomerListPhone1]=useState("+91 1236547892")
const[CustomerListPhone2,setCustomerListPhone2]=useState("+91 1236547892")
const[CustomerListPhone3,setCustomerListPhone3]=useState("+91 1236547892")
const[CustomerListPhone4,setCustomerListPhone4]=useState("+91 1236547892")
//SocialNetwork 
const[SocialNetworkVisits,setSocialNetworkVisits]=useState("28,468")
const[SocialNetworkVisitsPercentage,setSocialNetworkVisitsPercentage]=useState("62")
const[SocialNetworkVisitsFacebook,setSocialNetworkVisitsFacebook]=useState("12,348")
const[SocialNetworkVisitsFacebookPercentage,setSocialNetworkVisitsFacebookPercentage]=useState("+12")
const[SocialNetworkVisitsDribbble,setSocialNetworkVisitsDribbble]=useState("8,450")
const[SocialNetworkVisitsDribbblePercentage,setSocialNetworkVisitsDribbblePercentage]=useState("+32")
const[SocialNetworkVisitsTwitter,setSocialNetworkVisitsTwitter]=useState("350")
const[SocialNetworkVisitsTwitterPercentage,setSocialNetworkVisitsTwitterPercentage]=useState("-18")
const[SocialNetworkVisitsInstagram,setSocialNetworkVisitsInstagram]=useState("25,566")
const[SocialNetworkVisitsInstagramPercentage,setSocialNetworkVisitsInstagramPercentage]=useState("+42")
//WeeklyOverview
const[WeeklyOverviewSales,setWeeklyOverviewSales]=useState("85.4")
const[WeeklyOverviewNetIncome,setWeeklyOverviewNetIncome]=useState("438.5")
const[WeeklyOverviewExpense,setWeeklyOverviewExpense]=useState("22.4")
//ProductList
const[ProductListPercentage,setProductListPercentage]=useState("82")
const[Oneplus9ProRevenue,setOneplus9ProRevenue]=useState("12.5")
const[Oneplus9ProConversion,setOneplus9ProConversion]=useState("+24")
const[AppleiPhone13ProRevenue,setAppleiPhone13ProRevenue]=useState("45")
const[AppleiPhone13ProConversion,setAppleiPhone13ProConversion]=useState("-18")
const[Oneplus9Pro2Revenue,setOneplus9Pro2Revenue]=useState("98.2")
const[Oneplus9Pro2Conversion,setOneplus9Pro2Conversion]=useState("+55")
const[AppleMacMiniRevenue,setAppleMacMiniRevenue]=useState("94.6")
const[AppleMacMiniConversion,setAppleMacMiniConversion]=useState("+16")
const[NewestHPEnvyx360Revenue,setNewestHPEnvyx360Revenue]=useState("76.5")
const[NewestHPEnvyx360Conversion,setNewestHPEnvyx360Conversion]=useState("+27")
const[DellInspiron3000Revenue,setDellInspiron3000Revenue]=useState("69.3")
const[DellInspiron3000Conversion,setDellInspiron3000Conversion]=useState("-9")
const[SonyPlayStation5Revenue,setSonyPlayStation5Revenue]=useState("18.6")
const[SonyPlayStation5Conversion,setSonyPlayStation5Conversion]=useState("+34")
const[XBOXSeriesXRevenue,setXBOXSeriesXRevenue]=useState("29.7")
const[XBOXSeriesXConversion,setXBOXSeriesXConversion]=useState("-21")
const[NintendoSwitchRevenue,setNintendoSwitchRevenue]=useState("10.4")
const[NintendoSwitchConversion,setNintendoSwitchConversion]=useState("+38")
// const[]=useState()
const {adminData}=useGetAdminData();
// console.log(adminData[0]);
useEffect(() => {
  if (adminData && adminData.length >= 0) {
    setUserProfileDesignation(adminData[2]);
    setUserProfileDepartment(adminData[3]);
    setUserProfileContact(adminData[1]);
    setUserProfileEmail(adminData[5]);
  }
}, [adminData]);
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row gy-4 mb-4">
          <div className="col-xl-4">
            <div className="card shadow h-100">
              <div className="card-body text-nowrap">
                <h4 className="card-title mb-1 d-flex gap-2 flex-wrap">
                  Welcome {userProfileName}
                </h4>
                <p className="pb-0">Wishing You A Great Day Ahead</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <span className="h6 me-1">Designation:</span>
                    <span>{userProfileDesignation}</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6 me-1">Department:</span>
                    <span>{userProfileDepartment}</span>
                  </li>

                  <li className="mb-2">
                    <span className="h6 me-1">Contact:</span>
                    <span>+91 {userProfileContact}</span>
                  </li>

                  <li>
                    <span className="h6 me-1">Email:</span>
                    <span>{userProfileEmail}</span>
                  </li>
                </ul>
                <Link to="" className="btn btn-sm btn-primary waves-effect waves-light ">
                  View Profile
                </Link>
              </div>
              <img
                src={userProfileImage}
                className="bottom-0 end-0 mb-1 me-1 position-absolute"
                height="140"
                alt="view sales"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="mb-1 card-title">Enquiries</h5>
                <div className="d-flex align-items-center justify-content-center my-4 gap-2">
                  <Link to="#" className="me-1">
                    <span className="badge bg-label-info rounded-pill">
                      Prospet
                    </span>
                  </Link>
                  <Link to="#" className="me-1">
                    <span className="badge bg-label-danger rounded-pill">
                      Lead
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge bg-label-primary rounded-pill">
                      Sales
                    </span>
                  </Link>
                </div>

                <div className="d-flex align-items-center justify-content-around mb-4">
                  <div>
                    <h4 className="mb-1">{EnquiriesProspet}</h4>
                    <span>Prospet</span>
                  </div>
                  <div>
                    <h4 className="mb-1">{EnquiriesLead}k</h4>
                    <span>Lead</span>
                  </div>
                  <div>
                    <h4 className="mb-1">{EnquiriesSales}k</h4>
                    <span>Sales</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-primary d-flex align-items-center me-3"
                  >
                    <i className="mdi mdi-account-check-outline me-1"></i>
                    Enquiries
                  </Link>
                  <Link to="#" className="btn btn-outline-secondary btn-icon">
                    <i className="mdi mdi-email-outline lh-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title m-0 me-2">Follow up</h5>
              </div>
              <div className="card-body">
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/avatars/1.png"
                        alt="facebook"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Today</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{FollowUpToday}</span>
                        <div className="ms-3 badge bg-label-success rounded-pill">
                          {FollowUpTodayPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/avatars/6.png"
                        alt="dribbble"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Upcoming</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{FollowUpUpcoming}</span>
                        <div className="ms-3 badge bg-label-success rounded-pill">
                          {FollowUpUpcomingPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/avatars/3.png"
                        alt="facebook"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Pending</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{FollowUpPending}</span>
                        <div className="ms-3 badge bg-label-danger rounded-pill">
                          {FollowUpPendingPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <Link to="" className="btn btn-sm btn-primary">
                    View Follow
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="card shadow h-100">
              <div className="card-header pb-0">
                <div className="d-flex align-items-end mb-1 flex-wrap gap-2">
                  <h5 className="mb-0 me-2">Sales</h5>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0">Total Sales</span>
                  <div className="ms-3 badge bg-label-secondary rounded-pill">
                    +{SalesTotalSales}%
                  </div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0">Pipeline Sales</span>
                  <div className="ms-3 badge bg-label-primary rounded-pill">
                    +{SalesPipelineSales}%
                  </div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0">Quote</span>
                  <div className="ms-3 badge bg-label-success rounded-pill">
                    +{SalesQuote}%
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div id="totalGrowthChart"></div>
              </div>
              <Link to="" className="btn btn-sm btn-primary">
                View Details
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-primary rounded">
                      <i className="mdi mdi-cart-plus mdi-24px"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-success me-1">+22%</p>
                    <i className="mdi mdi-chevron-up text-success"></i>
                  </div>
                </div>

                <div className="card-info mt-4 pt-1">
                  <h5 className="mb-2">Lead Status</h5>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0 bg-label-danger badge rounded-pill">
                    Hot Lead
                  </span>
                  <div className="fw-bold ms-5 text-danger">{LeadStatusHotLead}</div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0 bg-label-success badge rounded-pill">
                    Cold Lead
                  </span>
                  <div className="fw-bold ms-5 text-success">{LeadStatusColdLead}</div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0 bg-label-warning badge rounded-pill">
                    Warm Lead
                  </span>
                  <div className="fw-bold ms-5 text-warning">{LeadStatusWarmLead}</div>
                </div>
              </div>
              <Link to="" className="btn btn-sm btn-primary">
                View Status
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header pb-0">
                <div className="d-flex align-items-end mb-1 flex-wrap gap-2">
                  <h5 className="mb-0 me-2">Finance</h5>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="mdi mdi-currency-usd mdi-20px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Salary</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceSalary}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-info">
                        <i className="mdi mdi-code-tags mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Earned</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionEarned} Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="mdi mdi-camera-image mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Received</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionReceived}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-warning">
                        <i className="mdi mdi-palette-outline mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Due</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionDue}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link to="" className="btn btn-sm btn-primary">
                  View Status
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header pb-0">
                <div className="d-flex align-items-end mb-1 flex-wrap gap-2">
                  <h5 className="mb-0 me-2">Finance</h5>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="mdi mdi-currency-usd mdi-20px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Salary</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceSalary}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-info">
                        <i className="mdi mdi-code-tags mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Earned</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionEarned} Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="mdi mdi-camera-image mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Received</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionReceived}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-warning">
                        <i className="mdi mdi-palette-outline mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Due</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-label-secondary rounded-pill fw-normal">
                          {FinanceCommissionDue}k Views
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link to="" className="btn btn-sm btn-primary">
                  View Status
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0 me-2">Target</h5>
              </div>
              <div className="card-body">
                <div className="d-none d-lg-flex vehicles-progress-labels mb-3">
                  <div
                    className="vehicles-progress-label on-the-way-text"
                    style={{ width: `${TargetPercentage}%` }}
                  >
                    Target
                  </div>
                  <div
                    className="vehicles-progress-label unloading-text"
                    style={{ width:  `${TargetmonthPercentage}%`}}
                  >
                    Target month
                  </div>
                  <div
                    className="vehicles-progress-label loading-text"
                    style={{ width: `${TargetAnnualPercentage}%` }}
                  >
                    Target Annual
                  </div>
                </div>
                <div
                  className="vehicles-overview-progress progress rounded mb-3"
                  style={{ height: "46px" }}
                >
                  <div
                    className="progress-bar fs-big fw-medium text-start bg-label-light text-heading px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: `${TargetPercentage}%` }}
                    aria-valuenow="39.7"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {`${TargetPercentage}%`}
                  </div>
                  <div
                    className="progress-bar fs-big fw-medium text-start  px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: "20%",backgroundColor:'#666cff' }}
                    aria-valuenow="28.3"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {`${TargetmonthPercentage}%`}
                  </div>
                  <div
                    className="progress-bar fs-big fw-medium text-start text-bg-info px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="17.4"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                   {`${TargetAnnualPercentage}%`}
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table card-table">
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td className="ps-0">
                          <div className="d-flex justify-content-start align-items-center">
                            <h6 className="mb-0 fw-normal">Goal</h6>
                          </div>
                        </td>
                        <td className="pe-0 text-center text-nowrap">
                          <h6 className="mb-0">Sales Unit Value</h6>
                        </td>
                        <td className="pe-0 text-nowrap">
                          <h6 className="mb-0">Total Due</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card shadow">
              <div className="align-items-center card-header d-flex justify-content-between py-3">
                <h5 className="card-title m-0 me-2">Performance Chart</h5>
              </div>
              <div className="card-body py-1">
                <ul className="p-0 m-0">
                  <li className="d-flex mb-4 pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="/images/avatars/4.png"
                        alt="avatar"
                        className="rounded"
                        height={34}
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Call with Woods</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>{PerformanceChartCallwithWood.date} | {PerformanceChartCallwithWood.time}</span>
                        </small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">
                        Business
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-4 pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="/images/avatars/5.png"
                        alt="avatar"
                        className="rounded"
                        height={34}
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Conference call</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>{PerformanceChartConferencecall.date} | {PerformanceChartConferencecall.time}</span>
                        </small>
                      </div>
                      <div className="badge bg-label-warning rounded-pill">
                        Dinner
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="/images/avatars/3.png"
                        alt="avatar"
                        className="rounded"
                        height={34}
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Meeting with Mark</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>{PerformanceChartMeetingwithMark.date} | {PerformanceChartMeetingwithMark.time}</span>
                        </small>
                      </div>
                      <div className="badge bg-label-secondary rounded-pill">
                        Meetup
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card shadow">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <h5 className="card-title m-0 me-2">Visits</h5>
                  <div className="d-flex text-success">
                    <p className="me-1">{VisitsPercentage}%</p>
                    <i className="mdi mdi-chevron-up"></i>
                  </div>
                </div>
                <h4 className="mb-1">${Visits}k</h4>
              </div>
              <div className="card-body pt-2">
                <div className="row mt-3">
                  <div className="col-4">
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <div className="avatar avatar-xs flex-shrink-0">
                        <div className="avatar-initial rounded bg-label-warning">
                          <i className="mdi mdi-cellphone mdi-14px"></i>
                        </div>
                      </div>
                      <p className="mb-0">Mobile</p>
                    </div>
                    <h4 className="mb-0 pt-1 text-nowrap">{`${VisitsMobilePercentage}%`}</h4>
                    <small className="text-muted">{VisitsMobile}</small>
                  </div>
                  <div className="col-4">
                    <div className="divider divider-vertical">
                      <div className="divider-text">
                        <span className="badge-divider-bg bg-label-secondary">
                          VS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 text-end pe-lg-0 pe-xl-2">
                    <div className="d-flex gap-2 justify-content-end align-items-center mb-2">
                      <p className="mb-0">Desktop</p>
                      <div className="avatar avatar-xs flex-shrink-0">
                        <div className="avatar-initial rounded bg-label-primary">
                          <i className="mdi mdi-monitor mdi-14px"></i>
                        </div>
                      </div>
                    </div>
                    <h4 className="mb-0 pt-1 text-nowrap">{`${VisitsDesktop}%`}</h4>
                    <small className="text-muted">{VisitsDesktopPercentage}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <div
                    className="progress w-100 rounded"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "20%" }}
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{ width: "80%" ,backgroundColor:'#666cff'}}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 col-md-6">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="bg-label-info text-center mb-3 pt-2 rounded-3">
                  <img
                    className="img-fluid"
                    src="/images/illustrations/lead2.png"
                    alt="Boy card image"
                    width="130"
                  />
                </div>
                <h5 className="mb-2 pb-1">Lead Funnel</h5>
                <p>
                  Next Generation Frontend Architecture Using Layout Engine And
                  React Native Web.
                </p>
                <div className="row mb-3 g-3">
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="avatar flex-shrink-0 me-2">
                        <span className="avatar-initial rounded bg-label-primary">
                          <i className="mdi mdi-calendar-blank mdi-24px"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-nowrap">{LeadFunnelDate}</h6>
                        <small>Date</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="avatar flex-shrink-0 me-2">
                        <span className="avatar-initial rounded bg-label-primary">
                          <i className="mdi mdi-timer-outline mdi-24px"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-nowrap">{`${LeadFunnelDuration} minutes`}</h6>
                        <small>Duration</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="" className="btn btn-primary w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title m-0 me-2">Customer List</h5>
              </div>
              <div className="table-responsive text-nowrap">
                <table className="table table-borderless">
                  <thead className="border-bottom">
                    <tr>
                      <th className="text-capitalize text-body fw-medium fs-6">
                        Name
                      </th>
                      <th className="text-capitalize text-body fw-medium fs-6">
                        Phone
                      </th>
                      <th className="text-capitalize text-body fw-medium fs-6">
                        Project
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex pt-3">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="/images/avatars/5.png"
                            alt="avatar"
                            className="rounded"
                            height={40}
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Deenabandhu</h6>
                        </div>
                      </td>
                      <td className="px-1 small">{CustomerListPhone1}</td>
                      <td className="px-1">
                        <div className="ms-2">
                          <h6 className="mb-0">RealEstate</h6>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex pt-3">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="/images/avatars/5.png"
                            alt="avatar"
                            className="rounded"
                            height={40}
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Deenabandhu</h6>
                        </div>
                      </td>
                      <td className="px-1 small">{CustomerListPhone2}</td>
                      <td className="px-1">
                        <div className="ms-2">
                          <h6 className="mb-0">RealEstate</h6>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex pt-3">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="/images/avatars/5.png"
                            alt="avatar"
                            className="rounded"
                            height={40}
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Deenabandhu</h6>
                        </div>
                      </td>
                      <td className="px-1 small">{CustomerListPhone3}</td>
                      <td className="px-1">
                        <div className="ms-2">
                          <h6 className="mb-0">RealEstate</h6>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex pt-3">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="/images/avatars/5.png"
                            alt="avatar"
                            className="rounded"
                            height={40}
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Deenabandhu</h6>
                        </div>
                      </td>
                      <td className="px-1 small">{CustomerListPhone4}</td>
                      <td className="px-1">
                        <div className="ms-2">
                          <h6 className="mb-0">RealEstate</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card shadow h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title m-0 me-2">Social Network Visits</h5>
                <div className="dropdown">
                  <button
                    className="btn p-0"
                    type="button"
                    id="socialNetworkList"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical mdi-24px"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="socialNetworkList"
                  >
                    <Link className="dropdown-item" to="">
                      Last 28 Days
                    </Link>
                    <Link className="dropdown-item" to="">
                      Last Month
                    </Link>
                    <Link className="dropdown-item" to="">
                      Last Year
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-1">
                    <h4 className="mb-0">{SocialNetworkVisits}</h4>
                    <span className="text-success ms-2 fw-medium">
                      <i className="mdi mdi-menu-up"></i>
                      <small>{`${SocialNetworkVisitsPercentage}%`}</small>
                    </span>
                  </div>
                  <small>Last 1 Year Visits</small>
                </div>
                <ul className="p-0 m-0">
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/cards/social-facebook.png"
                        alt="facebook"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Facebook</h6>
                        <small>Social Media</small>
                      </div>
                      <div className="d-flex align-items-center ">
                        <span className="h6 mb-0 ">{SocialNetworkVisitsFacebook}</span>
                        <div className="ms-3 badge bg-label-success rounded-pill">
                          {SocialNetworkVisitsFacebookPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/cards/social-dribbble.png"
                        alt="dribbble"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Dribbble</h6>
                        <small>Community</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{SocialNetworkVisitsDribbble}</span>
                        <div className="ms-3 badge bg-label-success rounded-pill">
                         {SocialNetworkVisitsDribbblePercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/cards/social-twitter.png"
                        alt="facebook"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Twitter</h6>
                        <small>Social Media</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{SocialNetworkVisitsTwitter}</span>
                        <div className="ms-3 badge bg-label-danger rounded-pill">
                          {SocialNetworkVisitsTwitterPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/cards/social-instagram.png"
                        alt="instagram"
                        className="me-3"
                        height="34"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Instagram</h6>
                        <small>Social Media</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="h6 mb-0">{SocialNetworkVisitsInstagram}</span>
                        <div className="ms-3 badge bg-label-success rounded-pill">
                          {SocialNetworkVisitsInstagramPercentage}%
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card shadow h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">Weekly Overview</h5>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="weeklySalesDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical mdi-24px"></i>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="weeklySalesDropdown"
                    >
                      <Link className="dropdown-item" to="">
                        Refresh
                      </Link>
                      <Link className="dropdown-item" to="">
                        Update
                      </Link>
                      <Link className="dropdown-item" to="">
                        Share
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-body mb-0">{`Total ${WeeklyOverviewSales}k Sales`}</p>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-6 d-flex align-items-center">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-primary rounded">
                        <i className="mdi mdi-trending-up mdi-24px"></i>
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <small className="text-body mb-1">Net Income</small>
                      <h6 className="mb-0">{`$${WeeklyOverviewNetIncome}K`}</h6>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-warning rounded">
                        <i className="mdi mdi-currency-usd mdi-24px"></i>
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <small className="text-body mb-1">Expense</small>
                      <h6 className="mb-0">{`$${WeeklyOverviewExpense}K`}</h6>
                    </div>
                  </div>
                </div>
                <div id="weeklySalesChart"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card shadow h-100">
              <div className="card-header d-flex justify-content-between">
                <div className="card-title m-0">
                  <h5 className="mb-1">Product List</h5>
                  <p className="text-body mb-0">{ProductListPercentage}% Activity Growth</p>
                </div>
                <div className="dropdown">
                  <button
                    className="btn p-0"
                    type="button"
                    id="earningReportsTabsId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical mdi-24px"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="earningReportsTabsId"
                  >
                    <Link className="dropdown-item" to="">
                      View More
                    </Link>
                    <Link className="dropdown-item" to="">
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <ul
                  className="nav nav-tabs nav-tabs-widget pb-3 gap-4 mx-1 d-flex flex-nowrap"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-link btn active d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-orders-id"
                      aria-controls="navs-orders-id"
                      aria-selected="true"
                    >
                      <div className="avatar">
                        <div className="avatar-initial  rounded">
                          <i className="mdi mdi-cellphone"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-link btn d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-sales-id"
                      aria-controls="navs-sales-id"
                      aria-selected="false"
                    >
                      <div className="avatar">
                        <div className="avatar-initial  rounded">
                          <i className="mdi mdi-television"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-link btn d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-profit-id"
                      aria-controls="navs-profit-id"
                      aria-selected="false"
                    >
                      <div className="avatar">
                        <div className="avatar-initial  rounded">
                          <i className="mdi mdi-gamepad-circle-outline"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-link btn d-flex align-items-center justify-content-center disabled"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-selected="false"
                    >
                      <div className="avatar">
                        <div className="avatar-initial  rounded">
                          <i className="mdi mdi-plus"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div className="tab-content p-0 ms-0 ms-sm-2">
                  <div
                    className="tab-pane fade show active"
                    id="navs-orders-id"
                    role="tabpanel"
                  >
                    <div className="table-responsive text-nowrap">
                      <table className="table table-borderless">
                        <thead className="border-bottom">
                          <tr>
                            <th className="ps-0 fw-medium text-heading">
                              Image
                            </th>
                            <th className="fw-medium ps-0 text-heading">
                              Product Name
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Status
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Revenue
                            </th>
                            <th className="pe-0 text-end fw-medium text-heading">
                              Conversion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/samsung-s22.png"
                                alt="samsung"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Oneplus 9 Pro</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${Oneplus9ProRevenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              {Oneplus9ProConversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/apple-iPhone-13-pro.png"
                                alt="iphone"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Apple iPhone 13 Pro</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${AppleiPhone13ProRevenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              {AppleiPhone13ProConversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/oneplus-9-pro.png"
                                alt="us-flag"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Oneplus 9 Pro</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0 text-heading">
                              ${Oneplus9Pro2Revenue}k
                            </td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              {Oneplus9Pro2Conversion}%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="navs-sales-id"
                    role="tabpanel"
                  >
                    <div className="table-responsive text-nowrap">
                      <table className="table table-borderless">
                        <thead className="border-bottom">
                          <tr>
                            <th className="ps-0 fw-medium text-heading">
                              Image
                            </th>
                            <th className="fw-medium ps-0 text-heading">
                              Product Name
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Status
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Revenue
                            </th>
                            <th className="pe-0 text-end fw-medium text-heading">
                              Conversion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/apple-mac-mini.png"
                                alt="mac-mini"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Apple Mac Mini</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${AppleMacMiniRevenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                             {AppleMacMiniConversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/hp-envy-x360.png"
                                alt="hp-envy"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Newest HP Envy x360</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${NewestHPEnvyx360Revenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              {NewestHPEnvyx360Conversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/dell-inspiron-3000.png"
                                alt="dell"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Dell Inspiron 3000</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${DellInspiron3000Revenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              {DellInspiron3000Conversion}%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="navs-profit-id"
                    role="tabpanel"
                  >
                    <div className="table-responsive text-nowrap">
                      <table className="table table-borderless">
                        <thead className="border-bottom">
                          <tr>
                            <th className="ps-0 fw-medium text-heading">
                              Image
                            </th>
                            <th className="fw-medium ps-0 text-heading">
                              Product Name
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Status
                            </th>
                            <th className="pe-0 fw-medium text-end text-heading">
                              Revenue
                            </th>
                            <th className="pe-0 text-end fw-medium text-heading">
                              Conversion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/sony-play-station-5.png"
                                alt="sony-play-station"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Sony Play Station 5</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${SonyPlayStation5Revenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              {SonyPlayStation5Conversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/xbox-series-x.png"
                                alt="xbox"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">XBOX Series X</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${XBOXSeriesXRevenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              {XBOXSeriesXConversion}%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/cards/nintendo-switch.png"
                                alt="nintendo-switch"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Nintendo Switch</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-label-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">${NintendoSwitchRevenue}k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              {NintendoSwitchConversion}%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-backdrop fade"></div>
    </>
  );
};

export default Dashboard;
