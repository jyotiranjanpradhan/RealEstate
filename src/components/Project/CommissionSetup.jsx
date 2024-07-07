import React from 'react'
import { useForm } from 'react-hook-form';
import { apiFetchCommissionSetup } from '../../services/Project/apiCommissionSetup';
const CommissionSetup = () => {
    const {register,handleSubmit,watch}= useForm();
    const onSubmit = (data) => {
       console.log(data);
       apiFetchCommissionSetup(data);
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
              <form id="formValidationExamples" className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <select id="productType" className="select2 form-select" required {...register("product_type")}>
                      <option value="1">jyoti</option>
                      <option value="2">jyoti</option>
                      <option value="3">jyoti</option>
                      <option value="4">jyoti</option>
                      <option value="5">jyoti</option>
                      <option value="6">jyoti</option>
                    </select>
                    <label htmlFor="productType">Product Type</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      className="form-control"
                      id="commission"
                      name="commission"
                      placeholder="Commission" 
                        required
                        {...register("commission")}
                      />
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