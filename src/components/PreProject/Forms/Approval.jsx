import { useState } from "react";
import Buttons from "./../Buttons";

function Approval({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 class="mt-3 mb-4 text-primary">Approvals</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="largeSelect" class="form-label">
                    Approval Body
                  </label>
                  <div class="position-relative">
                    <select
                      id="approvalBody"
                      {...register("approvalBody")}
                      class="select2 form-select select2-hidden-accessible"
                      multiple=""
                      data-select2-id="select2Primary"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="Approval Body">Approval Body</option>
                      <option value="BDA">BDA</option>
                      <option value="ORERA">ORERA</option>
                      <option value="BMC">BMC</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="1"
                      style={{ width: "434.388px" }}
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="-1"
                          aria-disabled="false"
                        >
                          <ul class="select2-selection__rendered">
                            <li class="select2-search select2-search--inline">
                              <input
                                class="select2-search__field"
                                type="search"
                                tabindex="0"
                                autocomplete="off"
                                autocorrect="off"
                                autocapitalize="none"
                                spellcheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                placeholder="Select value"
                                style={{ width: "406.788px" }}
                              />
                            </li>
                          </ul>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Apply Date
                  </label>
                  <input
                    id="applyDate"
                    {...register("applyDate")}
                    class="form-control"
                    type="text"
                    placeholder="Apply Date"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="largeSelect" class="form-label">
                    Employeet
                  </label>
                  <select
                    id="employee"
                    {...register("employee")}
                    class="form-select"
                  >
                    <option value="Employeet">Employeet</option>
                    <option value="Demo">Demo</option>
                    <option value="Demo">Demo</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Agency
                  </label>
                  <input
                    id="agency"
                    {...register("agency")}
                    class="form-control"
                    type="text"
                    placeholder="Agency"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Approval Date
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id="approvalDate"
                    {...register("approvalDate")}
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Validity No
                  </label>
                  <input
                    id="validity"
                    {...register("validity")}
                    class="form-control"
                    type="text"
                    placeholder="Validity No"
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
                    id="document"
                    {...register("document")}
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

export default Approval;
