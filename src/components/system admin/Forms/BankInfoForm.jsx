import { useForm } from "react-hook-form";

function BankInfoForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">System Admin /</span> Bank Info
        </h5>
        <div class="mb-2 text-end">
          <a
            href="javascript: history.go(-1)"
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <h5 class="card-header">Bank Info</h5>
            <div class="card-body">
              <form class="form-repeater" onSubmit={handleSubmit(onSubmit)}>
                <div data-repeater-list="group-a">
                  <div data-repeater-item="">
                    <div class="row g-4">
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="bank_name"
                            {...register("bank_name")}
                            name="group-a[0][Bank Name]"
                            placeholder="Bank Name"
                            autofocus=""
                          />
                          <label for="Bank Name">Bank Name</label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="branch_name"
                            {...register("branch_name")}
                            name="group-a[0][Branch Name]"
                            placeholder="Branch Name"
                            autofocus=""
                          />
                          <label for="Branch Name">Branch Name</label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            name="group-a[0][IFSC Code]"
                            id="IFSC_code"
                            {...register("IFSC_code")}
                            placeholder="IFSC Code"
                          />
                          <label for="Company Type">IFSC Code</label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="account_name"
                            {...register("account_name")}
                            name="group-a[0][ Account Name]"
                            placeholder=" Account Name"
                            autofocus=""
                          />
                          <label for="Compay Size"> Account Name</label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="account_no"
                            {...register("account_no")}
                            name="group-a[0][Account No]"
                            placeholder="Account No"
                            autofocus=""
                          />
                          <label for="Account No">Account No</label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            type="file"
                            class="form-control"
                            id="file"
                            {...register("file")}
                            required=""
                          />
                          <label for="basic-default-upload-file">
                            Bank Logo
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-floating form-floating-outline">
                          <input
                            class="form-control"
                            type="text"
                            id="account_type"
                            {...register("account_type")}
                            name="group-a[0][Account Type]"
                            placeholder="Account Type"
                            autofocus=""
                          />
                          <label for="Account No">Account Type</label>
                        </div>
                      </div>
                      <div class="col-md-4 col-12 d-flex align-items-center mb-0">
                        <button
                          class="btn btn-outline-danger waves-effect"
                          data-repeater-delete=""
                        >
                          <i class="mdi mdi-close me-1"></i>
                          <span class="align-middle">Delete</span>
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-between">
                  <button
                    class="btn btn-primary waves-effect waves-light"
                    data-repeater-create=""
                  >
                    <i class="mdi mdi-plus me-1"></i>
                    <span class="align-middle">Add</span>
                  </button>
                  <button class="btn btn-primary btn-submit waves-effect waves-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankInfoForm;
