import React from "react";
import apartmentimg from "../assets/Project/Apartment.png";
import { Link, useParams } from "react-router-dom";
import { useProjectDetails, useProjectPaymentScheduleDetails } from "../../hooks/Project/useProjectDetails";
const ProjectDetails = () => {
  const {id} = useParams();
  const { isLoading, project, error, } = useProjectDetails(id);
  const { payment_schedule, error: paymentError, isLoading: paymentLoading } = useProjectPaymentScheduleDetails(id);
  console.log(payment_schedule);
  
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
                        Project Id : {project?.id}
                      </span>
                    </h6>
                    <h6 className="mb-2">
                      <span className="fw-normal me-1 text-secondary">
                        Project Name : {project?.project_name}
                      </span>
                    </h6>
                    <h6 className="mb-2">
                      <span className="fw-normal me-1 text-secondary">
                        Project Location : {project?.project_location}
                      </span>
                    </h6>
                    <h6>
                      <span className="fw-normal me-1 text-secondary">
                        Ownership Type : {project?.ownership_type}
                      </span>
                      </h6>
                      <h6>
                      <span className="fw-normal me-1 text-secondary">
                        Project Area : {project?.project_area}Sq.ft.
                      </span>
                      </h6>
                     <h6>
                     <span className="fw-normal me-1 text-secondary">
                        Project Type : {project?.project_type}
                      </span>
                     </h6>
                      <h6>
                      <span className="fw-normal me-1 text-secondary">
                        Descriptions : {project?.project_description}
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
                          <td>Per Sqr. Ft Cost</td>
                          <td>52468</td>
                        </tr>
                        <tr>
                          <td>Total Land Area</td>
                          <td>{project?.project_area}</td>
                        </tr>
                        <tr>
                          <td>Total Build Area</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Available Inventory</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>Total Sold Out Inventory</td>
                          <td>0</td>
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
                <h5 className="mb-0">Product</h5>
                <div>
                  <Link
                    to={"/project/addproduct"}
                    className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                  >
                    <span className="mdi mdi-plus"></span> Add
                  </Link>
                </div>
              </div>
              <div className="text-nowrap p-3">
                <div className="table-responsive text-nowrap">
                  <table className="table table-bordered">
                    <thead className="table-secondary">
                      <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Qty</th>
                        <th>Area</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>APARTMENT</td>
                        <td>6</td>
                        <td>1500</td>
                        <td>
                          <a
                            href="#"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <span className="mdi mdi-trash-can-outline"></span>
                          </a>
                        </td>
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
                <h5 className="mb-0">Payment Schedule</h5>
                <div>
                  <Link
                    to={`/project/addpayment/${project?.id}`}
                    className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                  >
                    <span className="mdi mdi-plus"></span> Add
                  </Link>
                </div>
              </div>
              <div className="text-nowrap p-3">
                <div className="table-responsive text-nowrap">
                  <table className="table table-bordered">
                    <thead className="table-secondary">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Value(%)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        payment_schedule?.length>0 && payment_schedule?.map((payment,index)=> {
                          return (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{payment.title}</td>
                              <td>{payment.value}</td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-original-title="Edit"
                                >
                                  <i className="mdi mdi-pencil-outline"></i>
                                </a>
                                <a
                            href="#"
                            className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <span className="mdi mdi-trash-can-outline"></span>
                          </a>
                        </td>
                      </tr>)
                        })
                      }
                      
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
                  <Link
                  to={`/project/addAmenity/${id}`}
                   
                    className="btn btn-primary btn-sm text-capitalize waves-effect waves-light"
                  >
                    <span className="mdi mdi-plus"></span> Add
                  </Link>
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
                <h5 className="mb-0">Unit Type Master</h5>
                <div>
                  <a
                    href="add_unit.php"
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
                        <th>Type</th>
                        <th>Area</th>
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
                <h5 className="mb-0">Tax & Other Charges</h5>
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
                        <th>Name</th>
                        <th>Tax</th>
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
                <h5 className="mb-0">Paid Amenities</h5>
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
                        <th>Image</th>
                        <th>Cost</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>-</td>
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
          <div className="col-md-12 col-sm-12 col-12 mb-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
                <h5 className="mb-0">Price</h5>
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
                        <th>Name</th>
                        <th>Purchase</th>
                        <th>Base</th>
                        <th>Market</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Angan bashera</td>
                        <td>52468</td>
                        <td>50,00,000</td>
                        <td>60,00,000</td>
                        <td>34068000000</td>
                        <td>
                          <a
                            href="#"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <span className="mdi mdi-trash-can-outline"></span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Angan bashera</td>
                        <td>52468</td>
                        <td>50,00,000</td>
                        <td>60,00,000</td>
                        <td>34068000000</td>
                        <td>
                          <a
                            href="#"
                            className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Edit"
                          >
                            <i className="mdi mdi-pencil-outline"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Delete"
                          >
                            <span className="mdi mdi-trash-can-outline"></span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-12 mb-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
                <h5 className="mb-0">Inventory Details</h5>
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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Build</th>
                        <th>Carpet</th>
                        <th>Sold</th>
                        <th>Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Angan bashera</td>
                        <td>APARTMENT</td>
                        <td>3</td>
                        <td>5678</td>
                        <td>57670</td>
                        <td>577</td>
                        <td>0</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Angan bashera</td>
                        <td>52468</td>
                        <td>50,00,000</td>
                        <td>60,00,000</td>
                        <td>34068000000</td>
                        <td>100</td>
                        <td>60,00,000</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="app-academy">
      <div className="row gy-4 mb-4">
        <div className="col-md-12">
          <h5 className="border-bottom border-info card-header pb-1">Product</h5>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-none bg-label-info h-100">
            <div className="card-body d-flex justify-content-between flex-wrap-reverse">
            <div className="mb-0  app-academy-sm-60 d-flex flex-column justify-content-between text-center text-sm-start">
                <div className="card-title">
                  <h5 className="mb-2">Product Name : Angan bashera</h5>
                  <h5 className="mb-2">Floor: 1st Floor</h5>
                  <h5 className="mb-2">Project: Angan bashera</h5>
                </div>
                <div className="mb-0">
                
                  <a href="/project/projecthouselist" className="btn btn-info btn-sm">

                    View
                  </a>
                </div>
              </div>
              <div className=" app-academy-sm-40 d-flex justify-content-center justify-content-sm-end h-px-150 mb-3 mb-sm-0">
                <img
                  className="img-fluid scaleX-n1-rtl"
                  src={apartmentimg}
                  alt="Appartment"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
