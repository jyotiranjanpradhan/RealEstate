import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddPaymentSchedule() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Sales /</span> Payment Schedule
        </h5>
        <div class="mb-2 text-end">
          <Link
            href="javascript: history.go(-1)"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div class="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 class="mb-0">Payment Schedule:</h5>
            {/* <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                      <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                    </button> --> */}
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="salesId"
                    {...register("salesId")}
                    placeholder="Sales ID"
                  />
                  <label for="sales_id">Sales ID</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="project"
                    {...register("project")}
                    placeholder="Project"
                  />
                  <label for="project">Project</label>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                    placeholder="Date"
                  />
                  <label for="date">Date</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="Instalment"
                    {...register("instalment")}
                    placeholder="Instalment Stage"
                  />
                  <label for="Instalment"> Instalment Stage</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="Statement"
                    {...register("statement")}
                    placeholder="Statement"
                  />
                  <label for="product">Statement</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="paymentReceiptNumber"
                    {...register("paymentReceiptNumberId")}
                    placeholder=" Amount/Percentage"
                  />
                  <label for="payment_receipt_number"> Amount/Percentage</label>
                </div>
              </div>
            </div>
            <button class="btn btn-primary ms-auto waves-effect waves-light mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPaymentSchedule;
