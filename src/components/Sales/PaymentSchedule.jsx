import { Link } from "react-router-dom";

function PaymentSchedule() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Sales /</span> Payment Schedule
        </h5>
        <div className="mb-2 text-end">
          <Link
            to="/sales/addPaymentSchedule"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span className="mdi mdi-plus"></span> Payment Schedule
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Schedule List :</h5>
          {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
          <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
        </button> --> */}
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive text-nowrap">
            <div
              id="companyinfo_table_wrapper"
              className="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className="dataTables_length"
                    id="companyinfo_table_length"
                  >
                    <label>
                      Show{" "}
                      <select
                        name="companyinfo_table_length"
                        aria-controls="companyinfo_table"
                        className="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    id="companyinfo_table_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="companyinfo_table"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row dt-row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered dataTable no-footer"
                    id="companyinfo_table"
                    aria-describedby="companyinfo_table_info"
                    style={{ width: "1357px" }}
                  >
                    <thead className="table-secondary">
                      <tr>
                        <td
                          className="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="SL No: activate to sort column descending"
                          style={{ width: "66.2px" }}
                        >
                          SL No
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Sales ID: activate to sort column ascending"
                          style={{ width: "140.2px" }}
                        >
                          Sales ID
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Project: activate to sort column ascending"
                          style={{ width: "76.2px" }}
                        >
                          Project
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Product: activate to sort column ascending"
                          style={{ width: "90.2px" }}
                        >
                          Product
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "109.2px" }}
                        >
                          Date
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Instalment Stage: activate to sort column ascending"
                          style={{ width: "164.2px" }}
                        >
                          Instalment Stage
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Statement: activate to sort column ascending"
                          style={{ width: "106.2px" }}
                        >
                          Statement
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Amount: activate to sort column ascending"
                          style={{ width: "82.2px" }}
                        >
                          Amount
                        </td>
                        <td
                          className="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "102px" }}
                        >
                          Action
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td className="sorting_1">1</td>
                        <td>Angan bashera</td>
                        <td>1256</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_schedule_view.php"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">2</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_schedule_view.php"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">3</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">4</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">5</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i className="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            className="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="companyinfo_table_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 5 of 5 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="companyinfo_table_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="companyinfo_table_previous"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="previous"
                          tabindex="0"
                          className="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="companyinfo_table"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="companyinfo_table_next"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="next"
                          tabindex="0"
                          className="page-link"
                        >
                          Next
                        </a>
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
  );
}

export default PaymentSchedule;
