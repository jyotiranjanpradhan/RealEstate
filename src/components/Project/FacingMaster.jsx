import React from 'react'
import { useForm } from 'react-hook-form';
import { apiFetchFacingMaster } from '../../services/Project/apiFacingMaster';
const FacingMaster = () => {
const {register,handleSubmit,reset}=useForm();
    const onSubmit = (data) => {
      apiFetchFacingMaster(data);
      reset();
    };
      
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
      <h5><span className="text-muted fw-light">Project /</span> Facing Master</h5>
      
      <div className="row">
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form id="formValidationExamples" className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="facingName"
                      name="facingName"
                      placeholder="Facing Name"
                      required
                      {...register("name")} />
                    <label htmlFor="facingName">Facing Name</label>
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

export default FacingMaster