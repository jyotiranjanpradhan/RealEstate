import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function BuyerPersona() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Enquiry Bucket/</span> Buyer's
          Persona
        </h5>
        <div class="mb-2 text-end">
          <Link
            href="javascript: history.go(-1)"
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
        <div class="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 class="mb-0">Buyer's Persona :</h5>
          {/* <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                          <span><i class="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                        </button> --> */}
        </div>
        <div class="card-body">
          <div class="col-lg-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row g-2">
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Familiy Details
                  </label>
                  <textarea
                    id="familyDetails"
                    {...register("familyDetails")}
                    class="form-control"
                    placeholder="Familiy Details"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Income Detail
                  </label>
                  <textarea
                    id="incomeDetail"
                    {...register("incomeDetail")}
                    class="form-control"
                    placeholder=" Income Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    {" "}
                    Occupation Detail
                  </label>
                  <textarea
                    id="occupationDetail"
                    {...register("occupationDetail")}
                    class="form-control"
                    placeholder="Familiy Details"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Interest Detail
                  </label>
                  <textarea
                    id="interestDetail"
                    {...register("interestDetail")}
                    class="form-control"
                    placeholder=" Interest Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Investment Type Detail
                  </label>
                  <textarea
                    id="investmentTypeDetail"
                    {...register("investmentTypeDetail")}
                    class="form-control"
                    placeholder=" Investment Type Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" class="form-label">
                    Others
                  </label>
                  <textarea
                    id="other"
                    {...register("other")}
                    class="form-control"
                    placeholder=" Others"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary ms-auto waves-effect waves-light mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerPersona;
