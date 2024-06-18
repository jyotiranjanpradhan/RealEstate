import { Link, useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import Approval from "./Forms/Approval";
import Cost from "./Forms/Cost";
import DocumentHistory from "./Forms/DocumentHistory";
import { useForm } from "react-hook-form";

function NewProject() {
  const navigate = useNavigate(-1);

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Pre - Project /</span> Add New
          Project Development
        </h5>
        <div class="mb-2 text-end">
          <Link
            to={navigate("/preProject/preProjectTable")}
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>

      <div class="row">
        {/* <!-- FormValidation --> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="col-xl-12 col-md-12">
            <div class="card">
              <h5 class="card-header">Pre - Project</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="defaultInput" class="form-label">
                        Project Location
                      </label>
                      <input
                        id="projectLocation"
                        {...register("projectLocation")}
                        class="form-control"
                        type="text"
                        placeholder="Project Location"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="largeSelect" class="form-label">
                        Ownership Type
                      </label>
                      <select
                        id="ownershipType"
                        {...register("ownershipType")}
                        class="form-select"
                      >
                        <option>Ownership Type</option>
                        <option value="Demo">Demo</option>
                        <option value="Demo">Demo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="largeSelect" class="form-label">
                        Project Segment
                      </label>
                      <select
                        id="projectSegment"
                        {...register("projectSegment")}
                        class="form-select"
                      >
                        <option>Project Segment</option>
                        <option value="Demo">Demo</option>
                        <option value="Demo">Demo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="defaultInput" class="form-label">
                        Project Name
                      </label>
                      <input
                        id="projectName"
                        {...register("projectName")}
                        class="form-control"
                        type="text"
                        placeholder="Project Name"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="largeSelect" class="form-label">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        class="form-select"
                      >
                        <option>Project Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Duplex">Duplex</option>
                      </select>
                    </div>
                  </div>

                  {/* <ProjectDetails/> */}
                  <div class="col-md-12 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="defaultInput" class="form-label">
                        Project Area
                      </label>
                      <input
                        id="projectArea"
                        {...register("projectArea")}
                        class="form-control"
                        type="text"
                        placeholder="Project Area"
                        autocomplete="off"
                      />
                    </div>
                  </div>

                  <Approval register={register} />

                  <Cost register={register} />

                  <DocumentHistory register={register} />

                  <h6 class="mt-3 mb-4 text-primary">Agreement</h6>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">
                        Generate Agreement (Buyer)
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="agreementFile"
                        {...register("agreementFile")}
                        multiple=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">
                        Upload (Signed Document)
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="signedFile"
                        {...register("signedFile")}
                        multiple=""
                      />
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-3 justify-content-end mt-4">
                  <button class="btn btn-outline-primary waves-effect">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary waves-effect waves-light"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProject;
