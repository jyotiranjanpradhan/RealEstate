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
    </div>
  );
}

export default PreProject;
