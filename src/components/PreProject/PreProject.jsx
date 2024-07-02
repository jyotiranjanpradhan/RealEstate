import { Link } from "react-router-dom";
import PreProjectTable from "./PreProjectTable";

function PreProject() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Pre - Project /</span> New
          Project Development
        </h5>
        <div className="mb-2 text-end">
          <Link
            to={"/preProject/newProject"}
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span className="mdi mdi-plus"></span>Project
          </Link>
        </div>
      </div>
      <PreProjectTable />

      {/* <!-- Modal -->
  <div className="modal fade" id="modalTop" tabindex="-1">
    <div className="modal-dialog">
      <form className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="modalTopTitle">Angan bashera Pre Purchase</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12 mb-4 mt-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="" required="">
                <label className="form-check-label" for="bs-validation-checkbox">SALE AGGREMENT</label>
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

export default PreProject;
