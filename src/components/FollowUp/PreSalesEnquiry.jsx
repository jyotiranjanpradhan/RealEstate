function PreSalesEnquiry() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">FollowUp /</span> Pre Sales Enquiry
        </h5>
        <div class="mb-2 text-end">
          <a
            href="#"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span class="mdi mdi-plus"></span>Enquiry
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Pre Sales Enquiry :</h5>
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
                <div class="modal fade" id="modalTop" tabindex="-1">
                  <div class="modal-dialog">
                    <form class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title" id="modalTopTitle">Add Department Name</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col mb-4 mt-2">
                            <div class="form-floating form-floating-outline">
                              <input type="text" id="" class="form-control" placeholder="Department Name">
                              <label for="nameSlideTop">Department Name</label>
                            </div>
                          </div>
                        </div>
                        <div class="row g-2">
                          <div class="col">
                              <label for="defaultInput" class="form-label">Status</label>
                              <div class="col">
                                  <div class="form-check form-check-inline">
                                    <input name="yes" class="form-check-input" type="radio" value="" id="" checked="">
                                    <label class="form-check-label" for="collapsible-payment-cc">Active</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <input name="no" class="form-check-input" type="radio" value="" id="">
                                    <label class="form-check-label" for="collapsible-payment-cash">InActive</label>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary waves-effect" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" class="btn btn-primary waves-effect waves-light">Save</button>
                      </div>
                    </form>
                  </div>
                </div> */}
    </div>
  );
}

export default PreSalesEnquiry;
