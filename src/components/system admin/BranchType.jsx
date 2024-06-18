function BranchType() {
  return (
    <>
      <h5>
        <span class="text-muted fw-light">System Admin /</span> Branch Type
      </h5>

      <div class="row">
        <div class="col-xl-12 col-md-12">
          <div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body pt-1">
              <form id="formValidationExamples" class="row g-3">
                <div class="col-md-4">
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      name="Branch Type Name"
                      placeholder="Branch Type Name"
                    />
                    <label for="Branch Type Name">Branch Type Name</label>
                  </div>
                </div>
                <div class="mt-4">
                  <button
                    type="submit"
                    class="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    class="btn btn-outline-secondary waves-effect"
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

export default BranchType;
