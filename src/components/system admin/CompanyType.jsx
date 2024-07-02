import { useForm } from "react-hook-form";
import { useAddCompanyType } from "../../hooks/systemAdmin/useAddCompanyType";

function CompanyType() {
  const { isPending, mutate } = useAddCompanyType();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    mutate(data);
    console.log(data);
  }

  return (
    <>
      <h5>
        <span className="text-muted fw-light">System Admin /</span> Company Type
      </h5>

      <div className="row">
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      className="form-control"
                      id="type_name"
                      {...register("type_name")}
                      placeholder="Company Type Name"
                    />
                    <label for="Company Type Name">Company Type Name</label>
                  </div>
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
    </>
  );
}

export default CompanyType;
