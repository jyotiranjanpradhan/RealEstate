import { Link } from "react-router-dom";

function PaymentReciept() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Sales /</span> Payment Recipt
        </h5>
        <div class="mb-2 text-end">
          <Link
            to="/sales/addPaymentReciept"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span class="mdi mdi-plus"></span>payment
          </Link>
        </div>
      </div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Payment Recipt :</h5>
          {/* <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
          <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
        </button> --> */}
        </div>
        <div class="card-body pt-0">
          <div class="table-responsive text-nowrap">
            <div
              id="companyinfo_table_wrapper"
              class="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="companyinfo_table_length">
                    <label>
                      Show{" "}
                      <select
                        name="companyinfo_table_length"
                        aria-controls="companyinfo_table"
                        class="form-select form-select-sm"
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
                <div class="col-sm-12 col-md-6">
                  <div id="companyinfo_table_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder=""
                        aria-controls="companyinfo_table"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="row dt-row">
                <div class="col-sm-12">
                  <table
                    class="table table-bordered dataTable no-footer"
                    id="companyinfo_table"
                    aria-describedby="companyinfo_table_info"
                    style={{ width: "1356px" }}
                  >
                    <thead class="table-secondary">
                      <tr>
                        <td
                          class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="SL No: activate to sort column descending"
                          style={{ width: "73.2px" }}
                        >
                          SL No
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Customer ID: activate to sort column ascending"
                          style={{ width: "152.2px" }}
                        >
                          Customer ID
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Enquiry ID: activate to sort column ascending"
                          style={{ width: "113.2px" }}
                        >
                          Enquiry ID
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Quote ID: activate to sort column ascending"
                          style={{ width: "100.2px" }}
                        >
                          Quote ID
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style={{ width: "119.2px" }}
                        >
                          Date
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Receipt Number: activate to sort column ascending"
                          style={{ width: "170.2px" }}
                        >
                          Receipt Number
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Total Amount: activate to sort column ascending"
                          style={{ width: "143.2px" }}
                        >
                          Total Amount
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "110px" }}
                        >
                          Action
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td class="sorting_1">1</td>
                        <td>Angan bashera</td>
                        <td>1256</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i class="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            class="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">2</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i class="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            class="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">3</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i class="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            class="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td class="sorting_1">4</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i class="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            class="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td class="sorting_1">5</td>
                        <td>Angan bashera</td>
                        <td>659</td>
                        <td>Company</td>
                        <td>12/04/2024</td>
                        <td>856974235</td>
                        <td>125</td>
                        <td>
                          <a
                            href="payment_recipt_view.php"
                            class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="View"
                          >
                            <i class="mdi mdi-eye"></i>
                          </a>
                          <a
                            href=""
                            class="btn btn-text-dark btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div
                    class="dataTables_info"
                    id="companyinfo_table_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 5 of 5 entries
                  </div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="companyinfo_table_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="companyinfo_table_previous"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="previous"
                          tabindex="0"
                          class="page-link"
                        >
                          Previous
                        </a>
                      </li>
                      <li class="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="companyinfo_table"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li
                        class="paginate_button page-item next disabled"
                        id="companyinfo_table_next"
                      >
                        <a
                          aria-controls="companyinfo_table"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="next"
                          tabindex="0"
                          class="page-link"
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

export default PaymentReciept;
