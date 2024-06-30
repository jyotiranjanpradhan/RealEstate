function EnquiryStage() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5 className="mb-1">
        <span className="text-muted fw-light">Enquiry Bucket /</span> Lead
        Enquiry Stage
      </h5>
      <div className="mb-2 text-end">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          data-bs-toggle="modal"
          data-bs-target="#modalvisit"
        >
          <span>
            <i className="mdi mdi-plus me-0 me-sm-1"></i>
          </span>{" "}
          Lead Enquiry Stage
        </button>
      </div>

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Lead Enquiry:</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Lead Stage Name</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lorem Ipsum</td>
                  <td>No</td>
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
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lorem Ipsum</td>
                  <td>No</td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalvisit"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="">
                Add Lead Enquiry Stage
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
                <div className="col-md-12 mt-2 mb-2">
                  <label for="defaultInput" className="form-label">
                    Lead Stage Name
                  </label>
                  <input
                    id=""
                    className="form-control"
                    type="text"
                    placeholder="Lead Stage Name"
                    autocomplete="off"
                  />
                </div>
                {/* <!--    <div className="col-md-12 mb-2">
                              <label for="defaultSelect" className="form-label">Type Of Communication</label>
                              <select id="" className="form-select">
                                <option>Default</option>
                                <option value="Source Mode">Source Mode</option>
                                <option value="Communication Mode">Communication Mode</option>
                              </select>
                          </div> --> */}
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

export default EnquiryStage;
