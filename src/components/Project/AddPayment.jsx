import React from 'react'
import { useForm } from 'react-hook-form';
import { apiFetchAddPayments } from '../../services/Project/addPayment';
import { useParams } from 'react-router-dom';


const AddPayment = () => {
  const {register,handleSubmit,reset}=useForm();
const {id}=useParams();
function onSubmit(data) {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("value", data.value);
  formData.append("description", data.description);
  formData.append("confirm_project_id", id);

  apiFetchAddPayments(formData);
  reset();
}
console.log(id);
  return (
    <>
       <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Project /</span> Add Payment
        </h5>
        <div className="mb-2 text-end">
          <a
            href="javascript: history.go(-1)"
            className="ms-2 btn btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Payment :</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="text" className="form-control" placeholder="Title" required
                      {...register("title")}
                       />
                      <label>Title</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="number" className="form-control" placeholder="Value" required
                      {...register("value")}/>
                      <label>Value</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating form-floating-outline">
                      <textarea
                        name="Description"
                        className="form-control"
                        rows="2"
                        placeholder="Description"
                        style={{ height: '65px' }}
                        required
                      {...register("description")}
                      ></textarea>
                      <label>Description</label>
                    </div>
                  </div>
                 
                </div>
                <button className="btn btn-primary ms-auto waves-effect waves-light mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default AddPayment;