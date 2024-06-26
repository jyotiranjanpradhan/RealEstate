import { useForm } from "react-hook-form";

function Board() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Board
          Directors
        </h5>
        <div class="mb-2 text-end">
          <a
            href="javascript: history.go(-1)"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <h5 class="card-header">Board Directors</h5>
            <div class="card-body">
              <form class="form-repeater" onSubmit={handleSubmit(onSubmit)}>
                <div data-repeater-list="group-a">
                  <div data-repeater-item="">
                    <div class="row g-4">
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="name"
                            {...register("name")}
                            placeholder="Name"
                            autofocus=""
                          />
                          <label for="Name">Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="designation"
                            {...register("designation")}
                            placeholder="Designation"
                            autofocus=""
                          />
                          <label for="Designation">Designation</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="date"
                            id="date_of_joining"
                            {...register("date_of_joining")}
                          />
                          <label for="Incorporation Date">
                            Date of Joining
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="date"
                            id="date_of_leaving"
                            {...register("date_of_leaving")}
                          />
                          <label for="Incorporation Date">
                            Date of Leaving
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="share"
                            {...register("share")}
                            placeholder="%"
                            autofocus=""
                          />
                          <label for="Incorporation No">Share</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="stakeholder"
                            {...register("stakeholder")}
                            placeholder="Stakeholder"
                          />
                          <label for="Incorporation Agency">Stakeholder</label>
                        </div>
                      </div>
                      <div class="col-md-4 col-12 d-flex align-items-center mb-0">
                        <button
                          class="btn btn-outline-danger waves-effect"
                          data-repeater-delete=""
                        >
                          <i class="mdi mdi-close me-1"></i>
                          <span class="align-middle">Delete</span>
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-between">
                  <button
                    class="btn btn-primary waves-effect waves-light"
                    data-repeater-create=""
                  >
                    <i class="mdi mdi-plus me-1"></i>
                    <span class="align-middle">Add</span>
                  </button>
                  <button class="btn btn-primary btn-submit waves-effect waves-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
