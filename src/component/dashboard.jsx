import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState({
    Department: "IT",
    Contact: "7978969958",
    Email: "xyz@gmail.com",
    Name: "Abcd",
    Designation: "Development Engineer",
    Image:"/images/avatars/1.png"
  });

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row gy-4 mb-4">
          <div className="col-xl-4">
            <div className="card shadow h-100">
              <div className="card-body text-nowrap">
                <h4 className="card-title mb-1 d-flex gap-2 flex-wrap">
                  Welcome {userProfile.Name}
                </h4>
                <p className="pb-0">Wishing You A Great Day Ahead</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <span className="h6 me-1">Designation:</span>
                    <span>{userProfile.Designation}</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6 me-1">Department:</span>
                    <span>{userProfile.Department}</span>
                  </li>

                  <li className="mb-2">
                    <span className="h6 me-1">Contact:</span>
                    <span>+91 {userProfile.Contact}</span>
                  </li>

                  <li>
                    <span className="h6 me-1">Email:</span>
                    <span>{userProfile.Email}</span>
                  </li>
                </ul>
                <Link to="" className="btn btn-sm btn-primary">
                  View Profile
                </Link>
              </div>
              <img
                src={userProfile.Image}
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
                    <span className="badge bg-info rounded-pill">
                      Prospet
                    </span>
                  </Link>
                  <Link to="#" className="me-1">
                    <span className="badge bg-danger rounded-pill">
                      Lead
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge bg-primary rounded-pill">
                      Sales
                    </span>
                  </Link>
                </div>

                <div className="d-flex align-items-center justify-content-around mb-4">
                  <div>
                    <h4 className="mb-1">244</h4>
                    <span>Prospet</span>
                  </div>
                  <div>
                    <h4 className="mb-1">23.8k</h4>
                    <span>Lead</span>
                  </div>
                  <div>
                    <h4 className="mb-1">2.14k</h4>
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
                        <span className="h6 mb-0">12,348</span>
                        <div className="ms-3 badge bg-success rounded-pill">
                          +12%
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
                        <span className="h6 mb-0">8,450</span>
                        <div className="ms-3 badge bg-success rounded-pill">
                          +32%
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
                        <span className="h6 mb-0">350</span>
                        <div className="ms-3 badge bg-danger rounded-pill">
                          -18%
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
                  <div className="ms-3 badge bg-secondary rounded-pill">
                    +23%
                  </div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0">Pipeline Sales</span>
                  <div className="ms-3 badge bg-primary rounded-pill">
                    +35%
                  </div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0">Quote</span>
                  <div className="ms-3 badge bg-success rounded-pill">
                    +30%
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
                    <div className="avatar-initial bg-primary rounded">
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
                  <span className="mb-0 bg-danger badge rounded-pill">
                    Hot Lead
                  </span>
                  <div className="fw-bold ms-5 text-danger">20</div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0 bg-success badge rounded-pill">
                    Cold Lead
                  </span>
                  <div className="fw-bold ms-5 text-success">50</div>
                </div>
                <div className="align-items-center d-flex mb-1">
                  <span className="mb-0 bg-warning badge rounded-pill">
                    Warm Lead
                  </span>
                  <div className="fw-bold ms-5 text-warning">20</div>
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
                      <span className="avatar-initial rounded bg-primary">
                        <i className="mdi mdi-currency-usd mdi-20px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Salary</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          1.2k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-info">
                        <i className="mdi mdi-code-tags mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Earned</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          834 Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-success">
                        <i className="mdi mdi-camera-image mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Received</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          3.7k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-warning">
                        <i className="mdi mdi-palette-outline mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Due</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          2.5k Views
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
                      <span className="avatar-initial rounded bg-primary">
                        <i className="mdi mdi-currency-usd mdi-20px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Salary</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          1.2k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-info">
                        <i className="mdi mdi-code-tags mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Earned</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          834 Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-success">
                        <i className="mdi mdi-camera-image mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Received</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          3.7k Views
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex pb-1">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-warning">
                        <i className="mdi mdi-palette-outline mdi-24px"></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                        <h6 className="mb-0 lh-sm">Commission Due</h6>
                      </div>
                      <div className="col-sm-4 col-lg-12 col-xxl-4 text-sm-end text-lg-start text-xxl-end">
                        <div className="badge bg-secondary rounded-pill fw-normal">
                          2.5k Views
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
                    style={{ width: "39.7%" }}
                  >
                    Target
                  </div>
                  <div
                    className="vehicles-progress-label unloading-text"
                    style={{ width: "28.3%" }}
                  >
                    Target month
                  </div>
                  <div
                    className="vehicles-progress-label loading-text"
                    style={{ width: "17.4%" }}
                  >
                    Target Annual
                  </div>
                </div>
                <div
                  className="vehicles-overview-progress progress rounded mb-3"
                  style={{ height: "46px" }}
                >
                  <div
                    className="progress-bar fs-big fw-medium text-start bg-light text-heading px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="39.7"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    39.7%
                  </div>
                  <div
                    className="progress-bar fs-big fw-medium text-start bg-primary px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="28.3"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    28.3%
                  </div>
                  <div
                    className="progress-bar fs-big fw-medium text-start text-bg-info px-1 px-lg-3"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="17.4"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    17.4%
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
                          <span>21 Jul | 08:20-10:30</span>
                        </small>
                      </div>
                      <div className="badge bg-primary rounded-pill">
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
                          <span>21 Jul | 08:20-10:30</span>
                        </small>
                      </div>
                      <div className="badge bg-warning rounded-pill">
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
                          <span>21 Jul | 08:20-10:30</span>
                        </small>
                      </div>
                      <div className="badge bg-secondary rounded-pill">
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
                    <p className="me-1">+18.4%</p>
                    <i className="mdi mdi-chevron-up"></i>
                  </div>
                </div>
                <h4 className="mb-1">$42.5k</h4>
              </div>
              <div className="card-body pt-2">
                <div className="row mt-3">
                  <div className="col-4">
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <div className="avatar avatar-xs flex-shrink-0">
                        <div className="avatar-initial rounded bg-warning">
                          <i className="mdi mdi-cellphone mdi-14px"></i>
                        </div>
                      </div>
                      <p className="mb-0">Mobile</p>
                    </div>
                    <h4 className="mb-0 pt-1 text-nowrap">23.5%</h4>
                    <small className="text-muted">2,890</small>
                  </div>
                  <div className="col-4">
                    <div className="divider divider-vertical">
                      <div className="divider-text">
                        <span className="badge-divider-bg bg-secondary">
                          VS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 text-end pe-lg-0 pe-xl-2">
                    <div className="d-flex gap-2 justify-content-end align-items-center mb-2">
                      <p className="mb-0">Desktop</p>
                      <div className="avatar avatar-xs flex-shrink-0">
                        <div className="avatar-initial rounded bg-primary">
                          <i className="mdi mdi-monitor mdi-14px"></i>
                        </div>
                      </div>
                    </div>
                    <h4 className="mb-0 pt-1 text-nowrap">76.5%</h4>
                    <small className="text-muted">22,465</small>
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
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "80%" }}
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
                <div className="bg-info text-center mb-3 pt-2 rounded-3">
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
                        <span className="avatar-initial rounded bg-primary">
                          <i className="mdi mdi-calendar-blank mdi-24px"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-nowrap">17 Nov 23</h6>
                        <small>Date</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="avatar flex-shrink-0 me-2">
                        <span className="avatar-initial rounded bg-primary">
                          <i className="mdi mdi-timer-outline mdi-24px"></i>
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-nowrap">32 minutes</h6>
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
                      <td className="px-1 small">+91 1236547892</td>
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
                      <td className="px-1 small">+91 1236547892</td>
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
                      <td className="px-1 small">+91 1236547892</td>
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
                      <td className="px-1 small">+91 1236547892</td>
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
                    <h4 className="mb-0">28,468</h4>
                    <span className="text-success ms-2 fw-medium">
                      <i className="mdi mdi-menu-up"></i>
                      <small>62%</small>
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
                        <span className="h6 mb-0 ">12,348</span>
                        <div className="ms-3 badge bg-success rounded-pill">
                          +12%
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
                        <span className="h6 mb-0">8,450</span>
                        <div className="ms-3 badge bg-success rounded-pill">
                          +32%
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
                        <span className="h6 mb-0">350</span>
                        <div className="ms-3 badge bg-danger rounded-pill">
                          -18%
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
                        <span className="h6 mb-0">25,566</span>
                        <div className="ms-3 badge bg-success rounded-pill">
                          +42%
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
                <p className="text-body mb-0">Total 85.4k Sales</p>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-6 d-flex align-items-center">
                    <div className="avatar">
                      <div className="avatar-initial bg-primary rounded">
                        <i className="mdi mdi-trending-up mdi-24px"></i>
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <small className="text-body mb-1">Net Income</small>
                      <h6 className="mb-0">$438.5K</h6>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center">
                    <div className="avatar">
                      <div className="avatar-initial bg-warning rounded">
                        <i className="mdi mdi-currency-usd mdi-24px"></i>
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <small className="text-body mb-1">Expense</small>
                      <h6 className="mb-0">$22.4K</h6>
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
                  <p className="text-body mb-0">82% Activity Growth</p>
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
                              <span className="badge rounded-pill bg-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$12.5k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +24%
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
                              <span className="badge rounded-pill bg-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$45k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              -18%
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
                              <span className="badge rounded-pill bg-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0 text-heading">
                              $98.2k
                            </td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +55%
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
                                src="../../assets//img/products/apple-mac-mini.png"
                                alt="mac-mini"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Apple Mac Mini</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$94.6k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +16%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="../../assets//img/products/hp-envy-x360.png"
                                alt="hp-envy"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Newest HP Envy x360</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$76.5k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +27%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="../../assets//img/products/dell-inspiron-3000.png"
                                alt="dell"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Dell Inspiron 3000</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$69.3k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              -9%
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
                                src="/images/products/sony-play-station-5.png"
                                alt="sony-play-station"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Sony Play Station 5</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-warning">
                                Coming Soon
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$18.6k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +34%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="/images/products/xbox-series-x.png"
                                alt="xbox"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">XBOX Series X</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-primary">
                                Out of Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$29.7k</td>
                            <td className="pe-0 text-end fw-medium h6 text-danger">
                              -21%
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <img
                                src="assets/  img/products/nintendo-switch.png"
                                alt="nintendo-switch"
                                className="rounded"
                                height="34"
                              />
                            </td>
                            <td className="h6 ps-0">Nintendo Switch</td>
                            <td className="text-heading text-end pe-0">
                              <span className="badge rounded-pill bg-success">
                                In Stock
                              </span>
                            </td>
                            <td className="h6 mb-0 text-end pe-0">$10.4k</td>
                            <td className="pe-0 text-end fw-medium h6 text-success">
                              +38%
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
