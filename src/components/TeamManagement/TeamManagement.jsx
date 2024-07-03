import { useForm } from "react-hook-form";

function TeamManagement() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span class="text-muted fw-light">Team /</span> Team Management
      </h5>

      <div class="row">
        {/* <!-- FormValidation --> */}
        <div class="col-xl-12 col-md-12">
          <div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body pt-1">
              <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-md-4">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      class="form-control"
                      id="department"
                      {...register("department")}
                      name="Department"
                      placeholder="Department"
                    />
                    <label for="Department">Department</label>
                  </div>
                </div>
                {/* <!--     
                          <div class="col-md-4 mb-4">
                            <div class="form-floating form-floating-outline">
                              <select
                                id=""
                                class="select2 form-select form-select-lg"
                                data-allow-clear="true">
                                <option value="Department1">Department1</option>
                                <option value="Department2">Department2</option>
                                <option value="Department3">Department3</option>
                                <option value="Department4">Department4</option>
                                <option value="Department5">Department5</option>
                              </select>
                              <label for="Department">Department</label>
                            </div>
                          </div> --> */}
                <div class="col-md-4">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      class="form-control"
                      id="teamName"
                      {...register("teamName")}
                      name="Team Name"
                      placeholder="Team Name"
                    />
                    <label for="Team Name">Team Name</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      class="form-control"
                      id="teamLeader"
                      {...register("teamLeader")}
                      placeholder="Team Leader"
                    />
                    <label for="Team Leader">Team Leader</label>
                  </div>
                </div>

                {/* <!--  <div class="col-md-4 mb-4">
                            <div class="form-floating form-floating-outline">
                              <select
                                id=""
                                class="select2 form-select form-select-lg"
                                data-allow-clear="true">
                                <option value="Team Leader1">Team Leader1</option>
                                <option value="Team Leader2">Team Leader2</option>
                                <option value="Team Leader3">Team Leader3</option>
                                <option value="Team Leader4">Team Leader4</option>
                                <option value="Team Leader5">Team Leader5</option>
                              </select>
                              <label for="Team Leader">Team Leader</label>
                            </div>
                          </div> --> */}
                {/* <!-- Multiple --> */}
                <div class="col-md-4 mb-4">
                  <div class="form-floating form-floating-outline form-floating-select2">
                    <div class="position-relative">
                      <select
                        id=""
                        class="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <optgroup label="Team Members">
                          <option value="TM">Team Members</option>
                          <option value="TM">Team Members2</option>
                          <option value="TM">Team Members3</option>
                          <option value="TM">Team Members4</option>
                          <option value="TM">Team Members5</option>
                          <option value="TM">Team Members6</option>
                        </optgroup>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "439.987px" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            {/* <ul class="select2-selection__rendered">
                              <li class="select2-search select2-search--inline">
                                <input
                                  class="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Select value"
                                  style={{ width: "408.388px" }}
                                />
                              </li>
                            </ul> */}
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                   
                  </div>
                </div>
                <div class="mt-4">
                  <button
                    type="submit"
                    class="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    class="btn btn-outline-secondary waves-effect"
                  >
                    Cancel
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

export default TeamManagement;
