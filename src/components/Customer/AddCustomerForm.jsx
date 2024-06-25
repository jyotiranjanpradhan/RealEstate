import { useForm } from "react-hook-form";
import { useAddCustomer } from "./../../hooks/customer/useAddCustomer";
import { Link } from "react-router-dom";

function AddCustomerForm() {
  const { isPending, addCustomer } = useAddCustomer();
  const { register, handleSubmit } = useForm();
  // console.log(isPending, addCustomer);
  async function onSubmit(data) {
    addCustomer(data);
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Enquiry Bucket/</span>Add
          Customer Form
        </h5>
        <div className="mb-2 text-end">
          <Link
            to=""
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Customer Form :</h5>
          </div>
          <div className="card-body">
            <div className="col-lg-12 mx-auto">
              <div className="row g-2">
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    disabled={isPending}
                    {...register("name")}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Phone No
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Phone No"
                    id="phone"
                    disabled={isPending}
                    {...register("phone")}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    disabled={isPending}
                    {...register("email")}
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="divider divider-primary mb-0 p-0 text-start">
                  <h6 className="divider-text fw-semibold mb-0 text-primary">
                    Present Address
                  </h6>
                </div>
                <div className="col-md-12 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Present Address
                  </label>
                  <textarea
                    id="present_address"
                    disabled={isPending}
                    {...register("present_address")}
                    className="form-control"
                    placeholder="Present Address"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    City
                  </label>
                  <input
                    id="present_city"
                    disabled={isPending}
                    {...register("present_city")}
                    className="form-control"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    District
                  </label>
                  <input
                    id="present_district"
                    disabled={isPending}
                    {...register("present_district")}
                    className="form-control"
                    type="text"
                    placeholder="District"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Country
                  </label>
                  <input
                    id="present_country"
                    disabled={isPending}
                    {...register("present_country")}
                    className="form-control"
                    type="text"
                    placeholder="Country"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Pincode
                  </label>
                  <input
                    id="present_pincode"
                    disabled={isPending}
                    {...register("present_pincode")}
                    className="form-control"
                    type="text"
                    placeholder="Pincode"
                  />
                </div>

                <div className="divider divider-primary mb-0 p-0 text-start">
                  <h6 className="divider-text fw-semibold mb-0 text-primary">
                    Permanent Address
                  </h6>
                </div>

                <div className="col-md-12 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Permanent Address
                  </label>
                  <textarea
                    id="permanent_address"
                    disabled={isPending}
                    {...register("permanent_address")}
                    className="form-control"
                    placeholder="Permanent Address"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    City
                  </label>
                  <input
                    id="permanent_city"
                    disabled={isPending}
                    {...register("permanent_city")}
                    className="form-control"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    District
                  </label>
                  <input
                    id="permanent_district"
                    disabled={isPending}
                    {...register("permanent_district")}
                    className="form-control"
                    type="text"
                    placeholder="District"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Country
                  </label>
                  <input
                    id="permanent_country"
                    disabled={isPending}
                    {...register("permanent_country")}
                    className="form-control"
                    type="text"
                    placeholder="Country"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Pincode
                  </label>
                  <input
                    id="permanent_pincode"
                    disabled={isPending}
                    {...register("permanent_pincode")}
                    className="form-control"
                    type="text"
                    placeholder="Pincode"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Age
                  </label>
                  <input
                    id="age"
                    disabled={isPending}
                    {...register("age")}
                    className="form-control"
                    type="text"
                    placeholder="Age"
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Gender
                  </label>
                  <div className="col mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="M"
                        id="gender"
                        disabled={isPending}
                        {...register("gender")}
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-address-type-home"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="F"
                        id="gender"
                        disabled={isPending}
                        {...register("gender")}
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-address-type-office"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Nationality
                  </label>
                  <input
                    id="nationality"
                    disabled={isPending}
                    {...register("nationality")}
                    className="form-control"
                    type="text"
                    placeholder="Nationality"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Religion
                  </label>
                  <input
                    id="religion"
                    disabled={isPending}
                    {...register("religion")}
                    className="form-control"
                    type="text"
                    placeholder="Religion"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Caste
                  </label>
                  <div className="form-floating-outline">
                    <select
                      id="caste"
                      disabled={isPending}
                      {...register("caste")}
                      className="select2 form-select"
                    >
                      <option value="">Select Caste</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                disabled={isPending}
                type="submit"
                className="btn btn-primary ms-auto waves-effect waves-light mt-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomerForm;
