function Area() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5 class="mb-1">
        <span class="text-muted fw-light">Business Management /</span> Area
      </h5>
      <div class="mb-2 text-end">
        <button
          type="button"
          class="btn btn-primary waves-effect waves-light"
          data-bs-toggle="modal"
          data-bs-target="#modalTop"
        >
          <span>
            <i class="mdi mdi-plus me-0 me-sm-1"></i>
          </span>{" "}
          Area
        </button>
      </div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Area :</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Country</td>
                  <td>State</td>
                  <td>District</td>
                  <td>Area Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>Odisha</td>
                  <td>Khordha</td>
                  <td>-</td>
                  <td>
                    <a
                      href=""
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i class="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i class="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>India</td>
                  <td>Odisha</td>
                  <td>Khordha</td>
                  <td>-</td>
                  <td>
                    <a
                      href=""
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i class="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i class="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalTop" tabIndex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <form class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="modalTopTitle">
                Add Area
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row g-2">
                <div class="col-12 mb-2">
                  <label for="defaultInput" class="form-label">
                    Area Name
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Area Name"
                    autocomplete="off"
                  />
                </div>
                <div class="col-12 mb-2">
                  <label class="form-check-label">Zone Parameters</label>
                </div>
                <div class="col-12 mt-2">
                  <div class="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      class="form-check-input form-check-input-payment"
                      type="radio"
                      value="credit-card"
                      id="collapsible-payment-cc"
                      onchange="showFields(1)"
                    />
                    <label
                      class="form-check-label"
                      for="collapsible-payment-cc"
                    >
                      Country
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      class="form-check-input form-check-input-payment"
                      type="radio"
                      value="cash"
                      id="collapsible-payment-cash"
                      onchange="showFields(2)"
                    />
                    <label
                      class="form-check-label"
                      for="collapsible-payment-cash"
                    >
                      State
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      class="form-check-input form-check-input-payment"
                      type="radio"
                      value="cash"
                      id="collapsible-payment-cash"
                      onchange="showFields(3)"
                    />
                    <label
                      class="form-check-label"
                      for="collapsible-payment-cash"
                    >
                      District
                    </label>
                  </div>
                </div>

                <div class="col-12 d-none country-list">
                  <div class="mb-3">
                    <label for="largeSelect" class="form-label">
                      Country
                    </label>
                    <div class="position-relative">
                      <select
                        id=""
                        class="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>Select Country</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="India">India</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "auto" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul class="select2-selection__rendered">
                              <li class="select2-search select2-search--inline">
                                <input
                                  class="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Select value"
                                  style={{ width: "0px" }}
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 d-none state-list">
                  <div class="mb-3">
                    <label for="largeSelect" class="form-label">
                      State
                    </label>
                    <div class="position-relative">
                      <select
                        id=""
                        class="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="3"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>Select State</option>
                        <option value="State">State 1</option>
                        <option value="State">State 2</option>
                        <option value="State">State 3</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4"
                        style={{ width: "auto" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul class="select2-selection__rendered">
                              <li class="select2-search select2-search--inline">
                                <input
                                  class="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Select value"
                                  style={{ width: "0px" }}
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 d-none district-list">
                  <div class="mb-3">
                    <label for="largeSelect" class="form-label">
                      District
                    </label>
                    <div class="position-relative">
                      <select
                        id=""
                        class="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="5"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>Select District</option>
                        <option value="District">District 1</option>
                        <option value="District">District 2</option>
                        <option value="District">District 3</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="6"
                        style={{ width: "auto" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul class="select2-selection__rendered">
                              <li class="select2-search select2-search--inline">
                                <input
                                  class="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Select value"
                                  style={{ width: "0px" }}
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary waves-effect"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Area;
