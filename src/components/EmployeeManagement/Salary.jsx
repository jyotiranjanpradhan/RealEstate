import React, { useState } from "react";

const Salary = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    joiningSalaryInHand: "",
    joiningSalaryCTC: "",
    joiningLetter: null,
    joiningDate: "",
    department: "",
    designation: "",
    level: "",
    grade: "",
    branch: "",
    incrementDate: "",
    increasedSalaryInHand: "",
    increasedSalaryCTC: "",
    promotionDate: "",
    transferDate: "",
  });

  const steps = [
    { title: "Joining", contentId: "account-details-1" },
    { title: "Increment", contentId: "personal-info-1" },
    { title: "Promotion", contentId: "social-links" },
    { title: "Transfer", contentId: "social-links-1" },
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data:", formData);
  };
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Employee Management /</span>{" "}
          Salary
        </h5>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="bs-stepper wizard-vertical wizard-numbered vertical mt-2">
              <div className="bs-stepper-content">
                <form onSubmit={handleSubmit}>
                  <div id="account-details-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Joining</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="joiningSalaryInHand"
                            className="form-control"
                            placeholder="Joining Salary In Hand"
                            value={formData.joiningSalaryInHand}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="joiningSalaryInHand">
                            Joining Salary In Hand
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="joiningSalaryCTC"
                            className="form-control"
                            placeholder="Joining Salary CTC"
                            value={formData.joiningSalaryCTC}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="joiningSalaryCTC">
                            Joining Salary CTC
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="file"
                            name="joiningLetter"
                            className="form-control"
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="joiningLetter">Joining Letter</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            name="joiningDate"
                            className="form-control"
                            value={formData.joiningDate}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="joiningDate">Joining Date</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="department"
                            className="form-control"
                            placeholder="Department"
                            value={formData.department}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="department">Department</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="designation"
                            className="form-control"
                            placeholder="Designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="designation">Designation</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="level"
                            className="form-control"
                            placeholder="Level"
                            value={formData.level}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="level">Level</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="grade"
                            className="form-control"
                            placeholder="Grade"
                            value={formData.grade}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="grade">Grade</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="branch"
                            className="form-control"
                            placeholder="Branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="branch">Branch</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="personal-info-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Increment</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            name="incrementDate"
                            className="form-control"
                            value={formData.incrementDate}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="incrementDate">Increment Date</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="increasedSalaryInHand"
                            className="form-control"
                            placeholder="Increased Salary In Hand"
                            value={formData.increasedSalaryInHand}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="increasedSalaryInHand">
                            Increased Salary In Hand
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="text"
                            name="increasedSalaryCTC"
                            className="form-control"
                            placeholder="Increased Salary CTC"
                            value={formData.increasedSalaryCTC}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="increasedSalaryCTC">
                            Increased Salary CTC
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="social-links" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Promotion</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            name="promotionDate"
                            className="form-control"
                            value={formData.promotionDate}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="promotionDate">Promotion Date</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="social-links-1" className="content">
                    <div className="content-header mb-3">
                      <h6 className="mb-0">Transfer</h6>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            type="date"
                            name="transferDate"
                            className="form-control"
                            value={formData.transferDate}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="transferDate">Transfer Date</label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <button
                          className="btn btn-primary btn-next"
                          type="submit"
                        >
                          <span className="align-middle d-sm-inline-block d-none me-sm-1">
                            Submit
                          </span>
                          <i className="mdi mdi-check"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Salary;
