import { useGetProject } from "../../hooks/preProject/useGetProject";
import PreProjectRow from "./PreProjectRow";

function PreProjectTable() {
  const { isPending, project } = useGetProject();
  console.log(project);
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
        <h5 className="mb-0">New Project Development :</h5>
      </div>
      <div className="text-nowrap p-3">
        <div className="table-responsive">
          <table className="table table-bordered" id="all_request_table">
            <thead className="table-secondary">
              <tr>
                <td>SL No</td>
                <td>Project Id</td>
                <td>Project Status</td>
                <td>Project Schedule</td>
                <td>Name</td>
                <td>Type Of Project</td>
                <td>Vendor</td>
                <td>Follow Up</td>
                <td>Price(Unit)</td>
                <td>Area(Sqr. Ft.)</td>
                <td>Advisor</td>
                <td>Location</td>
                <td>Schedule</td>
                <td>Document </td>
                <td>Follow Up</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {project?.map((preProject, index) => (
                <PreProjectRow project={preProject} key={index} />
              ))}

              <tr>
                <td>1</td>
                <td>PR2024358</td>
                <td>Intitiated</td>
                <td>2024-03-16</td>
                <td>Angan bashera</td>
                <td>DUPLEX</td>
                <td>No Vendor</td>
                <td>Final</td>
                <td>52,468</td>
                <td>2500</td>
                <td>No Advaisor</td>
                <td>Nayapalli</td>
                <td>Intitiated</td>

                <td>Project is Fainalized</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-xs rounded-pill btn-label-primary waves-effect"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTop"
                  >
                    Check List
                  </button>
                </td>
                <td>Status</td>
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
  );
}

export default PreProjectTable;
