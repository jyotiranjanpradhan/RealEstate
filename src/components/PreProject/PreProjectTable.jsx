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
            </tbody>
          </table>
          {project?.length === 0 && (
            <h2 className="small">No project create one!!!</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreProjectTable;
