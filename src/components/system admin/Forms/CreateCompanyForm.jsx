function CreateCompanyForm() {
  return (
    <>
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Company Info
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
          <div class="bs-stepper wizard-vertical vertical wizard-vertical-icons-example wizard-vertical-icons mt-2">
            <div class="bs-stepper-header gap-lg-2">
              <div class="step" data-target="#account-details-1">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-card-account-details-outline mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Details</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#personal-info-1">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-account-outline mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Brand Info</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#social-links-1">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-handshake mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Business Details</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#social-contactinfo">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-card-account-phone-outline mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Contact Info</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#social-socialdetails">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-instagram mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Social Details</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#social-otherdetails">
                <button type="button" class="step-trigger">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-plus-box-multiple mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Other Details</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="bs-stepper-content">
              {/* <!-- Account Details --> */}
              <div id="account-details-1" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Details</h6>
                </div>
                <div class="row g-4">
                  <div class="col-md-12">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Company Name"
                        placeholder="Company Name"
                        autofocus
                      />
                      <label for="Company Name">Company Name</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Company ID"
                        placeholder="Alias"
                        autofocus
                      />
                      <label for="Company ID">Alias</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Company ID"
                        placeholder="Company ID"
                        autofocus
                      />
                      <label for="Company ID">Company ID</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        name="Company Type"
                        id=""
                        placeholder="Company Type"
                      />
                      <label for="Company Type">Company Type</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Compay Size"
                        placeholder="Compay Size"
                        autofocus
                      />
                      <label for="Compay Size">Compay Size</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Incorporation No"
                        placeholder="Incorporation No"
                        autofocus
                      />
                      <label for="Incorporation No">Incorporation No</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        name="Incorporation Agency"
                        id=""
                        placeholder="Incorporation Agency"
                      />
                      <label for="Incorporation Agency">
                        Incorporation Agency
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input class="form-control" type="date" id="" />
                      <label for="Incorporation Date">Incorporation Date</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        type="file"
                        class="form-control"
                        id="basic-default-upload-file"
                        required
                      />
                      <label for="basic-default-upload-file">
                        Incorporation Certificate
                      </label>
                    </div>

                    {/* <!--   <div class="form-floating form-floating-outline">
                                                    <input class="form-control" type="text" id=""
                                                        name="Incorporation Certificate" value="" autofocus placeholder="Incorporation Certificate" />
                                                    <label for="Incorporation Certificate"> Incorporation Certificate</label>
                                                </div> --> */}
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        name="TAX Certificate Details"
                        id=""
                        placeholder="TAX Certificate Details"
                      />
                      <label for="TAX Certificate Details">
                        TAX Certificate Details
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        name="PAN Details"
                        id=""
                        placeholder="PAN Details"
                      />
                      <label for="PAN Details">PAN Details</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <select id="" class="select2 form-select">
                        <option value="">Select</option>
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
                      <label for="country">Country</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="state"
                        placeholder="State"
                      />
                      <label for="state">State</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="city"
                        placeholder="City"
                      />
                      <label for="City">City</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="PIN"
                        placeholder="PIN"
                      />
                      <label for="PIN">PIN</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <textarea
                        name="address"
                        class="form-control"
                        id="address"
                        rows="2"
                        placeholder="1456, Mall Road"
                        style={{ height: "49px" }}
                      ></textarea>
                      <label for="address">Address</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <textarea
                        name="address"
                        class="form-control"
                        id="address"
                        rows="2"
                        placeholder="Registred Office Address"
                        style={{ height: "49px" }}
                      ></textarea>
                      <label for="Registred Office Address">
                        Registred Office Address
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Email ID"
                        placeholder="Email ID"
                      />
                      <label for="Email ID">Email ID</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Phone No"
                        placeholder="Phone No"
                      />
                      <label for="Phone No">Phone No</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="WhatsApp No"
                        placeholder="WhatsApp No"
                        autofocus
                      />
                      <label for="WhatsApp No">WhatsApp No</label>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev" disabled>
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Brand Info --> */}
              <div id="personal-info-1" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Brand Info</h6>
                </div>
                <div class="row g-4">
                  <div class="col-sm-6">
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="assets/img/avatars/suryalogo.png"
                          alt="user-avatar"
                          class="d-block w-px-120 h-px-120 rounded"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label
                            for="upload"
                            class="btn btn-primary me-2 mb-3"
                            tabindex="0"
                          >
                            <span class="d-none d-sm-block">Upload Logo</span>
                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3"
                          >
                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">Reset</span>
                          </button>

                          <div class="small">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="assets/img/icons/brands/fac.png"
                          alt="user-avatar"
                          class="d-block w-px-120 h-px-120 rounded"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label
                            for="upload"
                            class="btn btn-primary me-2 mb-3"
                            tabindex="0"
                          >
                            <span class="d-none d-sm-block">Favicon</span>
                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3"
                          >
                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">Reset</span>
                          </button>

                          <div class="small">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="assets/img/avatars/suryalogo.png"
                          alt="user-avatar"
                          class="d-block w-px-120 h-px-120 rounded"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label
                            for="upload"
                            class="btn btn-primary me-2 mb-3"
                            tabindex="0"
                          >
                            <span class="d-none d-sm-block">
                              Header (Letterhead)
                            </span>
                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3"
                          >
                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">Reset</span>
                          </button>

                          <div class="small">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card-body">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="assets/img/icons/brands/fac.png"
                          alt="user-avatar"
                          class="d-block w-px-120 h-px-120 rounded"
                          id="uploadedAvatar"
                        />
                        <div class="button-wrapper">
                          <label
                            for="upload"
                            class="btn btn-primary me-2 mb-3"
                            tabindex="0"
                          >
                            <span class="d-none d-sm-block">
                              Footer (Letterhead))
                            </span>
                            <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3"
                          >
                            <i class="mdi mdi-reload d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">Reset</span>
                          </button>

                          <div class="small">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Business Details --> */}
              <div id="social-links-1" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Business Details</h6>
                </div>
                <div class="row g-4">
                  <div class="col-sm-12">
                    <div class="form-floating form-floating-outline">
                      <textarea
                        name="address"
                        class="form-control"
                        id="address"
                        rows="2"
                        placeholder="1456, Mall Road"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="address">Address</label>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Contact Info --> */}
              <div id="social-contactinfo" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Contact Info</h6>
                </div>
                <div class="row g-4">
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Name"
                        placeholder="Name"
                        autofocus
                      />
                      <label for="Name">Name</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Designation"
                        placeholder="Designation"
                        autofocus
                      />
                      <label for="Designation">Designation</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        name="Role"
                        id=""
                        placeholder="Role"
                      />
                      <label for="Role">Role</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Email ID"
                        placeholder="Email ID"
                      />
                      <label for="Email ID">Email ID</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Phone No"
                        placeholder="Phone No"
                      />
                      <label for="Phone No">Phone No</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="WhatsApp No"
                        placeholder="WhatsApp No"
                        autofocus
                      />
                      <label for="WhatsApp No">WhatsApp No</label>
                    </div>
                  </div>
                  {/* <!--   <div class="col-12 d-flex justify-content-between">
                                          <button class="btn btn-outline-secondary btn-prev">
                                            <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                                            <span class="align-middle d-sm-inline-block d-none">Previous</span>
                                          </button>
                                          <button class="btn btn-primary btn-submit">Submit</button>
                                        </div> --> */}
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Social Details --> */}
              <div id="social-socialdetails" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Social Details</h6>
                </div>
                <form class="form-repeater">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item>
                      <div class="row g-4">
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id=""
                              name="Name"
                              placeholder="Name"
                              autofocus
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id=""
                              name="URL"
                              placeholder="URL"
                              autofocus
                            />
                            <label for="URL">URL</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card-body">
                            <div class="d-flex align-items-start align-items-sm-center gap-4">
                              <img
                                src="assets/img/icons/brands/fac.png"
                                alt="user-avatar"
                                class="d-block w-px-120 h-px-120 rounded"
                                id="uploadedAvatar"
                              />
                              <div class="button-wrapper">
                                <label
                                  for="upload"
                                  class="btn btn-primary me-2 mb-3"
                                  tabindex="0"
                                >
                                  <span class="d-none d-sm-block">
                                    Social Icons
                                  </span>
                                  <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                  <input
                                    type="file"
                                    id="upload"
                                    class="account-file-input"
                                    hidden
                                    accept="image/png, image/jpeg"
                                  />
                                </label>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger account-image-reset mb-3"
                                >
                                  <i class="mdi mdi-reload d-block d-sm-none"></i>
                                  <span class="d-none d-sm-block">Reset</span>
                                </button>

                                <div class="small">
                                  Allowed JPG, GIF or PNG. Max size of 800K
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-12 d-flex align-items-center mb-0">
                          <button
                            class="btn btn-outline-danger"
                            data-repeater-delete
                          >
                            <i class="mdi mdi-close me-1"></i>
                            <span class="align-middle">Delete</span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between mb-3">
                    <button class="btn btn-primary" data-repeater-create>
                      <i class="mdi mdi-plus me-1"></i>
                      <span class="align-middle">Add</span>
                    </button>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              {/* <!-- Add new--> */}
              <div id="social-otherdetails" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Other Details</h6>
                </div>
                <form class="form-repeater">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id=""
                              name="Name"
                              placeholder="Name"
                              autofocus
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline mb-4">
                            <textarea
                              class="form-control h-px-50"
                              id="exampleFormControlTextarea1"
                              placeholder="Comments here..."
                            ></textarea>
                            <label for="exampleFormControlTextarea1">
                              Example textarea
                            </label>
                          </div>
                        </div>
                        <div class="col-md-4 col-12 d-flex align-items-center mb-0">
                          <button
                            class="btn btn-outline-danger"
                            data-repeater-delete
                          >
                            <i class="mdi mdi-close me-1"></i>
                            <span class="align-middle">Delete</span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between mb-3">
                    <button class="btn btn-primary" data-repeater-create>
                      <i class="mdi mdi-plus me-1"></i>
                      <span class="align-middle">Add</span>
                    </button>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCompanyForm;
