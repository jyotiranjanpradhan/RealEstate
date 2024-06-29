import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function CompanyForm() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Company Info
        </h5>
        <div class="mb-2 text-end">
          <Link
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="bs-stepper wizard-vertical vertical wizard-vertical-icons-example wizard-vertical-icons mt-2">
            {/*
            <div class="bs-stepper-header gap-lg-2">
              <div class="step crossed" data-target="#account-details-1">
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
              <div class="step crossed" data-target="#personal-info-1">
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
              <div class="step crossed" data-target="#social-links-1">
                <button
                  type="button"
                  class="step-trigger"
                  aria-selected="false"
                >
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
              <div class="step crossed" data-target="#social-contactinfo">
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
              <div
                class="step crossed active"
                data-target="#social-socialdetails"
              >
                <button type="button" class="step-trigger" aria-selected="true">
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
                <button
                  type="button"
                  class="step-trigger"
                  aria-selected="false"
                >
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
            </div>*/}
            <div class="bs-stepper-content">
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                {/* <!-- Account Details --> */}
                <div id="account-details-1" class="content dstepper-block">
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Details</h6>
                  </div>
                  <div class="row g-4">
                    <div class="col-md-12">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="companyName"
                          name="Company Name"
                          placeholder="Company Name"
                          autofocus=""
                          {...register("companyName", {
                            required: "This field is required",
                          })}
                        />
                        <label for="Company Name">Company Name</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="companyId"
                          {...register("companyId", {
                            required: "This field is required",
                          })}
                          name="Company ID"
                          value="Alias"
                          placeholder="Alias"
                          autofocus=""
                        />
                        <label for="Company ID">Alias</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="companyID"
                          {...register("companyID")}
                          name="Company ID"
                          placeholder="Company ID"
                          autofocus=""
                        />
                        <label for="Company ID">Company ID</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline form-floating-select2">
                        <div class="position-relative">
                          <select
                            id=""
                            class="select2 form-select select2-hidden-accessible"
                            data-select2-id="1"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="Company Type" data-select2-id="3">
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
                            data-select2-id="2"
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
                        <label for="Company Type<">Company Type</label>
                      </div>
                    </div>
                    {/* <!--   <div class="col-md-4">
                                                <div class="form-floating form-floating-outline">
                                                    <input class="form-control" type="text" name="Company Type"
                                                        id="" value=""placeholder="Company Type" />
                                                    <label for="Company Type">Company Type</label>
                                                </div>
                                            </div> --> */}
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="companySize"
                          {...register("companySize")}
                          name="Compay Size"
                          placeholder="Compay Size"
                          autofocus=""
                        />
                        <label for="Compay Size">Compay Size</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="incorporationNo"
                          name="Incorporation No"
                          placeholder="Incorporation No"
                          {...register("incorporationNo")}
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
                          id="IncorporationAgency"
                          {...register("incorporationAgency")}
                          placeholder="Incorporation Agency"
                        />
                        <label for="Incorporation Agency">
                          Incorporation Agency
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="date"
                          {...register("incorporationDate")}
                          id="incorporationDate"
                        />
                        <label for="Incorporation Date">
                          Incorporation Date
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          type="file"
                          {...register("incorporationCertificate")}
                          class="form-control"
                          id="incorporationCertificate"
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
                          {...register("TAXCertificate")}
                          name="TAX Certificate Details"
                          id="TAXCertificate"
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
                          id="PANDetails"
                          {...register("PANDetails")}
                          placeholder="PAN Details"
                        />
                        <label for="PAN Details">PAN Details</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline form-floating-select2">
                        <div class="position-relative">
                          <select
                            id=""
                            class="select2 form-select select2-hidden-accessible"
                            data-select2-id="4"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="" data-select2-id="6">
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
                            data-select2-id="5"
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
                                >
                                  <span class="select2-selection__placeholder">
                                    Select value
                                  </span>
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
                        <label for="country">Country</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          {...register("state")}
                          id="state"
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
                          {...register("city")}
                          id="city"
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
                          {...register("PIN")}
                          id="PIN"
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
                          {...register("address")}
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
                          id="officeAddress"
                          {...register("officeAddress")}
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
                          id="email"
                          {...register("email")}
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
                          id="phoneNo"
                          {...register("phoneNo")}
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
                          id="whatsappNo"
                          name="WhatsApp No"
                          placeholder="WhatsApp No"
                          {...register("whatsappNo")}
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
                {/* <!-- Brand Info --> */}
                <div id="personal-info-1" class="content dstepper-block">
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Brand Info</h6>
                  </div>
                  <div class="row g-4">
                    <div class="col-sm-6">
                      <div class="card-body">
                        <div class="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="./../../../suryalogo.png"
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
                              <span class="d-none d-sm-block">Upload Logo</span>
                              <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="upload"
                                {...register("upload")}
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
                            src="./../../fac.png"
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
                              <span class="d-none d-sm-block">Favicon</span>
                              <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="fileUpload"
                                {...register("fileUpload")}
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
                            src="./../../suryalogo.png"
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
                                id="fileUpload2"
                                {...register("fileUpload2")}
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
                            src="./../fac.png"
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
                                Footer (Letterhead)
                              </span>
                              <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="file"
                                {...register("file")}
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
                {/* <!-- Business Details --> */}
                <div id="social-links-1" class="content dstepper-block">
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Business Details</h6>
                  </div>
                  <div class="row g-4">
                    <div class="col-sm-12">
                      <div class="form-floating form-floating-outline">
                        <textarea
                          name="address"
                          class="form-control"
                          id="add"
                          {...register("add")}
                          rows="2"
                          placeholder="1456, Mall Road"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="address">Address</label>
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
                {/* <!-- Contact Info --> */}
                <div id="social-contactinfo" class="content dstepper-block">
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Contact Info</h6>
                  </div>
                  <div class="row g-4">
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="namE"
                          register={"namE"}
                          name="Name"
                          value="Alias"
                          placeholder="Name"
                        />
                        <label for="Name">Name</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="designation"
                          {...register("designation")}
                          name="Designation"
                          placeholder="Designation"
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
                          id="role"
                          {...register("role")}
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
                          id="emailId"
                          name="Email ID"
                          placeholder="Email ID"
                          {...register("emailId")}
                        />
                        <label for="Email ID">Email ID</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="PHONE"
                          name="Phone No"
                          placeholder="Phone No"
                          {...register("PHONE")}
                        />
                        <label for="Phone No">Phone No</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-floating form-floating-outline">
                        <input
                          class="form-control"
                          type="text"
                          id="WHATSAPP"
                          {...register("WHATSAPP")}
                          name="WhatsApp No"
                          placeholder="WhatsApp No"
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
                {/* <!-- Social Details --> */}
                <div
                  id="social-socialdetails"
                  class="content dstepper-block active"
                >
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Social Details</h6>
                  </div>
                  {/* <form class="form-repeater"> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div class="row g-4">
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id="NAME"
                              {...register("NAME")}
                              name="group-a[0][Name]"
                              value="Alias"
                              placeholder="Name"
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id="URL"
                              name="group-a[0][URL]"
                              placeholder="URL"
                              {...register("URL")}
                            />
                            <label for="URL">URL</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card-body">
                            <div class="d-flex align-items-start align-items-sm-center gap-4">
                              <img
                                src="./../../fac.png"
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
                                    Social Icons
                                  </span>
                                  <i class="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                  <input
                                    type="file"
                                    id="UPLOAD"
                                    {...register("UPLOAD")}
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
                  <div class="col-12 d-flex justify-content-between mb-3">
                    <button
                      class="btn btn-primary waves-effect waves-light"
                      data-repeater-create=""
                    >
                      <i class="mdi mdi-plus me-1"></i>
                      <span class="align-middle">Add</span>
                    </button>
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
                  {/* </form> */}
                </div>
                {/* <!-- Add new--> */}
                <div id="social-otherdetails" class="content dstepper-block">
                  <div class="content-header mb-3">
                    <h6 class="mb-0">Other Details</h6>
                  </div>
                  {/* <form class="form-repeater"> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline">
                            <input
                              class="form-control"
                              type="text"
                              id="NaMe"
                              {...register("NaMe")}
                              name="group-a[0][Name]"
                              value="Alias"
                              placeholder="Name"
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating form-floating-outline mb-4">
                            <textarea
                              class="form-control h-px-50"
                              id="control"
                              placeholder="Comments here..."
                              {...register("control")}
                            ></textarea>
                            <label for="exampleFormControlTextarea1">
                              Example textarea
                            </label>
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
                  <div class="col-12 d-flex justify-content-between mb-3">
                    <button
                      class="btn btn-primary waves-effect waves-light"
                      data-repeater-create=""
                    >
                      <i class="mdi mdi-plus me-1"></i>
                      <span class="align-middle">Add</span>
                    </button>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-outline-secondary btn-prev waves-effect">
                      <i class="mdi mdi-arrow-left me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none">
                        Previous
                      </span>
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary btn-submit waves-effect waves-light"
                    >
                      Submit
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyForm;
