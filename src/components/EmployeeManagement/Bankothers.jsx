import React from "react";
import "./Bankothers";
import { useForm } from "react-hook-form";
import { useAddEmBank } from "../../hooks/employeeManagement/useAddEmBank";
const Bankothers = () => {
  const { register, handleSubmit } = useForm();
  const { isPending, mutate, reset } = useAddEmBank();
  function onSubmit(data) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key === "proof_image") formData.append(key, value[0]);
      else formData.append(key, value);
    }
    mutate(formData, { onSuccess: () => reset() });
    console.log(data);
  }
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Employee Management /</span>{" "}
          Bank & Others
        </h5>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="bs-stepper wizard-vertical wizard-numbered vertical mt-2">
              <div className="bs-stepper-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div id="account-details-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Bank Info</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="bank_name"
                            {...register("bank_name")}
                            className="form-control"
                            placeholder="Bank Name"
                            aria-label=""
                          />
                          <label htmlFor="email-vertical">Bank Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="branch_name"
                            {...register("branch_name")}
                            className="form-control"
                            placeholder="Branch Name"
                            aria-label=""
                          />
                          <label htmlFor="email-vertical">Branch Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="IFSC"
                            {...register("IFSC")}
                            className="form-control"
                            placeholder="IFSC Code"
                            aria-label=""
                          />
                          <label htmlFor="email-vertical">IFSC Code</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <select
                          id="account_type"
                       className="select2 form-select"
                            placeholder="Account Type"
                            aria-label=""
                            {...register("account_type")}
                          >
                          <option selected disabled >Select AccoutType</option>
                            <option value={"Savings"}>Savings</option>
                            <option value={"Current"}>Current</option>
                            <option value={"Fixed Deposit"}>Fixed Deposit</option>
                            <option value={"Recurring Deposit"}>Recurring Deposit</option>
                            <option value={"NRO"}>NRO</option>
                            <option value={"NRE"}>NRE</option>
                            <option value={"FCNR"}>FCNR</option>

                          </select>
                         
                          <label htmlFor="email-vertical">Account Type</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="account_name"
                            {...register("account_name")}
                            className="form-control"
                            placeholder="Account Name"
                            aria-label=""
                          />
                          <label htmlFor="email-vertical">Account Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="account_no"
                            {...register("account_no")}
                            className="form-control"
                            placeholder="Account No"
                            aria-label=""
                          />
                          <label htmlFor="email-vertical">Account No</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="file"
                            className="form-control"
                            id="proof_image"
                            {...register("proof_image")}
                            required
                          />
                          <label htmlFor="basic-default-upload-file">
                            Proof Image
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="personal-info-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">EPFO Info</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="efpo_no"
                            {...register("efpo_no")}
                            className="form-control"
                            placeholder="EPFO No"
                          />
                          <label htmlFor="first-name-vertical">EPFO No</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="efpo_status"
                            {...register("efpo_status")}
                            className="form-control"
                            placeholder="State"
                          />
                          <label htmlFor="last-name-vertical">State</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="efpo_branch"
                            {...register("efpo_branch")}
                            className="form-control"
                            placeholder="Branch"
                          />
                          <label htmlFor="last-name-vertical">Branch</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="social-links-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Insurance Info</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="insurance_no"
                            {...register("insurance_no")}
                            className="form-control"
                            placeholder="Insurance No"
                          />
                          <label htmlFor="first-name-vertical">
                            Insurance No
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="insurance_provider"
                            {...register("insurance_provider")}
                            className="form-control"
                            placeholder="Provider"
                          />
                          <label htmlFor="last-name-vertical">Provider</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="insurance_state"
                            {...register("insurance_state")}
                            className="form-control"
                            placeholder="State"
                          />
                          <label htmlFor="last-name-vertical">State</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            id="insurance_branch"
                            {...register("insurance_branch")}
                            className="form-control"
                            placeholder="Branch"
                          />
                          <label htmlFor="last-name-vertical">Branch</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-prev">
                          <i className="mdi mdi-arrow-left me-sm-1 me-0"></i>
                          <span className="align-middle d-sm-inline-block d-none">
                            Previous
                          </span>
                        </button>
                        <button className="btn btn-primary btn-submit">
                          Submit
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
    </div>
  );
};

export default Bankothers;
