import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function BuyerPersona() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Enquiry Bucket/</span> Buyer's
          Persona
        </h5>
        <div className="mb-2 text-end">
          <Link
            to={navigate(-1)}
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
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Buyer's Persona :</h5>
          {/* <!--  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                          <span><i className="mdi mdi-plus me-0 me-sm-1"></i></span> Department
                        </button> --> */}
        </div>
        <div className="card-body">
          <div className="col-lg-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-2">
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Familiy Details
                  </label>
                  <textarea
                    id="familyDetails"
                    {...register("familyDetails")}
                    className="form-control"
                    placeholder="Familiy Details"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Income Detail
                  </label>
                  <textarea
                    id="incomeDetail"
                    {...register("incomeDetail")}
                    className="form-control"
                    placeholder=" Income Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    {" "}
                    Occupation Detail
                  </label>
                  <textarea
                    id="occupationDetail"
                    {...register("occupationDetail")}
                    className="form-control"
                    placeholder="Familiy Details"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Interest Detail
                  </label>
                  <textarea
                    id="interestDetail"
                    {...register("interestDetail")}
                    className="form-control"
                    placeholder=" Interest Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Investment Type Detail
                  </label>
                  <textarea
                    id="investmentTypeDetail"
                    {...register("investmentTypeDetail")}
                    className="form-control"
                    placeholder=" Investment Type Detail"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <label for="defaultInput" className="form-label">
                    Others
                  </label>
                  <textarea
                    id="other"
                    {...register("other")}
                    className="form-control"
                    placeholder=" Others"
                    style={{ height: "60px" }}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary ms-auto waves-effect waves-light mt-2"
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
