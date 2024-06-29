function ProductGoal() {
  return (
    <div class="col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Product Goal</h5>
          <button
            class="btn btn-primary btn-xs btn-primary waves-effect waves-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvaproductgoal"
            aria-controls="offcanvaproductgoal"
          >
            <span class="mdi mdi-plus"></span> Add
          </button>

          <div
            class="offcanvas offcanvas-start w-75"
            tabindex="-1"
            id="offcanvaproductgoal"
            aria-labelledby="offcanvasStartLabel"
          >
            <div class="justify-content-end offcanvas-header">
              <button
                type="button"
                class="btn-close text-bg-light text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
                  <h5 class="mb-0">Product Goal:</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-10 mx-auto">
                      <form action="">
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                Target Number
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="Target Number"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                Achievement Percentage
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="Achievement Percentage"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                Goal
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="Goal"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                Targets
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="Targets"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                UOM
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="UOM"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="mb-3">
                              <label for="defaultInput" class="form-label">
                                Monthly
                              </label>
                              <input
                                id=""
                                class="form-control"
                                type="text"
                                placeholder="Monthly"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div class="col-md-12 col-sm-12 col-12">
                            <label for="defaultInput" class="form-label">
                              Description
                            </label>
                            <div class="form-floating form-floating-outline">
                              <textarea
                                name="Description"
                                class="form-control"
                                id=""
                                rows="2"
                                placeholder="Description"
                                style={{ height: "65px" }}
                              ></textarea>
                              <label for="Short">Description</label>
                            </div>
                          </div>
                        </div>
                        <button class="btn btn-primary d-block ms-auto mt-2 waves-effect waves-light">
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
        <div class="text-nowrap p-3">
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered">
              <thead class="table-secondary">
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
                  <td>-</td>
                  <td>-</td>
                  <td>50%</td>
                  <td>-</td>
                  <td>
                    <a
                      href="goals_targets_view.php"
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i class="mdi mdi-eye"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i class="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <span class="mdi mdi-trash-can-outline"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Product 2</td>
                  <td>INR</td>
                  <td>-</td>
                  <td>-</td>
                  <td>10%</td>
                  <td>-</td>
                  <td>
                    <a
                      href="goals_targets_view.php"
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i class="mdi mdi-eye"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i class="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <span class="mdi mdi-trash-can-outline"></span>
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

export default ProductGoal;
