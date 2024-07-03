function City() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5 className="mb-1">
        <span className="text-muted fw-light">Location Master /</span> City /
        District
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
          District
        </button>
      </div>

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">City / District :</h5>
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
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>Odisha</td>
                  <td>khordha</td>

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
                  <td>Ganjam</td>

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

      <div className="modal fade" id="modalTop" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modalTopTitle">
                Add City / District
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mb-4 mt-2">
                  <div className="form-floating form-floating-outline form-floating-select2">
                    <div className="position-relative">
                      <select
                        id=""
                        className="select2 form-select select2-hidden-accessible"
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="India" data-select2-id="3">
                          India
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2--container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2--container"
                              role="textbox"
                              aria-readonly="true"
                              title="India"
                            >
                              India
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                    <label for="country">Country</label>
                  </div>
                </div>
                <div className="col-md-12 mb-4 mt-2">
                  <div className="form-floating form-floating-outline form-floating-select2">
                    <div className="position-relative">
                      <select
                        id=""
                        className="select2 form-select select2-hidden-accessible"
                        data-select2-id="4"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="6">
                          Select
                        </option>
                        <option value="Demo 1">Demo 1</option>
                        <option value="Demo 2">Demo 2</option>
                        <option value="Demo 3">Demo 3</option>
                        <option value="Demo 4">Demo 4</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5"
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2--container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2--container"
                              role="textbox"
                              aria-readonly="true"
                            >
                              <span className="select2-selection__placeholder">
                                Select value
                              </span>
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                    <label for="State Name">State Name</label>
                  </div>
                </div>
                <div className="col-md-12 mb-4 mt-2">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      className="form-control"
                      placeholder="District"
                    />
                    <label for="nameSlideTop">District</label>
                  </div>
                </div>
              </div>
              <div className="row g-2">
                <div className="col">
                  <label for="defaultInput" className="form-label">
                    Status
                  </label>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input
                        name="yes"
                        className="form-check-input"
                        type="radio"
                        value=""
                        id=""
                        checked=""
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-payment-cc"
                      >
                        Active
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        name="no"
                        className="form-check-input"
                        type="radio"
                        value=""
                        id=""
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-payment-cash"
                      >
                        InActive
                      </label>
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

export default City;
