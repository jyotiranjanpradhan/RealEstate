function BranchInfoForm() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Branch Info
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
              <div class="step active" data-target="#branch-details">
                <button type="button" class="step-trigger" aria-selected="true">
                  <span class="avatar">
                    <span class="avatar-initial rounded-2">
                      <i class="mdi mdi-card-account-details-outline mdi-24px"></i>
                    </span>
                  </span>
                  <span class="bs-stepper-label flex-column align-items-start gap-1 ms-2">
                    <span class="bs-stepper-title">Basic Details</span>
                  </span>
                </button>
              </div>
              <div class="step" data-target="#brand-info">
                <button
                  type="button"
                  class="step-trigger"
                  aria-selected="false"
                >
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
              <div class="step" data-target="#branch-contactinfo">
                <button
                  type="button"
                  class="step-trigger"
                  aria-selected="false"
                >
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
            </div>
            <div class="bs-stepper-content">
              <div id="branch-details" class="content active dstepper-block">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Basic Details</h6>
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
                        autofocus=""
                      />
                      <label for="Branch Name">Branch Name</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Company Name"
                        
                        placeholder="Company Name"
                        autofocus=""
                      />
                      <label for="Company Name">Alias</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Company ID"
                        
                        placeholder="Company ID"
                        autofocus=""
                      />
                      <label for="Company ID">Branch ID</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline form-floating-select2">
                      <div class="position-relative">
                        <div class="position-relative">
                          <select
                            id=""
                            class="select2 form-select select2-hidden-accessible"
                            tabindex="-1"
                            aria-hidden="true"
                            data-select2-id="9"
                          >
                            <option value="Branch Type" data-select2-id="11">
                              Select
                            </option>
                            <option value="Head Office">Head Office</option>
                            <option value="Corporate Office">
                              Corporate Office
                            </option>
                          </select>
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="10"
                            style={{ width: "259.8px" }}
                          >
                            <span class="selection">
                              <span
                                class="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2--container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2--container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Select"
                                >
                                  Select
                                </span>
                                <span
                                  class="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              class="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>
                      <label for="Branch Type<">Branch Type</label>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Compay Size"
                        
                        placeholder="Compay Size"
                        autofocus=""
                      />
                      <label for="Branch Size">Branch Size</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="text"
                        id=""
                        name="Incorporation No"
                        
                        placeholder="Incorporation No"
                        autofocus=""
                      />
                      <label for="Incorporation No">Incorporation No</label>
                    </div>
                  </div>
                  <div class="col-md-3">
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
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input class="form-control" type="date" id="" />
                      <label for="Incorporation Date">Incorporation Date</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating form-floating-outline">
                      <input
                        type="file"
                        class="form-control"
                        id="basic-default-upload-file"
                        required=""
                      />
                      <label for="basic-default-upload-file">
                        Incorporation Certificate
                      </label>
                    </div>
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
                    <div class="form-floating form-floating-outline form-floating-select2">
                      <div class="position-relative">
                        <div class="position-relative">
                          <select
                            id=""
                            class="select2 form-select select2-hidden-accessible"
                            tabindex="-1"
                            aria-hidden="true"
                            data-select2-id="26"
                          >
                            <option value="" data-select2-id="28">
                              Select
                            </option>
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
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="27"
                            style={{ width: "354.4px" }}
                          >
                            <span class="selection">
                              <span
                                class="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2--container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2--container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Select"
                                >
                                  Select
                                </span>
                                <span
                                  class="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              class="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>
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
                        autofocus=""
                      />
                      <label for="WhatsApp No">WhatsApp No</label>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button
                      class="btn btn-outline-secondary btn-prev waves-effect"
                      disabled=""
                    >
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next waves-effect waves-light">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div id="brand-info" class="content">
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
                            class="btn btn-primary me-2 mb-3 waves-effect waves-light"
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
                              hidden=""
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3 waves-effect"
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
                            class="btn btn-primary me-2 mb-3 waves-effect waves-light"
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
                              hidden=""
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            class="btn btn-outline-danger account-image-reset mb-3 waves-effect"
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
                    <button class="btn btn-outline-secondary btn-prev waves-effect">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button class="btn btn-primary btn-next waves-effect waves-light">
                      <span class="align-middle d-sm-inline-block d-none me-sm-1">
                        Next
                      </span>
                      <i class="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div id="branch-contactinfo" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Contact Info</h6>
                </div>
                <form class="form-repeater">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div class="row g-4">
                        <div class="col-md-4">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id=""
                              name="group-a[0][Name]"
                              
                              placeholder="Name"
                              autofocus=""
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
                              name="group-a[0][Designation]"
                              
                              placeholder="Designation"
                              autofocus=""
                            />
                            <label for="Designation">Designation</label>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              name="group-a[0][Role]"
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
                              name="group-a[0][Email ID]"
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
                              name="group-a[0][Phone No]"
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
                              name="group-a[0][WhatsApp No]"
                              
                              placeholder="WhatsApp No"
                              autofocus=""
                            />
                            <label for="WhatsApp No">WhatsApp No</label>
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
                  <div class="col-12 d-flex justify-content-between">
                    <button
                      class="btn btn-primary waves-effect waves-light"
                      data-repeater-create=""
                    >
                      <i class="mdi mdi-plus me-1"></i>
                      <span class="align-middle">Add</span>
                    </button>
                    <button class="btn btn-primary btn-submit waves-effect waves-light">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchInfoForm;
