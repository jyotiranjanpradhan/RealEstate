import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import './vendor/css/rtl/core.css'
const RolesAndRights = () => {
  const [show, setShow] = useState(false);
  const handleclick = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="content-wrapper">
        {/* <!-- Content --> */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h5>
            <span className="text-muted fw-light">System Admin /</span> Roles
            &amp; Right
          </h5>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 4 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Vinnie Mostowy"
                        data-bs-original-title="Vinnie Mostowy"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Allen Rieske"
                        data-bs-original-title="Allen Rieske"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Julee Rossignol"
                        data-bs-original-title="Julee Rossignol"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/6.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Administrator</h4>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 7 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Jimmy Ressula"
                        data-bs-original-title="Jimmy Ressula"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/4.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="John Doe"
                        data-bs-original-title="John Doe"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kristi Lawker"
                        data-bs-original-title="Kristi Lawker"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/2.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Manager</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 5 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Andrew Tye"
                        data-bs-original-title="Andrew Tye"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/6.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Rishi Swaat"
                        data-bs-original-title="Rishi Swaat"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/8.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Rossie Kim"
                        data-bs-original-title="Rossie Kim"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/2.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Users</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal "
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 3 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kim Karlos"
                        data-bs-original-title="Kim Karlos"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/3.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Katy Turner"
                        data-bs-original-title="Katy Turner"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/7.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Peter Adward"
                        data-bs-original-title="Peter Adward"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Support</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Total 2 users</p>
                    <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Kim Merchent"
                        data-bs-original-title="Kim Merchent"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/1.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Sam D'souza"
                        data-bs-original-title="Sam D'souza"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/3.png"
                          alt="Avatar"
                        />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar pull-up"
                        aria-label="Nurvi Karlos"
                        data-bs-original-title="Nurvi Karlos"
                      >
                        <img
                          className="rounded-circle"
                          src="images/avatars/5.png"
                          alt="Avatar"
                        />
                      </li>
                      <li className="avatar">
                        <span
                          className="avatar-initial rounded-circle pull-up bg-lighter text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="3 more"
                        >
                          +3
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="role-heading">
                      <h4 className="mb-1 text-body">Restricted User</h4>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#addRoleModal"
                        className="role-edit-modal"
                      >
                        <span>Edit Role</span>
                      </Link>
                    </div>
                    <Link to="" className="text-muted">
                      <i className="mdi mdi-content-copy mdi-20px" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card h-100">
                <div className="row h-100">
                  <div className="col-5">
                    <div className="d-flex align-items-end h-100 justify-content-center">
                      <img
                        src="images/cards/add-new-role-illustration.png"
                        className="img-fluid"
                        alt="Image"
                        width={70}
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="card-body text-sm-end text-center ps-sm-0">
                      <button
                        onClick={handleclick}
                        data-bs-target="#addRoleModal"
                        data-bs-toggle="modal"
                        className="btn btn-primary mb-3 text-nowrap add-new-role waves-effect waves-light"
                      >
                        Add Role
                      </button>
                      <p className="mb-0">Add role, if it does not exist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Role Table */}
              <div className="card">
                <div className="card-datatable table-responsive">
                  <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                    <div className="row mx-2">
                      <div className="col-sm-12 col-md-4 col-lg-6">
                        <div
                          className="dataTables_length"
                          id="DataTables_Table_0_length"
                        >
                          <label>
                            Show
                            <select
                              name="DataTables_Table_0_length"
                              aria-controls="DataTables_Table_0"
                              className="form-select"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center align-items-center flex-sm-nowrap flex-wrap me-1">
                          <div className="me-3">
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search
                                <input
                                  type="search"
                                  className="form-control"
                                  placeholder="Search.."
                                  aria-controls="DataTables_Table_0"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="user_role w-px-200 pb-3 pb-sm-0">
                            <select
                              id="UserRole"
                              className="form-select text-capitalize"
                            >
                              <option value="">Select Role</option>
                              <option value="Admin" className="text-capitalize">
                                Admin
                              </option>
                              <option
                                value="Author"
                                className="text-capitalize"
                              >
                                Author
                              </option>
                              <option
                                value="Editor"
                                className="text-capitalize"
                              >
                                Editor
                              </option>
                              <option
                                value="Maintainer"
                                className="text-capitalize"
                              >
                                Maintainer
                              </option>
                              <option
                                value="Subscriber"
                                className="text-capitalize"
                              >
                                Subscriber
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <table
                      className="datatables-users table dataTable no-footer dtr-column collapsed"
                      id="DataTables_Table_0"
                      aria-describedby="DataTables_Table_0_info"
                      style={{ width: "" }}
                    >
                      <thead className="table-light">
                        <tr>
                          <th
                            className="control sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 0 }}
                            aria-label=""
                          ></th>
                          <th
                            className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 18 }}
                            data-col={1}
                            aria-label=""
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                          </th>
                          <th
                            className="sorting sorting_desc"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 233 }}
                            aria-label="User: activate to sort column ascending"
                            aria-sort="descending"
                          >
                            User
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 97 }}
                            aria-label="Role: activate to sort column ascending"
                          >
                            Role
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 67 }}
                            aria-label="Plan: activate to sort column ascending"
                          >
                            Plan
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 92 }}
                            aria-label="Billing: activate to sort column ascending"
                          >
                            Billing
                          </th>
                          <th
                            className="sorting dtr-hidden"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 0, display: "" }}
                            aria-label="Status: activate to sort column ascending"
                          >
                            Status
                          </th>
                          <th
                            className="sorting_disabled dtr-hidden"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: 0, display: "" }}
                            aria-label="Actions"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <img
                                    src="images/avatars/2.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Zsazsa McCleverty
                                  </span>
                                </Link>
                                <small>zmcclevertye@soundcloud.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                              Maintainer
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Enterprise</span>
                          </td>
                          <td>Auto Debit</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-success"
                              text-capitalized=""
                            >
                              Active
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <img
                                    src="images/avatars/7.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Yoko Pottie
                                  </span>
                                </Link>
                                <small>ypottiec@privacy.gov.au</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-account-outline mdi-20px text-primary me-2" />
                              Subscriber
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Basic</span>
                          </td>
                          <td>Auto Debit</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-secondary"
                              text-capitalized=""
                            >
                              Inactive
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <img
                                    src="images/avatars/6.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Wesley Burland
                                  </span>
                                </Link>
                                <small>wburlandj@uiuc.edu</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-pencil-outline mdi-20px text-info me-2" />
                              Editor
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Team</span>
                          </td>
                          <td>Auto Debit</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-secondary"
                              text-capitalized=""
                            >
                              Inactive
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-initial rounded-circle bg-label-dark">
                                    VK
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Vladamir Koschek
                                  </span>
                                </Link>
                                <small>vkoschek17@abc.net.au</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-cog-outline mdi-20px text-warning me-2" />
                              Author
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Team</span>
                          </td>
                          <td>Manual - Paypal</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-success"
                              text-capitalized=""
                            >
                              Active
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-initial rounded-circle bg-label-info">
                                    TW
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Tyne Widmore
                                  </span>
                                </Link>
                                <small>twidmore12@bravesites.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-account-outline mdi-20px text-primary me-2" />
                              Subscriber
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Team</span>
                          </td>
                          <td>Manual - Cash</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-warning"
                              text-capitalized=""
                            >
                              Pending
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-initial rounded-circle bg-label-primary">
                                    TB
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Travus Bruntjen
                                  </span>
                                </Link>
                                <small>tbruntjeni@sitemeter.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-laptop mdi-20px text-danger me-2" />
                              Admin
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Enterprise</span>
                          </td>
                          <td>Manual - Cash</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-success"
                              text-capitalized=""
                            >
                              Active
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <img
                                    src="images/avatars/1.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Stu Delamaine
                                  </span>
                                </Link>
                                <small>sdelamainek@who.int</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-cog-outline mdi-20px text-warning me-2" />
                              Author
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Basic</span>
                          </td>
                          <td>Auto Debit</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-warning"
                              text-capitalized=""
                            >
                              Pending
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-initial rounded-circle bg-label-dark">
                                    SO
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Saunder Offner
                                  </span>
                                </Link>
                                <small>soffner19@mac.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                              Maintainer
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Enterprise</span>
                          </td>
                          <td>Auto Debit</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-warning"
                              text-capitalized=""
                            >
                              Pending
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-initial rounded-circle bg-label-secondary">
                                    SM
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Stephen MacGilfoyle
                                  </span>
                                </Link>
                                <small>smacgilfoyley@bigcartel.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-chart-donut mdi-20px text-success me-2" />
                              Maintainer
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Company</span>
                          </td>
                          <td>Manual - Paypal</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-warning"
                              text-capitalized=""
                            >
                              Pending
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                        <tr className="even">
                          <td className="control" tabIndex={0} style={{}} />
                          <td className="dt-checkboxes-cell">
                            <input
                              type="checkbox"
                              className="dt-checkboxes form-check-input"
                            />
                          </td>
                          <td className="sorting_1">
                            <div className="d-flex justify-content-left align-items-center">
                              <div className="avatar-wrapper">
                                <div className="avatar avatar-sm me-3">
                                  <img
                                    src="images/avatars/6.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <Link to="" className="text-truncate">
                                  <span className="text-heading fw-medium">
                                    Skip Hebblethwaite
                                  </span>
                                </Link>
                                <small>shebblethwaite10@arizona.edu</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-truncate d-flex align-items-center">
                              <i className="mdi mdi-laptop mdi-20px text-danger me-2" />
                              Admin
                            </span>
                          </td>
                          <td>
                            <span className="text-heading">Company</span>
                          </td>
                          <td>Manual - Cash</td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <span
                              className="badge rounded-pill bg-label-secondary"
                              text-capitalized=""
                            >
                              Inactive
                            </span>
                          </td>
                          <td className="dtr-hidden" style={{ display: "" }}>
                            <Link
                              to=""
                              className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                            >
                              <i className="mdi mdi-eye-outline mdi-20px" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row mx-2">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_0_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 50 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_0_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="DataTables_Table_0_previous"
                            >
                              <Link
                                aria-controls="DataTables_Table_0"
                                aria-disabled="true"
                                role="link"
                                data-dt-idx="previous"
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </Link>
                            </li>
                            <li className="paginate_button page-item active">
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                aria-current="page"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </Link>
                            </li>
                            <li className="paginate_button page-item">
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                2
                              </Link>
                            </li>
                            <li className="paginate_button page-item">
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                3
                              </Link>
                            </li>
                            <li className="paginate_button page-item">
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                data-dt-idx={3}
                                tabIndex={0}
                                className="page-link"
                              >
                                4
                              </Link>
                            </li>
                            <li className="paginate_button page-item">
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                data-dt-idx={4}
                                tabIndex={0}
                                className="page-link"
                              >
                                5
                              </Link>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="DataTables_Table_0_next"
                            >
                              <Link
                                to=""
                                aria-controls="DataTables_Table_0"
                                role="link"
                                data-dt-idx="next"
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RolesAndRights;
