import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddSalesAgreement() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Sales /</span> Add Payment Schedule
        </h5>
        <div class="mb-2 text-end">
          <Link
            class="ms-2 btn  btn-primary btn-sm waves-effect waves-light"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Back to list"
          >
            <span class="mdi mdi-keyboard-backspace"></span>
          </Link>
        </div>
      </div>
      <div class="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 class="mb-0">Payment Schedule:</h5>
            {/* <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                      <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                    </button> --> */}
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div class="col-md-4">
                <div class="form-floating form-floating-outline form-floating-select2">
                  <div class="position-relative">
                    <select
                      id=""
                      class="select2 form-select select2-hidden-accessible"
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
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="2"
                      style={{ width: "434.388px" }}
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2--container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2--container"
                            role="textbox"
                            aria-readonly="true"
                            title="Sales ID"
                          >
                            Sales ID
                          </span>
                          <span
                            class="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                  <label for="Sales ID"> Sales ID</label>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="agreementId"
                    {...register("agreementId")}
                    placeholder="Agreement ID"
                    autofocus=""
                  />
                  <label for="agreement_id">Agreement ID</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                    placeholder="Date"
                  />
                  <label for="date">Date</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="createBy"
                    {...register("createBy")}
                    placeholder="Create By"
                  />
                  <label for="Instalment">Create By</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="text"
                    id="statement"
                    {...register("statement")}
                    placeholder="Upload by"
                  />
                  <label for="product">Upload by</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-floating form-floating-outline">
                  <input
                    type="file"
                    class="form-control"
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
              class="btn btn-primary ms-auto waves-effect waves-light mt-2"
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
