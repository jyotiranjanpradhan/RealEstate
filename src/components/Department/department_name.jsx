import React, { useEffect } from "react";
import { useState } from "react";
const DepartmentName = () => {
  const [departmentNames, setDepartmentNames] = useState([]);
  const [departmentName, setDepartmentName] = useState("");
  const [status, setStatus] = useState(true);
  const API_BASE_URL = process.env.REACT_APP_URL_BASE;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!departmentName) {
      return;
    }
    const formData = {
      name: departmentName,
      status,
    };
    try {
      const response = await fetch(`${API_BASE_URL}/department_name_handler/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        fetch(`${API_BASE_URL}/department_name_handler/`)
          .then((response) => response.json())
          .then((data) => {
            setDepartmentNames(data);
          });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setDepartmentName("");
      setStatus(true);
    }
  };
  useEffect(() => {
    const fetchAllDepartmentNames = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/department_name_handler/`
        );

        if (response.ok) {
          const result = await response.json();
          setDepartmentNames(result);
          console.log( result);
        } else {
          console.error( response.statusText);
        }
      } catch (error) {
        console.error( error);
      }
    };
    fetchAllDepartmentNames();
  }, []);
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5 className="mb-1">
          <span className="text-muted fw-light">Department /</span> Department
          Name
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
            Department Name
          </button>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Department :</h5>
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
                    <td>Department Name</td>
                    <td>Status</td>
                    {/* <td>Role's</td> */}
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {departmentNames?.map((item, index) => (
                    <tr key={item.departmentid}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.status ? "Yes" : "No"}</td>
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
                  Add Department Name
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col mb-4 mt-2">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        id=""
                        className="form-control"
                        placeholder="Department Name"
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                      />
                      <label htmlFor="nameSlideTop">Department Name</label>
                    </div>
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
                          name="Status"
                          className="form-check-input"
                          type="radio"
                          value="true"
                          id="collapsible-payment-cc"
                          checked={status === true}
                          onChange={(e) =>
                            setStatus(JSON.parse(e.target.value))
                          }
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
                          name="Status"
                          className="form-check-input"
                          type="radio"
                          value="false"
                          id="collapsible-payment-cash"
                          checked={status === false}
                          onChange={(e) =>
                            setStatus(JSON.parse(e.target.value))
                          }
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
    </>
  );
};

export default DepartmentName;
