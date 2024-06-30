import { useForm } from "react-hook-form";

function CommunicationType() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h5>
        <span className="text-muted fw-light">Enquiry Bucket /</span>{" "}
        Communication Type
      </h5>

      <div className="row">
        {/* <!-- FormValidation --> */}
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4 mt-2">
                  <label for="defaultSelect" className="form-label">
                    Name
                  </label>
                  <select
                    id="Name"
                    {...register("Name")}
                    className="form-select"
                  >
                    <option>Name</option>
                    <option value="Demo">Demo</option>
                    <option value="Demo">Demo</option>
                    <option value="Demo">Demo</option>
                  </select>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary waves-effect"
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
