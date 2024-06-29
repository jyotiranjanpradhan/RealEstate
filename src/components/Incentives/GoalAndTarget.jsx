import ByTime from "./Performance/ByTime";
import FinanceGoal from "./Performance/FinanceGoal";
import Others from "./Performance/Others";
import PerformanceGoal from "./Performance/PerformanceGoal";
import ProductGoal from "./Performance/ProductGoal";

function GoalAndTarget() {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span class="text-muted fw-light">Incentive /</span> Goals And Targets
        </h5>
      </div>
      <div class="row">
        <ByTime stroke="rgba(102,108,255,0.85)" fill="#666cff" text="DAILY" />
        <ByTime stroke="rgba(253,181,40,0.85)" fill="#fdb528" text="MONTHLY" />
        <ByTime stroke="rgba(38,198,249,0.85)" fill="#26c6f9" text="YEARLY" />
      </div>
      <div class="row">
        <ProductGoal />
        <FinanceGoal />
        <PerformanceGoal />
        <Others />
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header header-elements">
              <h5 class="card-title mb-0">Latest Statistics</h5>
              <div class="card-action-element ms-auto py-0">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn dropdown-toggle px-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="mdi mdi-calendar-month-outline"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last 7 Days
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last 30 Days
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Current Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="dropdown-item d-flex align-items-center waves-effect"
                      >
                        Last Month
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <canvas
                id="goalsbarChart"
                class="chartjs"
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
