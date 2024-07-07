import React from 'react'

const ProjectHouseList = () => {
  return (
    <>
<div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Project /</span> Project
        </h5>
        <div className="mb-2 text-end">
          <a
            href="javascript: history.go(-1)"
            className="ms-2 btn btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </a>
        </div>
      </div>
      <div className="row mb-4 g-4">
        <div className="col-md-8">
          <div className="card h-100">
            <div className="card-body row">
              <div className="col-sm-5">
                <div>
                  <h5 className="mb-2 text-nowrap">Angan bashera</h5>
                  <p className="mb-0">
                    <span className="me-2"></span>
                  </p>
                </div>
                <div>
                  <h6 className="mb-2">
                    <span className="fw-normal me-1 text-secondary">
                      Project Details :
                    </span>
                  </h6>
                </div>
              </div>
              <div className="col-sm-7 d-flex justify-content-end align-items-end">
                <div id="reviewsChart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body row">
              <div className="col-sm-12">
                <div className="mb-3">
                  <h5 className="mb-2 text-nowrap">Project Information</h5>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-bordered table-hover">
                    <thead className="bg-gradient-primary">
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total Land Area</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Total Build Area</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Available Inventory</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Total Sold Out Inventory</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Payment Slab</h5>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Amenity Master</h5>
              <div>
                <a
                  href="add_amenity.php"
                  className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                >
                  <span className="mdi mdi-plus"></span> Add
                </a>
              </div>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Commission</h5>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Commission</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Apartment</td>
                      <td>10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">LayOut Image</h5>
              <div>
                <a
                  href="#"
                  className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                >
                  <span className="mdi mdi-plus"></span> Add
                </a>
              </div>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>View</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
              <h5 className="mb-0">Dynamic Specification</h5>
              <div>
                <a
                  href="#"
                  className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                >
                  <span className="mdi mdi-plus"></span> Add
                </a>
              </div>
            </div>
            <div className="text-nowrap p-3">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-academy">
        <div className="row gy-4 mb-4">
          <div className="col-md-12">
            <h5 className="border-bottom border-primary card-header pb-1">House List</h5>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-none bg-label-facebook h-100">
              <div className="card-body d-flex justify-content-between flex-wrap-reverse">
                <div className="d-flex flex-column justify-content-between mb-0 text-center text-sm-start w-100">
                  <div className="card-title">
                    <h6 className="mb-2">Product Name : Angan bashera 102</h6>
                    <h6 className="mb-2">Project:</h6>
                  </div>
                  <div className="mb-0">
                    <a href="#" className="btn btn-info btn-sm">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-none bg-label-facebook h-100">
              <div className="card-body d-flex justify-content-between flex-wrap-reverse">
                <div className="d-flex flex-column justify-content-between mb-0 text-center text-sm-start w-100">
                  <div className="card-title">
                    <h6 className="mb-2">Product Name : Angan bashera 103</h6>
                    <h6 className="mb-2">Project:</h6>
                  </div>
                  <div className="mb-0">
                    <a href="#" className="btn btn-info btn-sm">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-none bg-label-facebook h-100">
              <div className="card-body d-flex justify-content-between flex-wrap-reverse">
                <div className="d-flex flex-column justify-content-between mb-0 text-center text-sm-start w-100">
                  <div className="card-title">
                    <h6 className="mb-2">Product Name : Angan bashera 104</h6>
                    <h6 className="mb-2">Project:</h6>
                  </div>
                  <div className="mb-0">
                    <a href="#" className="btn btn-info btn-sm">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectHouseList;