import { useForm } from "react-hook-form";
import { useAddTeam } from "../../hooks/teamManagement/useAddTeam";
import { useGetTeam } from "../../hooks/teamManagement/useGetTeam";

function TeamManagement() {
  const { isPending, mutate } = useAddTeam();
  const { isLoading, team } = useGetTeam();

  console.log(team);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    mutate(data, { onSuccess: () => reset() });
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span className="text-muted fw-light">Team /</span> Team Management
      </h5>

      <div className="row">
        {/* <!-- FormValidation --> */}
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-md-4 mb-4">
                  <div className="form-floating form-floating-outline">
                    <select
                      id="department"
                      {...register("department")}
                      className="select2 form-select form-select-lg"
                      data-allow-clear="true"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Department2">Department2</option>
                      <option value="Department3">Department3</option>
                      <option value="Department4">Department4</option>
                      <option value="Department5">Department5</option>
                    </select>
                    <label htmlFor="Department">Department</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="team_name"
                      {...register("team_name")}
                      placeholder="Team Name"
                    />
                    <label htmlFor="Team Name">Team Name</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="team_leader"
                      {...register("team_leader")}
                      placeholder="Team Leader"
                    />
                    <label htmlFor="Team Leader">Team Leader</label>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="form-floating form-floating-outline form-floating-select2">
                    <div className="position-relative">
                      <select
                        id="team_members"
                        {...register("team_members")}
                        className="select2 form-select select2-hidden-accessible"
                        multiple=""
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <optgroup label="Team Members">
                          <option value="TM">Team Members</option>
                          <option value="Alice">Team Members2</option>
                          <option value="TM">Team Members3</option>
                          <option value="TM">Team Members4</option>
                          <option value="TM">Team Members5</option>
                          <option value="TM">Team Members6</option>
                        </optgroup>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style={{ width: "439.987px" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex="-1"
                            aria-disabled="false"
                          >
                            {/* <ul className="select2-selection__rendered">
                              <li className="select2-search select2-search--inline">
                                <input
                                  className="select2-search__field"
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
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary waves-effect"
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
