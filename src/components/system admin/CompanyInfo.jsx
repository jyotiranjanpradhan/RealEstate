import Title from "./subItem/Title";

function CompanyInfo() {
  return (
    <>
      <Title value="Company" to="/systemAdmin/companyInfoForm" />
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Company Info :</h5>
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
                      Show
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
                    style={{ width: "1354px" }}
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
                          style={{ width: "99.2" }}
                        >
                          SL No
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Company Name: activate to sort column ascending"
                          style={{ width: "216.2px" }}
                        >
                          Company Name
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Company ID: activate to sort column ascending"
                          style={{ width: "172.2px" }}
                        >
                          Company ID
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Company Type: activate to sort column ascending"
                          style={{ width: "215.2px" }}
                        >
                          Company Type
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Incorporation No: activate to sort column ascending"
                          style={{ width: "225.2px" }}
                        >
                          Incorporation No
                        </td>
                        <td
                          class="sorting"
                          tabindex="0"
                          aria-controls="companyinfo_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: "146px" }}
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
                        <td>Head Office</td>
                        <td>IN1578</td>
                        <td>
                          <a
                            href="companyinfo_view.php"
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
                        <td>Corporate Office</td>
                        <td>IN1578</td>
                        <td>
                          <a
                            href="companyinfo_view.php"
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
                        <td>Corporate Office</td>
                        <td>IN1578</td>
                        <td>
                          <a
                            href="companyinfo_view.php"
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
                        <td>Head Office</td>
                        <td>IN1578</td>
                        <td>
                          <a
                            href="companyinfo_view.php"
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
                        <td>Corporate Office</td>
                        <td>IN1578</td>
                        <td>
                          <a
                            href="companyinfo_view.php"
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
    </>
  );
}

export default CompanyInfo;
