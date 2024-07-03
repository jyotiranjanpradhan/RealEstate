import Title from "./subItem/Title";

function BranchInfo() {
  return (
    <>
      <Title value="Branch Info" to="/systemAdmin/branchInfoForm" />
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Branch Info :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
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
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
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
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
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
  </div> */
  }
}

export default BranchInfo;
