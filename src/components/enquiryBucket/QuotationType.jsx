function QuotationType() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5 class="mb-1">
        <span class="text-muted fw-light">Enquiry Bucket /</span> Quotation Type
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
          Quotation
        </button>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Quotation :</h5>
          {/* <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                        <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                      </button> --> */}
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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

      <div
        className="modal fade"
        id="modalTop"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="">
                Add Quotation Type
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
                <div class="col mt-2">
                  <div class="mb-3">
                    <label for="defaultSelect" class="form-label">
                      Name
                    </label>
                    <select id="" class="form-select">
                      <option>Name</option>
                      <option value="1">Demo</option>
                      <option value="2">Demo</option>
                      <option value="3">Demo</option>
                    </select>
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

export default QuotationType;
