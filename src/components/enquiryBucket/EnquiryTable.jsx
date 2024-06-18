import { Link } from "react-router-dom";

function EnquiryTable() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Enquiry Bucket /</span> Enquiry
          Table
        </h5>
        <div class="mb-2 text-end">
          <Link
            href="#"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span class="mdi mdi-plus"></span>Enquiry
          </Link>
        </div>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Enquiry Table :</h5>
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
    </div>
  );
}

export default EnquiryTable;
