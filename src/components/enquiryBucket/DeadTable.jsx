function DeadTable() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Enquiry Bucket /</span> Dead
          Table
        </h5>
        <div className="mb-2 text-end">
          <button
            type="button"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span className="mdi mdi-plus"></span>Dead Table
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Dead Table :</h5>
          {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
            <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
          </button> --> */}
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
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

      <div className="modal fade" id="modalTop" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modalTopTitle">
                Add Department Name
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
                <div className="col mb-4 mt-2">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id=""
                      className="form-control"
                      placeholder="Department Name"
                    />
                    <label for="nameSlideTop">Department Name</label>
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
                        // checked=""
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

export default DeadTable;
