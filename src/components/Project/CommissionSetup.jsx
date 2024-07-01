import React from 'react'

const CommissionSetup = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
      };

  return (
    <>
<div className="container-xxl flex-grow-1 container-p-y">
      <h5><span className="text-muted fw-light">Project /</span> Commission Setup</h5>
      
      <div className="row">
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form id="formValidationExamples" className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <select id="productType" className="select2 form-select">
                      <option value="">jyoti</option>
                      <option value="">jyoti</option>
                      <option value="">jyoti</option>
                      <option value="">jyoti</option>
                      <option value="">jyoti</option>
                      <option value="">jyoti</option>
                    </select>
                    <label htmlFor="productType">Product Type</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="commission"
                      name="commission"
                      placeholder="Commission" />
                    <label htmlFor="commission">Commission</label>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary me-2">Save</button>
                  <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CommissionSetup;