function FollowUp() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">FollowUp/</span> Pre Sales
          Enquiry
        </h5>
      </div>
      <div className="app-chat card overflow-hidden">
        <div className="row g-0">
          {/* <!-- Chat & Contacts --> */}
          <div
            className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
            id="app-chat-contacts"
          >
            <div className="sidebar-header py-3 px-4 border-bottom">
              <div className="d-flex align-items-center me-3 me-lg-0">
                <div
                  className="flex-shrink-0 avatar avatar-online me-3 d-lg-none d-block"
                  data-bs-toggle="sidebar"
                  data-overlay="app-overlay-ex"
                  data-target="#app-chat-sidebar-left"
                >
                  <img
                    className="user-avatar rounded-circle cursor-pointer"
                    src="assets/img/avatars/1.png"
                    alt="Avatar"
                  />
                </div>
                <h5 className="text-primary mb-0">Analytical</h5>
              </div>
              <i
                className="mdi mdi-close mdi-20px cursor-pointer position-absolute top-0 end-0 mt-2 me-2 fs-4 d-lg-none d-block"
                data-overlay=""
                data-bs-toggle="sidebar"
                data-target="#app-chat-contacts"
              ></i>
            </div>
            <div className="sidebar-body ps ps--active-y">
              <div className="accordion mt-3 p-1" id="">
                <div className="accordion-item active">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      type="button"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#enquiries"
                      aria-expanded="true"
                      aria-controls="enquiries"
                    >
                      Enquiries
                    </button>
                  </h2>

                  <div
                    id="enquiries"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <canvas
                        id="polarChart"
                        className="chartjs"
                        data-height="150"
                        height="187"
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "150px",
                          width: "287px",
                        }}
                        width="359"
                      ></canvas>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#lead"
                      aria-expanded="false"
                      aria-controls="lead"
                    >
                      Lead
                    </button>
                  </h2>
                  <div
                    id="lead"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <canvas
                        id="doughnutChart"
                        className="chartjs mb-4"
                        data-height="150"
                        height="0"
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: "0px",
                          width: "0px",
                        }}
                        width="0"
                      ></canvas>
                      <ul className="doughnut-legend d-flex justify-content-around ps-0 mb-2 pt-1">
                        <li className="ct-series-0 d-flex flex-column">
                          <h5 className="mb-0">Desktop</h5>
                          <span
                            className="badge badge-dot my-2 cursor-pointer rounded-pill"
                            style={{
                              backgroundColor: " rgb(102, 110, 232)",
                              width: "35px",
                              height: "6px",
                            }}
                          ></span>
                          <div className="text-muted">80 %</div>
                        </li>
                        <li className="ct-series-1 d-flex flex-column">
                          <h5 className="mb-0">Tablet</h5>
                          <span
                            className="badge badge-dot my-2 cursor-pointer rounded-pill"
                            style={{
                              backgroundColor: " rgb(40, 208, 148)",
                              width: "35px",
                              height: "6px",
                            }}
                          ></span>
                          <div className="text-muted">10 %</div>
                        </li>
                        <li className="ct-series-2 d-flex flex-column">
                          <h5 className="mb-0">Mobile</h5>
                          <span
                            className="badge badge-dot my-2 cursor-pointer rounded-pill"
                            style={{
                              backgroundColor: " rgb(253, 172, 52)",
                              width: "35px",
                              height: "6px",
                            }}
                          ></span>
                          <div className="text-muted">10 %</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#opportunity"
                      aria-expanded="false"
                      aria-controls="opportunity"
                    >
                      Opportunity
                    </button>
                  </h2>
                  <div
                    id="opportunity"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#visit"
                      aria-expanded="false"
                      aria-controls="visit"
                    >
                      Visit
                    </button>
                  </h2>
                  <div
                    id="visit"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#Quotes"
                      aria-expanded="false"
                      aria-controls="Quotes"
                    >
                      Quotes
                    </button>
                  </h2>
                  <div
                    id="Quotes"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#sales"
                      aria-expanded="false"
                      aria-controls="sales"
                    >
                      Sales
                    </button>
                  </h2>
                  <div
                    id="sales"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#registration"
                      aria-expanded="false"
                      aria-controls="registration"
                    >
                      Registration
                    </button>
                  </h2>
                  <div
                    id="registration"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fullandfinal"
                      aria-expanded="false"
                      aria-controls="fullandfinal"
                    >
                      Full and Final Settlement
                    </button>
                  </h2>
                  <div
                    id="fullandfinal"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#keyhandover"
                      aria-expanded="false"
                      aria-controls="keyhandover"
                    >
                      key Handover
                    </button>
                  </h2>
                  <div
                    id="keyhandover"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
              </div>
              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabindex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0px", height: "186px", right: "0px" }}
              >
                <div
                  className="ps__thumb-y"
                  tabindex="0"
                  style={{ top: "0px", height: "50px" }}
                ></div>
              </div>
            </div>
            {/* <!-- /sidebar-body --> */}
          </div>
          {/* <!-- /Chat contacts -->

                    <!-- FollowUp List --> */}
          <div className="app-chat-history col border-end bg-white">
            <div className="chat-history-wrapper">
              <div className="border-bottom chat-history-header p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex overflow-hidden align-items-center">
                    <i
                      className="mdi mdi-menu mdi-24px cursor-pointer d-lg-none d-block me-3"
                      data-bs-toggle="sidebar"
                      data-overlay=""
                      data-target="#app-chat-contacts"
                    ></i>
                    <div className="chat-contact-info flex-grow-1 ms-3">
                      <h5 className="text-primary mb-0">FollowUp List</h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
                      <li className="mx-1 nav-item" role="presentation">
                        <button
                          type="button"
                          className="btn btn-label-primary btn-xs waves-effect active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-incite"
                          aria-controls="navs-pills-incite"
                          aria-selected="true"
                        >
                          <i className="tf-icons mdi mdi-account-outline me-1"></i>{" "}
                          Initiate
                        </button>
                      </li>
                      <li className="mx-1 nav-item" role="presentation">
                        <button
                          type="button"
                          className="btn btn-label-primary btn-xs waves-effect"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-not_incite"
                          aria-controls="navs-pills-not_incite"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          <i className="tf-icons mdi mdi-account-outline me-1"></i>{" "}
                          Not Initiate
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="enquiry_type.php"
                          target="_blank"
                          className="btn btn-xs btn-primary waves-effect waves-light"
                        >
                          {" "}
                          <span className="mdi mdi-plus"></span> Add Enquiry
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-bottom pb-2">
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Enquiries
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Lead
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Opportunity
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Visit
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Quotes
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Sales
                  </button>
                  <button
                    type="button"
                    className="btn btn-xs btn-primary waves-effect waves-light"
                  >
                    Registration
                  </button>
                </div>

                <button
                  type="button"
                  className="bg-success-subtle btn btn-xs text-capitalize text-success waves-effect"
                >
                  Cold Lead
                </button>
                <button
                  type="button"
                  className="bg-danger-subtle btn btn-xs text-capitalize text-danger waves-effect"
                >
                  Hot Lead
                </button>
                <button
                  type="button"
                  className="bg-warning-subtle btn btn-xs text-capitalize text-warning waves-effect"
                >
                  Warm Lead
                </button>
              </div>

              <div className="bg-white chat-history-body p-2 ps ps--active-y">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="navs-pills-incite"
                    role="tabpanel"
                  >
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>04/04/2024 Apr | 02:43 PM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-primary">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <a href="pre_sales_enquiry_view.php">
                                  <h6 className="mb-0 text-nowrap">Name</h6>
                                  <small>Deenabandhu</small>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>05/04/2024 Apr | 11:23 AM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-warning">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <a href="pre_sales_enquiry_view.php">
                                  <h6 className="mb-0 text-nowrap">Name</h6>
                                  <small>Deenabandhu</small>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>06/04/2024 Apr | 10:43 AM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-info">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <a href="pre_sales_enquiry_view.php">
                                  <h6 className="mb-0 text-nowrap">Name</h6>
                                  <small>Deenabandhu</small>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>04/04/2024 Apr | 02:43 PM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-primary">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <a href="pre_sales_enquiry_view.php">
                                  <h6 className="mb-0 text-nowrap">Name</h6>
                                  <small>Deenabandhu</small>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-primary">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>05/04/2024 Apr | 11:23 AM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-warning">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <a href="pre_sales_enquiry_view.php">
                                  <h6 className="mb-0 text-nowrap">Name</h6>
                                  <small>Deenabandhu</small>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-warning">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2 my-2">
                      <div className="me-2">
                        <h6 className="mb-0">Date</h6>
                        <small>
                          <i className="mdi mdi-calendar-blank-outline mdi-14px"></i>
                          <span>06/04/2024 Apr | 10:43 AM</span>
                        </small>
                      </div>
                    </div>
                    <div className="card card-border-shadow-info">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-timer-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">02:58 PM</h6>
                                <small>Time</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-account-outline mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">Name</h6>
                                <small>Deenabandhu</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar-initial rounded bg-label-info">
                                  <i className="mdi mdi-form-select mdi-24px"></i>
                                </span>
                              </div>
                              <div>
                                <h6 className="mb-0 text-nowrap">
                                  Project Name
                                </h6>
                                <small>Angan bashera</small>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-1 mt-2 text-capitalize text-truncate">
                            etiam faucibus cursus
                          </h6>
                          <small className="text-break pe-3">
                            Cras non velit nec nisi vulputate nonummy. Maecenas
                            tincidunt lacus at velit. Vivamus vel nulla eget
                            eros elementum pellentesque.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="navs-pills-not_incite"
                    role="tabpanel"
                  ></div>
                </div>
                <div
                  className="ps__rail-x"
                  style={{ left: "0px", bottom: "-1072px" }}
                >
                  <div
                    className="ps__thumb-x"
                    tabindex="0"
                    style={{ left: "0px", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: "1072px", height: "94px", right: "0px" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabindex="0"
                    style={{ top: "87px", height: "7px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /FollowUp List--> */}
          <div className="app-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default FollowUp;
