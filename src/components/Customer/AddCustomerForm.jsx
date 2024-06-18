function AddCustomerForm() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Enquiry Bucket/</span>Add Customer
          Form
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
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Customer Form :</h5>
        </div>
        <div class="card-body">
          <div class="col-lg-12 mx-auto">
            <form action="">
              <div class="row g-2">
                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Name
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Name"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Phone No
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Phone No"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Email
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Email"
                    autocomplete="off"
                  />
                </div>
                <div class="divider divider-primary mb-0 p-0 text-start">
                  <h6 class="divider-text fw-semibold mb-0 text-primary">
                    Present Address
                  </h6>
                </div>
                <div class="col-md-12 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Present Address
                  </label>
                  <textarea
                    id=""
                    class="form-control"
                    placeholder="Present Address"
                    style="height: 60px;"
                  ></textarea>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    City
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="City"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    District
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="District"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Country
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Country"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Pincode
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Pincode"
                    autocomplete="off"
                  />
                </div>

                <div class="divider divider-primary mb-0 p-0 text-start">
                  <h6 class="divider-text fw-semibold mb-0 text-primary">
                    Permanent Address
                  </h6>
                </div>

                <div class="col-md-12 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Permanent Address
                  </label>
                  <textarea
                    id=""
                    class="form-control"
                    placeholder="Permanent Address"
                    style="height: 60px;"
                  ></textarea>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    City
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="City"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    District
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="District"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Country
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Country"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Pincode
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Pincode"
                    autocomplete="off"
                  />
                </div>

                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Age
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Age"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Gender
                  </label>
                  <div class="col mt-2">
                    <div class="form-check form-check-inline">
                      <input
                        name="collapsible-address-type"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id="collapsible-address-type-home"
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-address-type-home"
                      >
                        Male
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        name="collapsible-address-type"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id="collapsible-address-type-office"
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-address-type-office"
                      >
                        {" "}
                        Female{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Nationality
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Nationality"
                    autocomplete="off"
                  />
                </div>

                {/* <!--         <div class="col-md-4 col-sm-6 col-12">
                    <label for="defaultInput" class="form-label">Parent Navigation</label>
                    <div class="form-floating-outline">
                        <select id="" class="select2 form-select">
                            <option value="">Select Menu</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                  </div> --> */}

                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Religion
                  </label>
                  <input
                    id=""
                    class="form-control"
                    type="text"
                    placeholder="Religion"
                    autocomplete="off"
                  />
                </div>

                <div class="col-md-4 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Caste
                  </label>
                  <div class="form-floating-outline">
                    <select id="" class="select2 form-select">
                      <option value="">Select Caste</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>
                </div>
                {/* <!--  <div class="col-md-4 col-sm-6 col-12">
                    <label for="defaultInput" class="form-label">Caste</label>
                    <input id="" class="form-control" type="text" placeholder="Caste" autocomplete="off">
                  </div> --> */}
              </div>
              <button class="btn btn-primary ms-auto waves-effect waves-light mt-2">
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
