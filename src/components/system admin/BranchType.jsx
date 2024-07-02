import axios from "axios";
import { useForm } from "react-hook-form";

function BranchType() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/api/system_branch_type_handler/",
      data: data,
    });
    console.log(res);
  }
  return (
    <>
      <h5>
        <span className="text-muted fw-light">System Admin /</span> Branch Type
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
                      placeholder="Branch Type Name"
                    />
                    <label for="Branch Type Name">Branch Type Name</label>
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

export default BranchType;
