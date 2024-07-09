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
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">System Admin /</span> Company
          Info
        </h5>
        <div className="mb-2 text-end">
          <Link
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="bs-stepper wizard-vertical vertical wizard-vertical-icons-example wizard-vertical-icons mt-2">
            <div className="bs-stepper-content">
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                {/* <!-- Account Details --> */}
                <div id="account-details-1" className="content dstepper-block">
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Details</h6>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="companyName"
                          placeholder="Company Name"
                          {...register("companyName", {
                            required: "This field is required",
                          })}
                        />
                        <label for="Company Name">Company Name</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="number"
                          id="companyId"
                          {...register("companyId", {
                            required: "This field is required",
                          })}
                          placeholder="Alias"
                          autofocus=""
                        />
                        <label for="Company ID">Alias</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="companyID"
                          {...register("companyID")}
                          placeholder="Company ID"
                        />
                        <label for="Company ID">Company ID</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="companySize"
                          {...register("companySize")}
                          placeholder="Company Size"
                        />
                        <label for="Company Size">Company Size</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="incorporationNo"
                          placeholder="Incorporation No"
                          {...register("incorporationNo")}
                        />
                        <label for="Incorporation No">Incorporation No</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="IncorporationAgency"
                          {...register("incorporationAgency")}
                          placeholder="Incorporation Agency"
                        />
                        <label for="Incorporation Agency">
                          Incorporation Agency
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="date"
                          {...register("incorporationDate")}
                          id="incorporationDate"
                        />
                        <label for="Incorporation Date">
                          Incorporation Date
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          type="file"
                          {...register("incorporationCertificate")}
                          className="form-control"
                          id="incorporationCertificate"
                        />
                        <label for="basic-default-upload-file">
                          Incorporation Certificate
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          {...register("TAXCertificate")}
                          id="TAXCertificate"
                          placeholder="TAX Certificate Details"
                        />
                        <label for="TAX Certificate Details">
                          TAX Certificate Details
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="PANDetails"
                          {...register("PANDetails")}
                          placeholder="PAN Details"
                        />
                        <label for="PAN Details">PAN Details</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline form-floating-select2">
                        <div className="position-relative">
                          <select
                            id=""
                            className="select2 form-select select2-hidden-accessible"
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
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="5"
                            style={{ width: "354.4px" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2--container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2--container"
                                  role="textbox"
                                  aria-readonly="true"
                                >
                                  <span className="select2-selection__placeholder">
                                    Select value
                                  </span>
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <label for="country">Country</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          {...register("state")}
                          id="state"
                          placeholder="State"
                        />
                        <label for="state">State</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          {...register("city")}
                          id="city"
                          placeholder="City"
                        />
                        <label for="City">City</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="number"
                          {...register("PIN")}
                          id="PIN"
                          placeholder="PIN"
                        />
                        <label for="PIN">PIN</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <textarea
                          className="form-control"
                          id="address"
                          {...register("address")}
                          rows="2"
                          placeholder="1456, Mall Road"
                          style={{ height: "49px" }}
                        ></textarea>
                        <label for="address">Address</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <textarea
                          className="form-control"
                          id="officeAddress"
                          {...register("officeAddress")}
                          rows="2"
                          placeholder="Registered Office Address"
                          style={{ height: "49px" }}
                        ></textarea>
                        <label for="Registered Office Address">
                          Registered Office Address
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          {...register("email")}
                          placeholder="Email ID"
                        />
                        <label for="Email ID">Email ID</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="phoneNo"
                          {...register("phoneNo")}
                          placeholder="Phone No"
                        />
                        <label for="Phone No">Phone No</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="whatsappNo"
                          placeholder="WhatsApp No"
                          {...register("whatsappNo")}
                        />
                        <label for="WhatsApp No">WhatsApp No</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Brand Info --> */}
                <div id="personal-info-1" className="content dstepper-block">
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Brand Info</h6>
                  </div>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="./../../../suryalogo.png"
                            alt="user-avatar"
                            className="d-block w-px-120 h-px-120 rounded"
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              for="upload"
                              className="btn btn-primary me-2 mb-3 waves-effect waves-light"
                              tabindex="0"
                            >
                              <span className="d-none d-sm-block">
                                Upload Logo
                              </span>
                              <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="upload"
                                {...register("upload")}
                                className="account-file-input"
                                hidden=""
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-danger account-image-reset mb-3 waves-effect"
                            >
                              <i className="mdi mdi-reload d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <div className="small">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="./../../fac.png"
                            alt="user-avatar"
                            className="d-block w-px-120 h-px-120 rounded"
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              for="upload"
                              className="btn btn-primary me-2 mb-3 waves-effect waves-light"
                              tabindex="0"
                            >
                              <span className="d-none d-sm-block">Favicon</span>
                              <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="fileUpload"
                                {...register("fileUpload")}
                                className="account-file-input"
                                hidden=""
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-danger account-image-reset mb-3 waves-effect"
                            >
                              <i className="mdi mdi-reload d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <div className="small">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="./../../suryalogo.png"
                            alt="user-avatar"
                            className="d-block w-px-120 h-px-120 rounded"
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              for="upload"
                              className="btn btn-primary me-2 mb-3 waves-effect waves-light"
                              tabindex="0"
                            >
                              <span className="d-none d-sm-block">
                                Header (Letterhead)
                              </span>
                              <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="fileUpload2"
                                {...register("fileUpload2")}
                                className="account-file-input"
                                hidden=""
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-danger account-image-reset mb-3 waves-effect"
                            >
                              <i className="mdi mdi-reload d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <div className="small">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="./../fac.png"
                            alt="user-avatar"
                            className="d-block w-px-120 h-px-120 rounded"
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              for="upload"
                              className="btn btn-primary me-2 mb-3 waves-effect waves-light"
                              tabindex="0"
                            >
                              <span className="d-none d-sm-block">
                                Footer (Letterhead)
                              </span>
                              <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="file"
                                {...register("file")}
                                className="account-file-input"
                                hidden=""
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-outline-danger account-image-reset mb-3 waves-effect"
                            >
                              <i className="mdi mdi-reload d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <div className="small">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Business Details --> */}
                <div id="social-links-1" className="content dstepper-block">
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Business Details</h6>
                  </div>
                  <div className="row g-4">
                    <div className="col-sm-12">
                      <div className="form-floating form-floating-outline">
                        <textarea
                          className="form-control"
                          id="add"
                          {...register("add")}
                          rows="2"
                          placeholder="1456, Mall Road"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="address">Address</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Contact Info --> */}
                <div id="social-contactinfo" className="content dstepper-block">
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Contact Info</h6>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="namE"
                          register={"namE"}
                          placeholder="Name"
                        />
                        <label for="Name">Name</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="designation"
                          {...register("designation")}
                          placeholder="Designation"
                        />
                        <label for="Designation">Designation</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="role"
                          {...register("role")}
                          placeholder="Role"
                        />
                        <label for="Role">Role</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="emailId"
                          placeholder="Email ID"
                          {...register("emailId")}
                        />
                        <label for="Email ID">Email ID</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="PHONE"
                          placeholder="Phone No"
                          {...register("PHONE")}
                        />
                        <label for="Phone No">Phone No</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="text"
                          id="WHATSAPP"
                          {...register("WHATSAPP")}
                          placeholder="WhatsApp No"
                        />
                        <label for="WhatsApp No">WhatsApp No</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Social Details --> */}
                <div
                  id="social-socialdetails"
                  className="content dstepper-block active"
                >
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Social Details</h6>
                  </div>
                  {/* <form className="form-repeater"> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="form-floating form-floating-outline">
                            <input
                              className="form-control"
                              type="text"
                              id="NAME"
                              {...register("NAME")}
                              placeholder="Name"
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating form-floating-outline">
                            <input
                              className="form-control"
                              type="text"
                              id="URL"
                              placeholder="URL"
                              {...register("URL")}
                            />
                            <label for="URL">URL</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                              <img
                                src="./../../fac.png"
                                alt="user-avatar"
                                className="d-block w-px-120 h-px-120 rounded"
                                id="uploadedAvatar"
                              />
                              <div className="button-wrapper">
                                <label
                                  for="upload"
                                  className="btn btn-primary me-2 mb-3 waves-effect waves-light"
                                  tabindex="0"
                                >
                                  <span className="d-none d-sm-block">
                                    Social Icons
                                  </span>
                                  <i className="mdi mdi-tray-arrow-up d-block d-sm-none"></i>
                                  <input
                                    type="file"
                                    id="UPLOAD"
                                    {...register("UPLOAD")}
                                    className="account-file-input"
                                    hidden=""
                                    accept="image/png, image/jpeg"
                                  />
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger account-image-reset mb-3 waves-effect"
                                >
                                  <i className="mdi mdi-reload d-block d-sm-none"></i>
                                  <span className="d-none d-sm-block">
                                    Reset
                                  </span>
                                </button>

                                <div className="small">
                                  Allowed JPG, GIF or PNG. Max size of 800K
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex align-items-center mb-0">
                          <button
                            className="btn btn-outline-danger waves-effect"
                            data-repeater-delete=""
                          >
                            <i className="mdi mdi-close me-1"></i>
                            <span className="align-middle">Delete</span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>

                <div
                  id="social-otherdetails"
                  className="content dstepper-block"
                >
                  <div className="content-header mb-3">
                    <h6 className="mb-0">Other Details</h6>
                  </div>
                  {/* <form className="form-repeater"> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-floating form-floating-outline">
                            <input
                              className="form-control"
                              type="text"
                              id="NaMe"
                              {...register("NaMe")}
                              placeholder="Name"
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating form-floating-outline mb-4">
                            <textarea
                              className="form-control h-px-50"
                              id="control"
                              placeholder="Comments here..."
                              {...register("control")}
                            ></textarea>
                            <label for="exampleFormControlTextarea1">
                              Example textarea
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex align-items-center mb-0">
                          <button
                            className="btn btn-outline-danger waves-effect"
                            data-repeater-delete=""
                          >
                            <i className="mdi mdi-close me-1"></i>
                            <span className="align-middle">Delete</span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit waves-effect waves-light"
                    >
                      Submit
                    </button>
                  </div>
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
