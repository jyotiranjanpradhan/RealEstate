import axios from "axios";
import { useState } from "react";

function CompanyType() {
  const [type, setType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!type) return;
    // const res = await fetch(
    //   "http://20.244.48.88:8000/system_company_type_handler/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       body: type,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   }
    // );
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/system_company_type_handler/",
      data: {
        type_name: type,
      },
    });
    console.log(res);
  }
  return (
    <>
      <h5>
        <span className="text-muted fw-light">System Admin /</span> Company Type
      </h5>

      <div className="row">
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="form-control"
                      id="type_name"
                      name="Company Type Name"
                      placeholder="Company Type Name"
                    />
                    <label for="Company Type Name">Company Type Name</label>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary waves-effect"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyType;
