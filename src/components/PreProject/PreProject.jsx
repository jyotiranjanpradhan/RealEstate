import { Link } from "react-router-dom";
import PreProjectTable from "./PreProjectTable";

function PreProject() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Pre - Project /</span> New Project
          Development
        </h5>
        <div class="mb-2 text-end">
          <Link
            to={"/preProject/newProject"}
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span class="mdi mdi-plus"></span>Project
          </Link>
        </div>
      </div>
      <PreProjectTable />

      {/* <!-- Modal -->
  <div class="modal fade" id="modalTop" tabindex="-1">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="modalTopTitle">Angan bashera Pre Purchase</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mb-4 mt-2">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="" required="">
                <label class="form-check-label" for="bs-validation-checkbox">SALE AGGREMENT</label>
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

export default PreProject;
