import React from "react";
import { useForm } from "react-hook-form";
import { useAddEmSalary } from "../../hooks/employeeManagement/useAddEmSalary";
import { useGetDropDowns } from "../../hooks/useGetDropDowns";

const Salary = () => {
  const { isPending, mutate } = useAddEmSalary();
  const { register, handleSubmit } = useForm();
  const { dropDowns: designations } = useGetDropDowns(
    "department_designation_handler"
  );
  const { dropDowns: departmentName } = useGetDropDowns(
    "department_name_handler"
  );
  const { dropDowns: branchType } = useGetDropDowns(
    "system_branch_type_handler"
  );
  const { dropDowns: grades } = useGetDropDowns("department_grade_handler");
  const { dropDowns: levels } = useGetDropDowns("department_label_handler");

  function onSubmit(data) {
    const formData = new FormData();

    for (let [key, value] of Object.entries(data)) {
      if (key === "joining_letter") formData.append(key, value[0]);
      else formData.append(key, value);
    }
    mutate(formData);
    console.log(data);
  }

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Employee Management /</span>{" "}
          Salary
        </h5>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="bs-stepper wizard-vertical wizard-numbered vertical mt-2">
              <div className="bs-stepper-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div id="account-details-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Joining</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="joining_salary"
                            {...register("joining_salary")}
                            className="form-control"
                            placeholder="Joining Salary In Hand"
                          />
                          <label htmlFor="joiningSalaryInHand">
                            Joining Salary In Hand
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="ctc"
                            {...register("ctc")}
                            className="form-control"
                            placeholder="Joining Salary CTC"
                          />
                          <label htmlFor="joiningSalaryCTC">
                            Joining Salary CTC
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="file"
                            id="joining_letter"
                            {...register("joining_letter")}
                            className="form-control"
                            required
                          />
                          <label htmlFor="joiningLetter">Joining Letter</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            id="joining_date"
                            {...register("joining_date")}
                            className="form-control"
                          />
                          <label htmlFor="joiningDate">Joining Date</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                            id="department"
                            {...register("department")}
                            className="select2 form-select form-select-lg"
                            data-allow-clear="true"
                          >
                            <option>department</option>
                            {departmentName?.map((el) => (
                              <option value={el.departmentid}>{el.name}</option>
                            ))}
                          </select>
                          <label htmlFor="department">Department</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                            id="designation"
                            {...register("designation")}
                            className="select2 form-select form-select-lg"
                            data-allow-clear="true"
                          >
                            <option>designation</option>
                            {designations?.map((el) => (
                              <option value={el.id}>{el.designation}</option>
                            ))}
                          </select>
                          <label htmlFor="designation">Designation</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                            id="level"
                            {...register("level")}
                            className="select2 form-select form-select-lg"
                            data-allow-clear="true"
                          >
                            <option>level</option>
                            {levels?.map((el) => (
                              <option value={el.id}>
                                {el.label_description}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="level">Level</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                            id="grade"
                            {...register("grade")}
                            className="select2 form-select form-select-lg"
                            data-allow-clear="true"
                          >
                            <option>grade</option>
                            {grades?.map((el) => (
                              <option value={el.id}>
                                {el.grade_description}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="grade">Grade</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                            id="branch"
                            {...register("branch")}
                            className="select2 form-select form-select-lg"
                            data-allow-clear="true"
                          >
                            <option>branch type</option>
                            {branchType?.map((el) => (
                              <option value={el.id}>{el.type_name}</option>
                            ))}
                          </select>
                          <label htmlFor="branch">Branch</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="personal-info-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Increment</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            id="increment_date"
                            {...register("increment_date")}
                            className="form-control"
                          />
                          <label htmlFor="incrementDate">Increment Date</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="increased_salary"
                            {...register("increment_salary")}
                            className="form-control"
                            placeholder="Increased Salary In Hand"
                          />
                          <label htmlFor="increasedSalaryInHand">
                            Increased Salary In Hand
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="increased_ctc"
                            {...register("increment_ctc")}
                            className="form-control"
                            placeholder="Increased Salary CTC"
                          />
                          <label htmlFor="increasedSalaryCTC">
                            Increased Salary CTC
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="social-links" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Promotion</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            id="promotion_date"
                            {...register("promotion_date")}
                            className="form-control"
                          />
                          <label htmlFor="promotionDate">Promotion Date</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="social-links-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Transfer</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            id="transfer_date"
                            {...register("transfer_date")}
                            className="form-control"
                          />
                          <label htmlFor="transferDate">Transfer Date</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button
                          className="btn btn-primary btn-next"
                          type="submit"
                        >
                          <span className="align-middle d-sm-inline-block d-none me-sm-1">
                            Submit
                          </span>
                          <i className="mdi mdi-check"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Salary;
