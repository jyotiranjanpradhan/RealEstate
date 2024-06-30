import { Link } from "react-router-dom";

function CustomerForm() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Enquiry Bucket /</span> Customer
          Form
        </h5>
        <div className="mb-2 text-end">
          <Link
            to="/enquiryBucket/addCustomer"
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
          >
            <span className="mdi mdi-plus"></span>Enquiry
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Customer Form :</h5>
          {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
            <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
          </button> --> */}
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <table className="table table-bordered" id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <td>SL No</td>
                  <td>Customer Id</td>
                  <td>Enquiry ID</td>
                  <td>Name</td>
                  <td>Contact No</td>
                  <td>Stage</td>
                  <td>Source</td>
                  <td>Inquiry</td>
                  <td>Assign</td>
                  <td>Customer</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ID15263</td>
                  <td>ENQ1256</td>
                  <td>Lorem Ipsum</td>
                  <td>+91 2365478956</td>
                  <td>Stage</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Customer</td>
                  <td></td>
                  <td>
                    <a
                      href="buyer_persona.php"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ID15263</td>
                  <td>ENQ1256</td>
                  <td>Lorem Ipsum</td>
                  <td>+91 2365478956</td>
                  <td>Stage</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Customer</td>
                  <td></td>
                  <td>
                    <a
                      href="buyer_persona.php"
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="View"
                    >
                      <i className="mdi mdi-eye"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2 waves-effect waves-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
