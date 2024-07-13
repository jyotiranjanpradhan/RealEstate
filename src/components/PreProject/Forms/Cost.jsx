import { useState } from "react";
import Buttons from "./../Buttons";

function Cost({ register }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <h6 className="mt-3 mb-4 text-primary">Expenses</h6>
      {show && (
        <div data-repeater-list="group-a">
          <div data-repeater-item="">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="date"
                    {...register("date")}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Cost
                  </label>
                  <input
                    id="cost"
                    {...register("cost")}
                    className="form-control"
                    type="number"
                    placeholder="Cost"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    Next Followup Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="nextDate"
                    {...register("nextDate")}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="mb-3">
                  <label for="defaultInput" className="form-label">
                    {" "}
                    Talking Point
                  </label>
                  <input
                    id="talkingPoint"
                    {...register("talkingPoint")}
                    className="form-control"
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
