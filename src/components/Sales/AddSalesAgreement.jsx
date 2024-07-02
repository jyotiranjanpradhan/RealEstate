import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddSalesAgreement() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Sales /</span> Add Payment Schedule
        </h5>
        <div className="mb-2 text-end">
          <Link
            className="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span className="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Payment Schedule:</h5>
            {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                      <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                    </button> --> */}
          </div>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="form-floating form-floating-outline form-floating-select2">
                  <div className="position-relative">
                    <select
                      id=""
                      className="select2 form-select select2-hidden-accessible"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="Sales ID" data-select2-id="3">
                        Sales ID
                      </option>
                      <option value="Sales ID"> Sales ID1</option>
                      <option value="Sales ID"> Sales ID2</option>
                      <option value="Sales ID"> Sales ID3</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="2"
                      style={{ width: "434.388px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2--container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2--container"
                            role="textbox"
                            aria-readonly="true"
                            title="Sales ID"
                          >
                            Sales ID
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                  <label for="Sales ID"> Sales ID</label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="agreementId"
                    {...register("agreementId")}
                    placeholder="Agreement ID"
                    autofocus=""
                  />
                  <label for="agreement_id">Agreement ID</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                    placeholder="Date"
                  />
                  <label for="date">Date</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="createBy"
                    {...register("createBy")}
                    placeholder="Create By"
                  />
                  <label for="Instalment">Create By</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="statement"
                    {...register("statement")}
                    placeholder="Upload by"
                  />
                  <label for="product">Upload by</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating form-floating-outline">
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    {...register("file")}
                    required=""
                  />
                  <label for="basic-default-upload-file">Upload file</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary ms-auto waves-effect waves-light mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSalesAgreement;
