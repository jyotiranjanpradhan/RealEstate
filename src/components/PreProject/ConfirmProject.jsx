import { useGetConfirmProject } from "../../hooks/preProject/useGetConfirmProject";

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

                  <td>Project is Fainalized </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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

                  <td>Project is Fainalized </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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

                  <td>Project is Fainalized </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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

                  <td>Project is Fainalized </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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
                      class="btn btn-xs rounded-pill btn-label-primary waves-effect"
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
