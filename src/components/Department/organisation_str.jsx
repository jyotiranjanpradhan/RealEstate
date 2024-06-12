import React from "react";

const Organisation_str = () => {
  return (
      <>
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h5>
              <span className="text-muted fw-light">Department /</span>{" "}
              Organisation Structure
            </h5>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
                <h5 className="mb-0" />
              </div>
              <div className="text-nowrap p-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-12 mb-md-0 mb-4">
                      <div id="jstree-drag-drop" />
                    </div>
                    <div className="col-md-6 col-12 mb-md-0 mb-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Organisation_str;
