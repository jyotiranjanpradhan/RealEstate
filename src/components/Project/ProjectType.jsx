import React from "react";
import { useForm } from "react-hook-form";
import { apiFeetchProjectType } from "../../services/Project/apiProjectType";
const ProjectType = () => {
  const { register, handleSubmit, watch,reset } = useForm();

  const onsubmit = (data) => {
    apiFeetchProjectType({data});
    reset();
   
  };
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Project /</span> Project Type
        </h5>

        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="card">
              <h5 className="card-header"></h5>
              <div className="card-body pt-1">
                <form
                  id="formValidationExamples"
                  className="row g-3"
                  onSubmit={handleSubmit(onsubmit)}
                >
                  <div className="col-md-4">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        className="form-control"
                        id="projectTypeName"
                        name="projectTypeName"
                        placeholder="Project Type Name"
                        required
                        {...register("name")}
                      />
                      <label htmlFor="projectTypeName">Project Type Name</label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-primary me-2">
                      Save
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectType;
