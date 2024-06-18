import { useState } from "react";
import Buttons from "./../Buttons";

function Cost({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 class="mt-3 mb-4 text-primary">Cost</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Date
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Cost
                  </label>
                  <input
                    id="cost"
                    {...register("cost")}
                    class="form-control"
                    type="text"
                    placeholder="Cost"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    Next Followup Date
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id="nextDate"
                    {...register("nextDate")}
                  />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label for="defaultInput" class="form-label">
                    {" "}
                    Talking Point
                  </label>
                  <input
                    id="talkingPoint"
                    {...register("talkingPoint")}
                    class="form-control"
                    type="text"
                    placeholder=" Talking Point"
                    autocomplete="off"
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

export default Cost;
