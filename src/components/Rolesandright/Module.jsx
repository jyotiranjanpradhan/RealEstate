function Module() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="col-xxl">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-3">
            <h5 class="mb-0">Module Form :</h5>
          </div>
          <div class="card-body">
            <form action="">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-12">
                  <div class="mb-3">
                    <label for="defaultInput" class="form-label">
                      Navigation Name
                    </label>
                    <input
                      id="defaultInput"
                      class="form-control"
                      type="text"
                      placeholder="Navigation Name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    URL
                  </label>
                  <div class="col mt-2">
                    <div class="form-check form-check-inline">
                      <input
                        name="yes"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id=""
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-payment-cc"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        name="no"
                        class="form-check-input"
                        type="radio"
                        value=""
                        id=""
                      />
                      <label
                        class="form-check-label"
                        for="collapsible-payment-cash"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <div class="mb-3">
                    <label for="defaultInput" class="form-label">
                      Navigation URL
                    </label>
                    <input
                      id=""
                      class="form-control"
                      type="text"
                      placeholder="Navigation URL"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Parent Navigation
                  </label>
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
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <div class="mb-3">
                    <div class="form-floating-outline">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Navigation Icon"
                        id="flatpickr-date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary ms-auto d-block waves-effect waves-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
