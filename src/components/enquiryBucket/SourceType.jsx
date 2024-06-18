function SourceType() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5 class="mb-1">
        <span class="text-muted fw-light">Enquiry Bucket /</span> Source Type
      </h5>
      <div class="mb-2 text-end">
        <button
          type="button"
          class="btn btn-primary waves-effect waves-light"
          data-bs-toggle="modal"
          data-bs-target="#modalvisit"
        >
          <span>
            <i class="mdi mdi-plus me-0 me-sm-1"></i>
          </span>{" "}
          Source Type
        </button>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Source Type:</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Source</td>
                  <td>Medium Type</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Walkin</td>
                  <td>
                    <i class="mdi mdi-facebook mdi-20px me-3"></i>
                    <span class="fw-medium">Social Networks</span>
                  </td>
                  <td>No</td>
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
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Telephone</td>
                  <td>
                    <i class="mdi mdi-youtube-tv mdi-20px me-3"></i>
                    <span class="fw-medium">Television</span>
                  </td>
                  <td>No</td>
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
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Telephone</td>
                  <td>
                    <i class="mdi mdi-newspaper-variant-outline mdi-20px me-3"></i>
                    <span class="fw-medium">Newspaper</span>
                  </td>
                  <td>No</td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Modal -->
                <div class="modal fade" id="modalvisit" tabindex="-1" style="display: none;" aria-hidden="true">
                  <div class="modal-dialog">
                    <form class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title" id="">Add Source Type</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-md-12 mt-2 mb-2">
                            <label for="defaultInput" class="form-label">Source Name</label>
                            <input id="" class="form-control" type="text" placeholder="Source Name" autocomplete="off">
                          </div>
                          <div class="col-md-12 mb-2">
                              <label for="defaultSelect" class="form-label">Type Of Communication</label>
                              <select id="" class="form-select">
                                <option>Default</option>
                                <option value="Source Mode">Source Mode</option>
                                <option value="Medium Type">Medium Type</option>
                              </select>
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

export default SourceType;
