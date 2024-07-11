import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
const Level = () => {
  const [lavel, setLavel] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [designation_id, setdesignation_id] = useState("");
  const [status, setStatus] = useState("Yes");
  const [description, setDescription] = useState("");
  const API_BASE_URL = process.env.REACT_APP_URL_BASE;

  useEffect(() => {
    const fetchAllLevels = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/department_label_handler/`
        );
        if (response.ok) {
          const result = await response.json();
          setLavel(result.data);
          console.log(result);
        } else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAlldesignationsNames = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/department_designation_handler/`
        );

        if (response.ok) {
          const result = await response.json();
          setDesignations(result.data);
          console.log(result);
        } else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAlldesignationsNames();
    fetchAllLevels();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!designation_id || !description) {
      return;
    }
    const formData = {
      designation_id,
      label_description: description,
      status,
    };
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/department_label_handler/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        fetch(`${API_BASE_URL}/api/department_label_handler/`)
          .then((response) => response.json())
          .then((data) => {
            setLavel(data);
          });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setStatus("Yes");
      setDescription("");
      setdesignation_id("");
    }
  };

  return (
    <>
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h5 className="mb-1">
            <span className="text-muted fw-light">System Admin /</span>{" "}
            Department
          </h5>
          <div className="mb-2 text-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalTop"
            >
              <span>
                <i className="mdi mdi-plus me-0 me-sm-1" />
              </span>{" "}
              Level
            </button>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Level :</h5>
              {/*  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                    <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                  </button> */}
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive">
                <table className="table table-bordered" id="all_request_table">
                  <thead className="table-secondary">
                    <tr>
                      <td>SL No</td>
                      <td>Label</td>
                      <td>Status</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {lavel?.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.label_description}</td>
                        <td>{item.status ? "yes" : "No"}</td>
                        <td>
                          <a
                            href=""
                            className="btn btn-text-primary btn-sm small py-1 px-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline" />
                          </a>
                          <a
                            href=""
                            className="btn btn-text-danger btn-sm small py-1 px-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <i className="mdi mdi-trash-can" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div className="modal fade" id="modalTop" tabIndex={-1}>
            <div className="modal-dialog">
              <form className="modal-content" onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title" id="modalTopTitle">
                    Add Designation Label
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-2">
                    <div className="col-12 mb-2">
                      <label htmlFor="defaultInput" className="form-label">
                        Designation
                      </label>
                      <div className="form-floating-outline">
                        <select
                          id=""
                          className="select2 form-select"
                          value={designation_id}
                          onChange={(e) => setdesignation_id(e.target.value)}
                        >
                          <option value="">Select Menu</option>
                          {designations?.map((item, index) => (
                            <option key={item.id} value={item.id}>
                              {item.designation}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-12 mb-2">
                      <label htmlFor="defaultInput" className="form-label">
                        Designation Label
                      </label>
                      <input
                        id="defaultInput"
                        className="form-control"
                        type="text"
                        placeholder="Designation Label"
                        autoComplete="off"
                        value={designationLabel}
                        onChange={(e) => setDesignationLabel(e.target.value)}
                      />
                    </div> */}
                    <div className="col-12 mb-2">
                      <label htmlFor="defaultInput" className="form-label">
                        Description
                      </label>
                      <textarea
                        id="basic-default-message"
                        className="form-control"
                        placeholder=""
                        style={{ height: 60 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <label htmlFor="defaultInput" className="form-label">
                        Status
                      </label>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            name="status"
                            className="form-check-input"
                            type="radio"
                            value="Yes"
                            checked={status === "Yes"}
                            id="collapsible-payment-cc"
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collapsible-payment-cc"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            name="status"
                            className="form-check-input"
                            type="radio"
                            value="No"
                            id="collapsible-payment-cash"
                            checked={status === "No"}
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collapsible-payment-cash"
                          >
                            InActive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Level;
