import React from 'react'
import { useForm } from 'react-hook-form';
import { apiFetchPaymentSchudule } from '../../services/Project/apiPaymentSchedule';
const PaymentScheduleProject = () => {
const {register,handleSubmit}=useForm();
    const onSubmit = (data) => {
      console.log(data);
      apiFetchPaymentSchudule({data})
      };
    

  return (
   <>
<div className="container-xxl flex-grow-1 container-p-y">
      <h5><span className="text-muted fw-light">Project /</span> Payment Schedule</h5>
      
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
                      id="stages"
                      name="stages"
                      placeholder="Stages" 
                        required
                        {...register("stages")}
                      />
                    <label htmlFor="stages">Stages</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      className="form-control"
                      id="percentage"
                      name="percentage"
                      placeholder="Percentage" 
                        required
                        {...register("percentage")}
                      />
                    <label htmlFor="percentage">Percentage</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      required
                      {...register("date")} />
                    <label htmlFor="date">Date</label>
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

export default PaymentScheduleProject;