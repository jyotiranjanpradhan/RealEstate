function FinanceGoal() {
  return (
    <div className="col-md-12 col-sm-12 col-12 mb-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Finace Goal</h5>
          <button
            className="btn btn-primary btn-xs btn-primary waves-effect waves-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvaproductgoal"
            aria-controls="offcanvaproductgoal"
          >
            <span className="mdi mdi-plus"></span> Add
          </button>
          <div
            className="offcanvas offcanvas-start w-75"
            tabindex="-1"
            id="offcanvaproductgoal"
            aria-labelledby="offcanvasStartLabel"
          >
            <div className="justify-content-end offcanvas-header">
              <button
                type="button"
                className="btn-close text-bg-light text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mx-0 flex-grow-0">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
                  <h5 className="mb-0">Finace Goal:</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <form action="">
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                Target Number
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="Target Number"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                Achievement Percentage
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="Achievement Percentage"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                Goal
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="Goal"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                Targets
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="Targets"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                UOM
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="UOM"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="mb-3">
                              <label for="defaultInput" className="form-label">
                                Monthly
                              </label>
                              <input
                                id=""
                                className="form-control"
                                type="text"
                                placeholder="Monthly"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="col-md-12 col-sm-12 col-12">
                            <label for="defaultInput" className="form-label">
                              Description
                            </label>
                            <div className="form-floating form-floating-outline">
                              <textarea
                                name="Description"
                                className="form-control"
                                id=""
                                rows="2"
                                placeholder="Description"
                                style={{ height: "65px" }}
                              ></textarea>
                              <label for="Short">Description</label>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary d-block ms-auto mt-2 waves-effect waves-light">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive text-nowrap">
            <table className="table table-bordered">
              <thead className="table-secondary">
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>UOM</th>
                  <th>Goal</th>
                  <th>Target</th>
                  <th>Achievement</th>
                  <th>monthly</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Product 1</td>
                  <td>INR</td>
                  <td>2</td>
                  <td>-</td>
                  <td>50%</td>
                  <td>-</td>
                  <td>
                    <a
                      href="goals_targets_view.php"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <span className="mdi mdi-trash-can-outline"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Product 2</td>
                  <td>INR</td>
                  <td>3</td>
                  <td>-</td>
                  <td>10%</td>
                  <td>-</td>
                  <td>
                    <a
                      href="goals_targets_view.php"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <span className="mdi mdi-trash-can-outline"></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceGoal;
