function PreSalesEnquiry() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">FollowUp /</span> Pre Sales
          Enquiry
        </h5>
        <div className="mb-2 text-end">
          <a
            href="#"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span className="mdi mdi-plus"></span>Enquiry
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Pre Sales Enquiry :</h5>
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
                  <td>Customer Id</td>
                  <td>Schedule</td>
                  <td>Mode</td>
                  <td>Detail Communication</td>
                  <td>Status</td>
                  <td>Stage</td>
                  <td>Activity Status</td>
                  <td>Rating</td>
                  <td>Buyer Persona</td>
                  <td>Next Follow</td>
                  <td>Discussion Point</td>
                  <td>Communication Set Up</td>
                  <td>Project</td>
                  <td>Product</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>PFCI24031310</td>
                  <td>2024-03-13</td>
                  <td></td>
                  <td></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>PFCI24031310</td>
                  <td>2024-03-13</td>
                  <td></td>
                  <td></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PFCI24031310</td>
                  <td>2024-03-13</td>
                  <td></td>
                  <td></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PFCI24031310</td>
                  <td>2024-03-13</td>
                  <td></td>
                  <td></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PFCI24031310</td>
                  <td>2024-03-13</td>
                  <td></td>
                  <td></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                  <td></td>
                  <td>Lead</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Modal -->
                <div className="modal fade" id="modalTop" tabindex="-1">
                  <div className="modal-dialog">
                    <form className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="modalTopTitle">Add Department Name</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col mb-4 mt-2">
                            <div className="form-floating form-floating-outline">
                              <input type="text" id="" className="form-control" placeholder="Department Name">
                              <label for="nameSlideTop">Department Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="row g-2">
                          <div className="col">
                              <label for="defaultInput" className="form-label">Status</label>
                              <div className="col">
                                  <div className="form-check form-check-inline">
                                    <input name="yes" className="form-check-input" type="radio" value="" id="" checked="">
                                    <label className="form-check-label" for="collapsible-payment-cc">Active</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input name="no" className="form-check-input" type="radio" value="" id="">
                                    <label className="form-check-label" for="collapsible-payment-cash">InActive</label>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary waves-effect" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary waves-effect waves-light">Save</button>
                      </div>
                    </form>
                  </div>
                </div> */}
    </div>
  );
}

export default PreSalesEnquiry;
