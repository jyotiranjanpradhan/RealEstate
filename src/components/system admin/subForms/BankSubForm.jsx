function BankSubForm({ register }) {
  return (
    <div data-repeater-list="group-a">
      <div data-repeater-item="">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="bank_name"
                {...register("bank_name")}
                placeholder="Bank Name"
              />
              <label for="Bank Name">Bank Name</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="branch_name"
                {...register("branch_name")}
                placeholder="Branch Name"
              />
              <label for="Branch Name">Branch Name</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="IFSC"
                {...register("IFSC")}
                placeholder="IFSC Code"
              />
              <label for="Company Type">IFSC Code</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="account_name"
                {...register("account_name")}
                placeholder=" Account Name"
              />
              <label for="Compay Size"> Account Name</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="account_no"
                {...register("account_no")}
                placeholder="Account No"
              />
              <label for="Account No">Account No</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                type="file"
                className="form-control"
                id="bank_logo"
                {...register("bank_logo")}
                required=""
              />
              <label for="basic-default-upload-file">Bank Logo</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating form-floating-outline">
              <input
                className="form-control"
                type="text"
                id="account_type"
                {...register("account_type")}
                placeholder="Account Type"
              />
              <label for="Account No">Account Type</label>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex align-items-center mb-0">
            <button
              className="btn btn-outline-danger waves-effect"
              data-repeater-delete=""
            >
              <i className="mdi mdi-close me-1"></i>
              <span className="align-middle">Delete</span>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default BankSubForm;
