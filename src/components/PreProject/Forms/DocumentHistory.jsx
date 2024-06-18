import { useState } from "react";
import Buttons from "./../Buttons";

function DocumentHistory({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 class="mt-3 mb-4 text-primary">Document History</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Document Type
                  </label>
                  <input
                    id="document"
                    {...register("document")}
                    class="form-control"
                    type="text"
                    placeholder="Doument No"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Doument No
                  </label>
                  <input
                    id="documentNo"
                    {...register("documentNo")}
                    class="form-control"
                    type="text"
                    placeholder="Doument No"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Issued By
                  </label>
                  <input
                    id="issuedBy"
                    {...register("issuedBy")}
                    class="form-control"
                    type="text"
                    placeholder="Issued By"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Issue Date
                  </label>
                  <input
                    id="issuedDate"
                    {...register("issuedDate")}
                    class="form-control"
                    type="text"
                    placeholder="Issue Date"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Validation
                  </label>
                  <input
                    id="validation"
                    {...register("validation")}
                    class="form-control"
                    type="text"
                    placeholder="Validation"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label">
                    Upload Document
                  </label>
                  <input
                    class="form-control"
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
