function BoardSubForm({ register }) {
  return (
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
              <label for="Incorporation Date">Date of Joining</label>
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
              <label for="Incorporation Date">Date of Leaving</label>
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
  );
}

export default BoardSubForm;
