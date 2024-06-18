import { useForm } from "react-hook-form";

function CommunicationType() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span class="text-muted fw-light">Enquiry Bucket /</span> Communication
        Type
      </h5>

      <div class="row">
        {/* <!-- FormValidation --> */}
        <div class="col-xl-12 col-md-12">
          <div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body pt-1">
              <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div class="col-md-4 mt-2">
                  <label for="defaultSelect" class="form-label">
                    Name
                  </label>
                  <select id="Name" {...register("Name")} class="form-select">
                    <option>Name</option>
                    <option value="Demo">Demo</option>
                    <option value="Demo">Demo</option>
                    <option value="Demo">Demo</option>
                  </select>
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
    </div>
  );
}

export default CommunicationType;
