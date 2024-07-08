import { useGetConfirmProject } from "../../hooks/preProject/useGetConfirmProject";
import ConfirmProjectRow from "./ConfirmProjectRow";

function ConfirmProject() {
  const { isPending, project } = useGetConfirmProject();
  console.log(project);
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Pre - Project /</span> Confirm
          Project Development
        </h5>
      </div>

      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Confirm Project Development :</h5>
        </div>
        <div class="text-nowrap p-3">
          <div class="table-responsive">
            <table class="table table-bordered" id="all_request_table">
              <thead class="table-secondary">
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
                  <ConfirmProjectRow confirmProject={preProject} key={index} />
                ))}
              </tbody>
              {project?.length === 0 && <h2>No project create one!!!</h2>}
            </table>
          </div>
        </div>
      </div>
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
                </div>*/}
    </div>
  );
}

export default ConfirmProject;
