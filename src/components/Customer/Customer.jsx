import { Link } from "react-router-dom";

function Customer() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Customer /</span> Customer
        </h5>
      </div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Customer:</h5>

          <div class="d-flex gap-2">
            <Link
              to="/customer/addCustomer"
              class="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
            >
              <span class="mdi mdi-plus"></span>Customer
            </Link>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive text-nowrap">
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <div class="dataTables_length" id="DataTables_Table_0_length">
                    <label>
                      Show{" "}
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        class="form-select form-select-sm"
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
                <div class="col-sm-12 col-md-5">
                  <div class="dt-action-buttons text-end pt-3 pt-md-0 my-3">
                    <div class="dt-buttons">
                      {" "}
                      <button
                        class="dt-button buttons-collection buttons-colvis btn btn-label-primary"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        type="button"
                        aria-haspopup="dialog"
                      >
                        <span>Column visibility</span>
                        <span class="dt-down-arrow">▼</span>
                      </button>{" "}
                      <button
                        class="dt-button buttons-collection btn btn-label-primary dropdown-toggle me-2"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                      >
                        <span>
                          <i class="mdi mdi-export-variant me-sm-1"></i>{" "}
                          <span class="d-none d-sm-inline-block">Export</span>
                        </span>
                        <span class="dt-down-arrow">▼</span>
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-3 d-flex justify-content-center justify-content-md-end">
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder=""
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <table
                class="table table-bordered myDataTable dataTable no-footer"
                id="DataTables_Table_0"
                aria-describedby="DataTables_Table_0_info"
                style={{ width: "1361px" }}
              >
                <thead class="table-secondary">
                  <tr>
                    <td
                      class="sorting sorting_asc"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                      class="sorting"
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
                  <tr class="odd">
                    <td class="sorting_1">1</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td>abhijitsamantaray6@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <div class="d-inline-block">
                        <a
                          href="customer_view.php"
                          class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="View"
                        >
                          <i class="mdi mdi-eye"></i>
                        </a>
                        <a
                          href="#"
                          class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Edit"
                        >
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="even">
                    <td class="sorting_1">2</td>
                    <td>Akash singh</td>
                    <td>+91 9692155578</td>
                    <td>abhijitsamantaray6@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
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
                    <td>Abhijit Samantaray</td>
                    <td>+91 923278615</td>
                    <td>abhijitsamantaray6@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
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
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
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
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Edit"
                      >
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="even">
                    <td class="sorting_1">6</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Edit"
                      >
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="odd">
                    <td class="sorting_1">7</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Edit"
                      >
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="even">
                    <td class="sorting_1">8</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Edit"
                      >
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="odd">
                    <td class="sorting_1">9</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="Edit"
                      >
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="even">
                    <td class="sorting_1">10</td>
                    <td>Abhijit Samantaray</td>
                    <td>+91 9692128078</td>
                    <td> devnaditya@gmail.com</td>
                    <td>male</td>
                    <td>Bhubaneswar</td>
                    <td>khordha</td>
                    <td>751016</td>
                    <td>-</td>
                    <td>
                      <a
                        href="customer_view.php"
                        class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="View"
                      >
                        <i class="mdi mdi-eye"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
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
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div
                    class="dataTables_info"
                    id="DataTables_Table_0_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 12 entries
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="DataTables_Table_0_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="DataTables_Table_0_previous"
                      >
                        <a
                          aria-controls="DataTables_Table_0"
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
                          aria-controls="DataTables_Table_0"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li class="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
                          role="link"
                          data-dt-idx="1"
                          tabindex="0"
                          class="page-link"
                        >
                          2
                        </a>
                      </li>
                      <li
                        class="paginate_button page-item next"
                        id="DataTables_Table_0_next"
                      >
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
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

export default Customer;
