import Title from "./subItem/Title";

function BranchInfo() {
  return (
    <>
      <Title value="Branch Info" />
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Branch Info :</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Branch Name</td>
                  <td>Branch ID</td>
                  <td>Branch Type</td>
                  <td>Incorporation No</td>
                  <td>Incorporation Agency</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Angan bashera</td>
                  <td>1256</td>
                  <td>Corporate Office</td>
                  <td>IN1578</td>
                  <td>Agency</td>
                  <td>
                    <a
                      href=""
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i class="mdi mdi-eye"></i>
                    </a>
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
                  <td>Angan bashera</td>
                  <td>659</td>
                  <td>Corporate Office</td>
                  <td>IN1578</td>
                  <td>Agency</td>
                  <td>
                    <a
                      href=""
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i class="mdi mdi-eye"></i>
                    </a>
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
    </>
  );
  {
    /* <!-- Modal -->
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
  </div> */
  }
}

export default BranchInfo;
