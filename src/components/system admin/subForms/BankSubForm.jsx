function BankSubForm({ register }) {
  return (
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
              <label for="basic-default-upload-file">Bank Logo</label>
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
  );
}

export default BankSubForm;
