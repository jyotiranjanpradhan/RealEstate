import React from 'react';
import './Bankothers'
const Bankothers = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Employee Management /</span> Bank & Others
        </h5>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="bs-stepper wizard-vertical wizard-numbered vertical mt-2">
              <div className="bs-stepper-header gap-lg-2">
                <div className="step" data-target="#account-details-1">
                  <button type="button" className="step-trigger">
                    <span className="bs-stepper-circle"><i className="mdi mdi-check"></i></span>
                    <span className="bs-stepper-label">
                      <span className="d-flex flex-column gap-1 ms-2">
                        <span className="bs-stepper-title">Bank Info:</span>
                      </span>
                    </span>
                  </button>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#personal-info-1">
                  <button type="button" className="step-trigger">
                    <span className="bs-stepper-circle"><i className="mdi mdi-check"></i></span>
                    <span className="bs-stepper-label">
                      <span className="d-flex flex-column gap-1 ms-2">
                        <span className="bs-stepper-title">EPFO Info:</span>
                      </span>
                    </span>
                  </button>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#social-links-1">
                  <button type="button" className="step-trigger">
                    <span className="bs-stepper-circle"><i className="mdi mdi-check"></i></span>
                    <span className="bs-stepper-label">
                      <span className="d-flex flex-column gap-1 ms-2">
                        <span className="bs-stepper-title">Insurance Info:</span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="bs-stepper-content">
                <form onSubmit={() => false}>
                  <div id="account-details-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Bank Info</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="email" id="" className="form-control" placeholder="Bank Name" aria-label="" />
                          <label htmlFor="email-vertical">Bank Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="email" id="" className="form-control" placeholder="Branch Name" aria-label="" />
                          <label htmlFor="email-vertical">Branch Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="IFSC Code" aria-label="" />
                          <label htmlFor="email-vertical">IFSC Code</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Account Type" aria-label="" />
                          <label htmlFor="email-vertical">Account Type</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Account Name" aria-label="" />
                          <label htmlFor="email-vertical">Account Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Account No" aria-label="" />
                          <label htmlFor="email-vertical">Account No</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="file" className="form-control" id="basic-default-upload-file" required />
                          <label htmlFor="basic-default-upload-file">Proof Image</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-prev" disabled>
                          <i className="mdi mdi-arrow-left me-sm-1 me-0"></i>
                          <span className="align-middle d-sm-inline-block d-none">Previous</span>
                        </button>
                        <button className="btn btn-primary btn-next">
                          <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                          <i className="mdi mdi-arrow-right"></i>
                        </button>
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
                          <input type="text" id="" className="form-control" placeholder="EPFO No" />
                          <label htmlFor="first-name-vertical">EPFO No</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="State" />
                          <label htmlFor="last-name-vertical">State</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Branch" />
                          <label htmlFor="last-name-vertical">Branch</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-prev">
                          <i className="mdi mdi-arrow-left me-sm-1 me-0"></i>
                          <span className="align-middle d-sm-inline-block d-none">Previous</span>
                        </button>
                        <button className="btn btn-primary btn-next">
                          <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                          <i className="mdi mdi-arrow-right"></i>
                        </button>
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
                          <input type="text" id="" className="form-control" placeholder="Insurance No" />
                          <label htmlFor="first-name-vertical">Insurance No</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Provider" />
                          <label htmlFor="last-name-vertical">Provider</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="State" />
                          <label htmlFor="last-name-vertical">State</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input type="text" id="" className="form-control" placeholder="Branch" />
                          <label htmlFor="last-name-vertical">Branch</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-prev">
                          <i className="mdi mdi-arrow-left me-sm-1 me-0"></i>
                          <span className="align-middle d-sm-inline-block d-none">Previous</span>
                        </button>
                        <button className="btn btn-primary btn-submit">Submit</button>
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
}

export default Bankothers;
