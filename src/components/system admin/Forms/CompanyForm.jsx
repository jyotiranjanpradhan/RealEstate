import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAddCompanyInfo } from "../../../hooks/systemAdmin/useAddCompanyInfo";

function CompanyForm() {
  const navigate = useNavigate();
  const { isPending, mutate, reset } = useAddCompanyInfo();

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const {
      brand_logo,
      favicon,
      letter_header,
      letter_footer,
      business_address,
      contact_name,
      designation,
      role,
      contact_email,
      contact_mobile,
      other_details_name,
      details,
      social_details_name,
      URL,
      icon,
      ...rest
    } = data;

    const brand_detail = {
      brand_logo,
      favicon,
      letter_header,
      letter_footer,
      business_address,
    };
    const business_detail = {
      business_address,
    };
    const contact_detail = {
      name: contact_name,
      designation,
      role,
      email: contact_email,
      mobileno: contact_mobile,
    };
    const other_detail = {
      details: { other_details_name, details },
    };
    const social_detail = {
      details: { social_details_name, URL, icon },
    };
    const company_detail = { ...rest };

    const formData = new FormData();
    formData.append("company_detail", JSON.stringify(company_detail));
    formData.append("brand_detail", JSON.stringify(brand_detail));
    formData.append("business_detail", JSON.stringify(business_detail));
    formData.append("contact_detail", JSON.stringify(contact_detail));
    formData.append("social_detail", JSON.stringify(social_detail));
    formData.append("other_detail", JSON.stringify(other_detail));
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    console.log(formDataObj);
    console.log(data);
    mutate(formData, { onSuccess: () => reset() });
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
                          id="name"
                          placeholder="Company Name"
                          {...register("name", {
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
                          {...register("companyId")}
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
                          id="company_size"
                          {...register("company_size")}
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
                          id="incorporation_no"
                          placeholder="Incorporation_no"
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
                          id="Incorporation_agency"
                          {...register("incorporation_agency")}
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
                          {...register("date")}
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
                          className="form-control"
                          type="text"
                          id="PAN"
                          {...register("PAN")}
                          placeholder="PAN Details"
                        />
                        <label for="PAN Details">PAN Details</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline form-floating-select2">
                        <div className="position-relative">
                          <select
                            id="country"
                            {...register("country")}
                            className="select2 form-select select2-hidden-accessible"
                            data-select2-id="4"
                            tabIndex="-1"
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
                                ></span>
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
                          {...register("pincode")}
                          id="pincode"
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
                          id="registered_office_details"
                          {...register("registered_office_details")}
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
                          type="email"
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
                          type="number"
                          id="mobileno"
                          {...register("mobileno")}
                          placeholder="Phone No"
                        />
                        <label for="Phone No">Phone No</label>
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
                                id="brand_logo"
                                {...register("brand_logo")}
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
                                id="favicon"
                                {...register("favicon")}
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
                                id="letter_header"
                                {...register("letter_header")}
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
                                id="letter_footer"
                                {...register("letter_footer")}
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
                          id="business_address"
                          {...register("business_address")}
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
                          id="contact_name"
                          register={"contact_name"}
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
                          type="email"
                          id="contact_email"
                          placeholder="Email ID"
                          {...register("contact_email")}
                        />
                        <label for="Email ID">Email ID</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-floating form-floating-outline">
                        <input
                          className="form-control"
                          type="number"
                          id="contact_no"
                          placeholder="contact_no"
                          {...register("PHONE")}
                        />
                        <label for="Phone No">Phone No</label>
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
                              id="social_details_name"
                              {...register("social_details_name")}
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
                                    id="icon"
                                    {...register("icon")}
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
                              id="other_details_name"
                              {...register("other_details_name")}
                              placeholder="Name"
                            />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating form-floating-outline mb-4">
                            <textarea
                              className="form-control h-px-50"
                              id="details"
                              placeholder="Comments here..."
                              {...register("details")}
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
