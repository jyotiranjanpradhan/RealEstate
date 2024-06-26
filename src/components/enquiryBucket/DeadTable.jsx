function DeadTable() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Enquiry Bucket /</span> Dead Table
        </h5>
        <div class="mb-2 text-end">
          <button
            type="button"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span class="mdi mdi-plus"></span>Dead Table
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Dead Table :</h5>
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
                  <td>Enquiry ID</td>
                  <td>Customer Name</td>
                  <td>Date</td>
                  <td>Source</td>
                  <td>Project</td>
                  <td>Enquiry Type</td>
                  <td>Assign</td>
                  <td>Stage</td>
                  <td>Status</td>
                  <td>Activity</td>
                  <td>History</td>
                  <td>Team</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ID15263</td>
                  <td>Lorem Ipsum</td>
                  <td>01/04/2024</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Customer</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ID15263</td>
                  <td>Lorem Ipsum</td>
                  <td>01/04/2024</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Customer</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                Add Department Name
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
                <div class="col mb-4 mt-2">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      class="form-control"
                      placeholder="Department Name"
                    />
                    <label for="nameSlideTop">Department Name</label>
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
                        // checked=""
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

export default DeadTable;
