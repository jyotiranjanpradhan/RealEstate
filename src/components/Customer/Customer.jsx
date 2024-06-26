import { Link } from "react-router-dom";
import { useGetCustomer } from "../../hooks/customer/useGetCustomer";
import CustomerRow from "./CustomerRow";

function Customer() {
  const { customers } = useGetCustomer();
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Customer /</span> Customer
        </h5>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Customer:</h5>

          <div className="d-flex gap-2">
            <Link
              to="/customer/addCustomer"
              className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
            >
              <span className="mdi mdi-plus"></span>Customer
            </Link>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <div className="dataTables_wrapper dt-bootstrap5 no-footer">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div
                    className="dataTables_length"
                    id="DataTables_Table_0_length"
                  >
                    <label>
                      Show{" "}
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        className="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5">
                  <div className="dt-action-buttons text-end pt-3 pt-md-0 my-3">
                    <div className="dt-buttons">
                      {" "}
                      <button
                        className="dt-button buttons-collection buttons-colvis btn btn-label-primary"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        type="button"
                        aria-haspopup="dialog"
                      >
                        <span>Column visibility</span>
                        <span className="dt-down-arrow">▼</span>
                      </button>{" "}
                      <button
                        className="dt-button buttons-collection btn btn-label-primary dropdown-toggle me-2"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                      >
                        <span>
                          <i className="mdi mdi-export-variant me-sm-1"></i>{" "}
                          <span className="d-none d-sm-inline-block">
                            Export
                          </span>
                        </span>
                        <span className="dt-down-arrow">▼</span>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 d-flex justify-content-center justify-content-md-end">
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <table
                className="table table-bordered myDataTable dataTable no-footer"
                id="DataTables_Table_0"
                aria-describedby="DataTables_Table_0_info"
                style={{ width: "1361px" }}
              >
                <thead className="table-secondary">
                  <tr>
                    <td
                      className="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="SL No: activate to sort column descending"
                      style={{ width: "42.2px" }}
                    >
                      SL No
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "127.2px" }}
                    >
                      Name
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Mobile: activate to sort column ascending"
                      style={{ width: "114.2px" }}
                    >
                      Mobile
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Email: activate to sort column ascending"
                      style={{ width: "215.2px" }}
                    >
                      Email
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Gendor: activate to sort column ascending"
                      style={{ width: "53.2px" }}
                    >
                      Gendor
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="City: activate to sort column ascending"
                      style={{ width: "91.2px" }}
                    >
                      City
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="District: activate to sort column ascending"
                      style={{ width: "52.2px" }}
                    >
                      District
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Pincode: activate to sort column ascending"
                      style={{ width: "58.2px" }}
                    >
                      Pincode
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Customer: activate to sort column ascending"
                      style={{ width: "69.2px" }}
                    >
                      Customer
                    </td>
                    <td
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Action: activate to sort column ascending"
                      style={{ width: "70px" }}
                    >
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer) => (
                    <CustomerRow customer={customer} />
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className="dataTables_info"
                    id="DataTables_Table_0_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 12 entries
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
                        <a
                          aria-controls="DataTables_Table_0"
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
                          aria-controls="DataTables_Table_0"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
                          role="link"
                          data-dt-idx="1"
                          tabindex="0"
                          className="page-link"
                        >
                          2
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next"
                        id="DataTables_Table_0_next"
                      >
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
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

export default Customer;
