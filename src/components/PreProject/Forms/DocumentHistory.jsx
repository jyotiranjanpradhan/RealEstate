import { useState } from "react";
import Buttons from "./../Buttons";

function DocumentHistory({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 className="mt-3 mb-4 text-primary">Document History</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Document Type
                  </label>
                  <input
                    id="document1"
                    {...register("document1")}
                    className="form-control"
                    type="text"
                    placeholder="Doument No"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Doument No
                  </label>
                  <input
                    id="documentNo"
                    {...register("documentNo")}
                    className="form-control"
                    type="text"
                    placeholder="Document No"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Issued By
                  </label>
                  <input
                    id="issuedBy"
                    {...register("issuedBy")}
                    className="form-control"
                    type="text"
                    placeholder="Issued By"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Issue Date
                  </label>
                  <input
                    id="issuedDate"
                    {...register("issuedDate")}
                    className="form-control"
                    type="text"
                    placeholder="Issue Date"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Validation
                  </label>
                  <input
                    id="validation"
                    {...register("validation")}
                    className="form-control"
                    type="text"
                    placeholder="Validation"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="formFileMultiple" className="form-label">
                    Upload Document
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="uploadDocument"
                    {...register("uploadDocument")}
                    multiple=""
                  />
                </div>
              </div>
              <Buttons show={show} setShow={setShow} />
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}

export default DocumentHistory;
