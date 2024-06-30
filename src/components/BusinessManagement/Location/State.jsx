function State() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5 class="mb-1">
        <span class="text-muted fw-light">Location Master /</span> State
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
          State
        </button>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">State :</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>State</td>
                  <td>Country</td>
                  <td>Language</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Odisha</td>
                  <td>India</td>
                  <td>Odia</td>
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
                  <td>Odisha</td>
                  <td>India</td>
                  <td>Odia</td>
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

      <div class="modal fade" id="modalTop" tabIndex="-1">
        <div class="modal-dialog">
          <form class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="modalTopTitle">
                Add State
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 mb-4 mt-2">
                  <div class="form-floating form-floating-outline form-floating-select2">
                    <div class="position-relative">
                      <select
                        id=""
                        class="select2 form-select select2-hidden-accessible"
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="3">
                          Select
                        </option>
                        <option value="Australia">Australia</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "auto" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2--container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2--container"
                              role="textbox"
                              aria-readonly="true"
                            >
                              <span class="select2-selection__placeholder">
                                Select value
                              </span>
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                    <label for="country">Country</label>
                  </div>
                </div>
                <div class="col-md-12 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="State Name"
                    />
                    <label for="nameSlideTop">State Name</label>
                  </div>
                </div>
                <div class="col-md-12 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="Language"
                    />
                    <label for="nameSlideTop">Language</label>
                  </div>
                </div>
              </div>
              <div class="row g-2">
                <div class="col">
                  <label for="defaultInput" class="form-label">
                    Status
                  </label>
                  <div class="col">
                    <div class="form-check form-check-inline">
                      <input
                        name="yes"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id=""
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-payment-cc"
                      >
                        Active
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        name="no"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id=""
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-payment-cash"
                      >
                        InActive
                      </label>
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

export default State;
