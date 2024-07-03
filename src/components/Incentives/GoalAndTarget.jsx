import ByTime from "./Performance/ByTime";
import FinanceGoal from "./Performance/FinanceGoal";
import Others from "./Performance/Others";
import PerformanceGoal from "./Performance/PerformanceGoal";
import ProductGoal from "./Performance/ProductGoal";

function GoalAndTarget() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Incentive /</span> Goals And
          Targets
        </h5>
      </div>
      <div className="row">
        <ByTime stroke="rgba(102,108,255,0.85)" fill="#666cff" text="DAILY" />
        <ByTime stroke="rgba(253,181,40,0.85)" fill="#fdb528" text="MONTHLY" />
        <ByTime stroke="rgba(38,198,249,0.85)" fill="#26c6f9" text="YEARLY" />
      </div>
      <div className="row">
        <ProductGoal />
        <FinanceGoal />
        <PerformanceGoal />
        <Others />
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header header-elements">
              <h5 className="card-title mb-0">Latest Statistics</h5>
              <div className="card-action-element ms-auto py-0">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-calendar-month-outline"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last 7 Days
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last 30 Days
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Current Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last Month
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <canvas
                id="goalsbarChart"
                className="chartjs"
                dataHeight="400"
                height="500"
                style={{
                  display: "block",
                  boxSizing: "border-box",
                  height: "400px",
                  width: "1351px",
                }}
                width="1689"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalAndTarget;
