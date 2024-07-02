function Zone() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5 className="mb-1">
        <span className="text-muted fw-light">Location Master /</span> Zone and
        Segment
      </h5>
      <div className="mb-2 text-end">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          data-bs-toggle="modal"
          data-bs-target="#modalTop"
        >
          <span>
            <i className="mdi mdi-plus me-0 me-sm-1"></i>
          </span>{" "}
          Add Zone
        </button>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Zone and Segment :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Country</td>
                  <td>State</td>
                  <td>District</td>
                  <td>Zone Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>Odisha</td>
                  <td>Khordha</td>
                  <td>Zone Name</td>
                  <td>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>India</td>
                  <td>Odisha</td>
                  <td>Khordha</td>
                  <td>Zone Name</td>
                  <td>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalTop"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modalTopTitle">
                Add Zone and Segment
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-2">
                <div className="col-12 mb-2">
                  <label for="defaultInput" className="form-label">
                    Zone Name
                  </label>
                  <input
                    id=""
                    className="form-control"
                    type="text"
                    placeholder="Zone Name"
                    autocomplete="off"
                  />
                </div>
                <div className="col-12 mb-2">
                  <label className="form-check-label">Zone Parameters</label>
                </div>
                <div className="col-12 mt-2">
                  <div className="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      className="form-check-input form-check-input-payment"
                      type="radio"
                      value="credit-card"
                      id="collapsible-payment-cc"
                      onchange="showFields(1)"
                    />
                    <label
                      className="form-check-label"
                      for="collapsible-payment-cc"
                    >
                      Country
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      className="form-check-input form-check-input-payment"
                      type="radio"
                      value="cash"
                      id="collapsible-payment-cash"
                      onchange="showFields(2)"
                    />
                    <label
                      className="form-check-label"
                      for="collapsible-payment-cash"
                    >
                      State
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      className="form-check-input form-check-input-payment"
                      type="radio"
                      value="cash"
                      id="collapsible-payment-cash"
                      onchange="showFields(3)"
                    />
                    <label
                      className="form-check-label"
                      for="collapsible-payment-cash"
                    >
                      District
                    </label>
                  </div>
                </div>

                <div className="col-12 d-none country-list">
                  <div className="mb-3">
                    <label for="largeSelect" className="form-label">
                      Country
                    </label>
                    <div className="position-relative">
                      <select
                        id=""
                        className="select2 form-select select2-hidden-accessible"
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
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
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
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-none state-list">
                  <div className="mb-3">
                    <label for="largeSelect" className="form-label">
                      State
                    </label>
                    <div className="position-relative">
                      <select
                        id=""
                        className="select2 form-select select2-hidden-accessible"
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
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4"
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
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
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-none district-list">
                  <div className="mb-3">
                    <label for="largeSelect" className="form-label">
                      District
                    </label>
                    <div className="position-relative">
                      <select
                        id=""
                        className="select2 form-select select2-hidden-accessible"
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
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="6"
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
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
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary waves-effect"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
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

export default Zone;
