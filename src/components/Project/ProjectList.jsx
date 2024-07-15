import React from "react";
import { Link } from "react-router-dom";
import { useGetConfirmProject } from "../../hooks/preProject/useGetConfirmProject";
const ProjectList = () => {
  const { isPending, project } = useGetConfirmProject();
  console.log(project);
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h5>
          <span className="text-muted fw-light">Project /</span> Project List
        </h5>
        <div className="row">
          {
            project?.length > 0 && project?.map((project,index)=>{
              return (
                <div className="col-sm-6 col-lg-3 mb-4" key={index}>
                  <div className="card card-border-shadow-primary h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2 pb-1">
                        <div className="avatar me-2">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="mdi mdi-account-tie-woman mdi-20px"></i>
                          </span>
                        </div>
                        <h6 className="ms-1 mb-0">
                        <Link to={`/project/projectdetails/${project?.id}`}>{project?.project_name}</Link>
                          
                        </h6>
                      </div>
                      <p className="mb-0 text-heading">{project?.project_description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-primary h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="mdi mdi-account-tie-woman mdi-20px"></i>
                    </span>
                  </div>
                  <h6 className="ms-1 mb-0">
                  <Link to={"/project/projectdetails"}>Jyotiiiiii</Link>
                    
                  </h6>
                </div>
                <p className="mb-0 text-heading">jyoti home</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-warning h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-warning">
                      <i className="mdi mdi-account-tie-woman mdi-20px"></i>
                    </span>
                  </div>
                  <h6 className="ms-1 mb-0">jyoti Ranjan Pradhan </h6>
                </div>
                <p className="mb-0 text-heading">jyoti home</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-danger h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-danger">
                      <i className="mdi mdi-account-tie-woman mdi-20px"></i>
                    </span>
                  </div>
                  <h6 className="ms-1 mb-0">jyoti Ranjan Pradhan</h6>
                </div>
                <p className="mb-0 text-heading">jyoti home</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-info h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-info">
                      <i className="mdi mdi-account-tie-woman mdi-20px"></i>
                    </span>
                  </div>
                  <h6 className="ms-1 mb-0">jyoti Ranjan Pradhan</h6>
                </div>
                <p className="mb-0 text-heading">Jyoti's Apartment</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
