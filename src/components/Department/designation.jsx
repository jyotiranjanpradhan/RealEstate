import React, { useEffect } from "react";
import { useState } from "react";
const Designation = () => {
  const [designations, setDesignations] = useState([]);
  const [allDepartment, setallDepartment] = useState([]);
  const [departmentNameId, setdepartmentNameId] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [roles, setRoles] = useState({
    read: false,
    write: false,
    edit: false,
    delete: false,
  });
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    const fetchAllDepartmentNames = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/department_name_handler/`
        );

        if (response.ok) {
          const result = await response.json();
          setallDepartment(result);
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
          `${API_BASE_URL}/department_designation_handler/`
        );

        if (response.ok) {
          const result = await response.json();
          setDesignations(result);
          console.log(result);
        } else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllDepartmentNames();
    fetchAlldesignationsNames();
  }, []);
  const handleRoleChange = (event) => {
    const { id, checked } = event.target;
    setRoles((prevRoles) => ({
      ...prevRoles,
      [id]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      dept_name_id: departmentNameId,
      designation: designationName,
      roles_rights: roles,
    };
    if (!formData.dept_name_id || !formData.designation) {
      return;
    }
    try {
      const response = await fetch(
        `${API_BASE_URL}/department_designation_handler/`,
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
        fetch(`${API_BASE_URL}/department_designation_handler/`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            setDesignations(data);
          });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5 className="mb-1">
          <span className="text-muted fw-light">Department /</span> Designation
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
            Designation
          </button>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Designation :</h5>
            {/*  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                                  <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                                </button> */}
          </div>
          <div className="text-nowrap p-3">
            <table
              className="table table-bordered table-responsive"
              id="all_request_table"
            >
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Designation</td>
                  {/* <td>Label</td> */}
                  <td>Department</td>
                  <td>Roles and Rights</td>
                  {/* <td>Status</td> */}
                  {/* <td>View Details</td> */}
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {designations?.map((item, index) => (
                  <tr key={item.departmentid}>
                    <td>{index + 1}</td>
                    <td>{item.designation}</td>
                    {/* <td>SALES</td> */}
                    <td>{item.dept_name_id}</td>
                    <td>{item.roles_rights}</td>
                    {/* <td>SALES</td> */}
                    {/* <td>SALES</td> */}
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
        {/* Modal */}
        <div className="modal fade" id="modalTop" tabIndex={-1}>
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title" id="modalTopTitle">
                  Designation Name
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
                      Department Name
                    </label>
                    <div className="form-floating-outline">
                      <select
                        id=""
                        className="select2 form-select"
                        value={departmentNameId}
                        onChange={(e) => setdepartmentNameId(e.target.value)}
                      >
                        <option value="">Select Menu</option>
                        {allDepartment?.map((item, index) => (
                          <option
                            key={item.departmentid}
                            value={item.departmentid}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="defaultInput" className="form-label">
                      Designation Name
                    </label>
                    <input
                      id="defaultInput"
                      className="form-control"
                      type="text"
                      placeholder="Designation Name"
                      autoComplete="off"
                      value={designationName}
                      onChange={(e) => setDesignationName(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="defaultInput" className="form-label">
                      Roles &amp; Rights
                    </label>
                    <div className="d-flex">
                      <div className="form-check me-3 me-lg-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="read"
                          checked={roles.read}
                          onChange={handleRoleChange}
                        />
                        <label className="form-check-label" htmlFor="read">
                          {" "}
                          Read{" "}
                        </label>
                      </div>
                      <div className="form-check me-3 me-lg-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="edit"
                          checked={roles.edit}
                          onChange={handleRoleChange}
                        />
                        <label className="form-check-label" htmlFor="edit">
                          {" "}
                          Edit{" "}
                        </label>
                      </div>
                      <div className="form-check me-3 me-lg-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="write"
                          checked={roles.write}
                          onChange={handleRoleChange}
                        />
                        <label className="form-check-label" htmlFor="write">
                          {" "}
                          Write{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="delete"
                          checked={roles.delete}
                          onChange={handleRoleChange}
                        />
                        <label className="form-check-label" htmlFor="delete">
                          {" "}
                          Delete{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  <div class="row g-2">
                                  <div class="col">
                                      <label for="defaultInput" class="form-label">Status</label>
                                      <div class="col">
                                          <div class="form-check form-check-inline">
                                            <input name="yes" class="form-check-input" type="radio" value="" id="" checked="">
                                            <label class="form-check-label" for="collapsible-payment-cc">Active</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                            <input name="no" class="form-check-input" type="radio" value="" id="">
                                            <label class="form-check-label" for="collapsible-payment-cash">InActive</label>
                                          </div>
                                      </div>
                                  </div>
                                </div> */}
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

export default Designation;
