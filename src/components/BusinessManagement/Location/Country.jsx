function Country() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5 class="mb-1">
        <span class="text-muted fw-light">Location Master /</span> Country
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
          Country
        </button>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Country :</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Name</td>
                  <td>ISD Code</td>
                  <td>Currency</td>
                  <td>Flag</td>
                  <td>Short Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>INDIA</td>
                  <td>859</td>
                  <td>Rupee</td>
                  <td>
                    <img src="assets/img/icons/brands/ind.png" alt="Avatar" />
                  </td>
                  <td>IND</td>
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
                  <td>United States</td>
                  <td>859</td>
                  <td>Dollar</td>
                  <td>
                    <img src="assets/img/icons/brands/us.png" alt="Avatar" />
                  </td>
                  <td>US</td>
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
                Add Country
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
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="Country"
                    />
                    <label for="nameSlideTop">Country</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="ISD Code"
                    />
                    <label for="nameSlideTop">ISD Code</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="Currency"
                    />
                    <label for="nameSlideTop">Currency</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input type="file" class="form-control" id="" required="" />
                    <label for="basic-default-upload-file">Flag</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="Short Name"
                    />
                    <label for="nameSlideTop">Short Name</label>
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

export default Country;
