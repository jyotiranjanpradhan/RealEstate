import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AddCustomerForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
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
            to={navigate(-1)}
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
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Customer Form :</h5>
        </div>
        <div className="card-body">
          <div className="col-lg-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-2">
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Phone No
                  </label>
                  <input
                    id="phoneNo"
                    {...register("phoneNo")}
                    className="form-control"
                    type="text"
                    placeholder="Phone No"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    {...register("email")}
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    autocomplete="off"
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
                    id="presentAddress"
                    {...register("presentAddress")}
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
                    id="city"
                    {...register("city")}
                    className="form-control"
                    type="text"
                    placeholder="City"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    District
                  </label>
                  <input
                    id="district"
                    {...register("district")}
                    className="form-control"
                    type="text"
                    placeholder="District"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Country
                  </label>
                  <input
                    id="country"
                    {...register("country")}
                    className="form-control"
                    type="text"
                    placeholder="Country"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    {...register("pincode")}
                    className="form-control"
                    type="text"
                    placeholder="Pincode"
                    autocomplete="off"
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
                    id="permanentAddress"
                    {...register("permanentAddress")}
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
                    id="permanentCity"
                    {...register("permanentCity")}
                    className="form-control"
                    type="text"
                    placeholder="City"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    District
                  </label>
                  <input
                    id="permanentDistrict"
                    {...register("permanentDistrict")}
                    className="form-control"
                    type="text"
                    placeholder="District"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Country
                  </label>
                  <input
                    id="permanentCountry"
                    {...register("permanentCountry")}
                    className="form-control"
                    type="text"
                    placeholder="Country"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Pincode
                  </label>
                  <input
                    id="permanentPincode"
                    {...register("permanentPincode")}
                    className="form-control"
                    type="text"
                    placeholder="Pincode"
                    autocomplete="off"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Age
                  </label>
                  <input
                    id="age"
                    {...register("age")}
                    className="form-control"
                    type="text"
                    placeholder="Age"
                    autocomplete="off"
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Gender
                  </label>
                  <div className="col mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        name="collapsible-address-type"
                        className="form-check-input"
                        type="radio"
                        value=""
                        checked=""
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
                        name="collapsible-address-type"
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="collapsible-address-type-office"
                      />
                      <label
                        className="form-check-label"
                        for="collapsible-address-type-office"
                      >
                        {" "}
                        Female{" "}
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
                    {...register("nationality")}
                    className="form-control"
                    type="text"
                    placeholder="Nationality"
                    autocomplete="off"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Religion
                  </label>
                  <input
                    id="religion"
                    {...register("religion")}
                    className="form-control"
                    type="text"
                    placeholder="Religion"
                    autocomplete="off"
                  />
                </div>

                <div className="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Caste
                  </label>
                  <div className="form-floating-outline">
                    <select
                      id="caste"
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
                type="submit"
                className="btn btn-primary ms-auto waves-effect waves-light mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomerForm;
