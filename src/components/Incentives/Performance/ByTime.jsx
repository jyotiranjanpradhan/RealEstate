function ByTime({ stroke, fill, text }) {
  return (
    <div class="col-sm-6 col-lg-3 mb-4">
      <div class="card card-border-shadow-primary h-100">
        <div class="card-body">
          <div
            class="d-flex align-items-center mb-2 pb-1"
            style={{ position: "relative" }}
          >
            <div
              class="chart-progress me-3"
              data-color="primary"
              data-series="80"
              data-progress_variant="true"
              style={{ minHeight: "62.7px" }}
            >
              <div
                id="apexchartsh6ns3hfll"
                class="apexcharts-canvas apexchartsh6ns3hfll apexcharts-theme-light"
                style={{ width: "58px", height: "62.7px" }}
              >
                <svg
                  id="SvgjsSvg1066"
                  width="58"
                  height="62.7"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  //   xmlns:svgjs="http://svgjs.dev"
                  class="apexcharts-svg"
                  //   xmlns:data="ApexChartsNS"
                  transform="translate(0, 0)"
                  style={{ background: "transparent" }}
                >
                  <g
                    id="SvgjsG1068"
                    class="apexcharts-inner apexcharts-graphical"
                    transform="translate(-18, -12)"
                  >
                    <defs id="SvgjsDefs1067">
                      <clipPath id="gridRectMaskh6ns3hfll">
                        <rect
                          id="SvgjsRect1070"
                          width="98"
                          height="91"
                          x="-3"
                          y="-1"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <clipPath id="forecastMaskh6ns3hfll"></clipPath>
                      <clipPath id="nonForecastMaskh6ns3hfll"></clipPath>
                      <clipPath id="gridRectMarkerMaskh6ns3hfll">
                        <rect
                          id="SvgjsRect1071"
                          width="96"
                          height="93"
                          x="-2"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                    </defs>
                    <g id="SvgjsG1072" class="apexcharts-radialbar">
                      <g id="SvgjsG1073">
                        <g id="SvgjsG1074" class="apexcharts-tracks">
                          <g
                            id="SvgjsG1075"
                            class="apexcharts-radialbar-track apexcharts-track"
                            rel="1"
                          >
                            <path
                              id="apexcharts-radialbarTrack-0"
                              d="M 46 20.01890243902438 A 24.48109756097562 24.48109756097562 0 1 1 45.995727242452276 20.018902811892815"
                              fill="none"
                              fill-opacity="1"
                              stroke="#6d788d29"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="5.130353658536585"
                              stroke-dasharray="0"
                              class="apexcharts-radialbar-area"
                              //   data:pathOrig="M 46 20.01890243902438 A 24.48109756097562 24.48109756097562 0 1 1 45.995727242452276 20.018902811892815"
                            ></path>
                          </g>
                        </g>
                        <g id="SvgjsG1077">
                          <g
                            id="SvgjsG1082"
                            class="apexcharts-series apexcharts-radial-series"
                            seriesName=""
                            rel="1"
                            // data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath1083"
                              d="M 46 20.01890243902438 A 24.48109756097562 24.48109756097562 0 1 1 22.717092638576748 36.93492481270745"
                              fill="none"
                              fill-opacity="0.85"
                              stroke={stroke}
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="5.2890243902439025"
                              stroke-dasharray="0"
                              class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                              //   data:angle="288"
                              //   data:value="80"
                              index="0"
                              j="0"
                              //   data:pathOrig="M 46 20.01890243902438 A 24.48109756097562 24.48109756097562 0 1 1 22.717092638576748 36.93492481270745"
                            ></path>
                          </g>
                          <circle
                            id="SvgjsCircle1078"
                            r="16.915920731707327"
                            cx="46"
                            cy="44.5"
                            class="apexcharts-radialbar-hollow"
                            fill="transparent"
                          ></circle>
                          <g
                            id="SvgjsG1079"
                            class="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                            style={{ opacity: "1" }}
                          >
                            <text
                              id="SvgjsText1080"
                              font-family="Helvetica, Arial, sans-serif"
                              x="46"
                              y="44.5"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="16px"
                              font-weight="500"
                              fill={fill}
                              class="apexcharts-text apexcharts-datalabel-label"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            ></text>
                            <text
                              id="SvgjsText1081"
                              font-family="Inter"
                              x="46"
                              y="50.5"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="15px"
                              font-weight="500"
                              fill="#636578"
                              class="apexcharts-text apexcharts-datalabel-value"
                              style={{ fontFamily: "Inter" }}
                            >
                              80%
                            </text>
                          </g>
                        </g>
                      </g>
                    </g>
                    <line
                      id="SvgjsLine1084"
                      x1="0"
                      y1="0"
                      x2="92"
                      y2="0"
                      stroke="#b6b6b6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      stroke-linecap="butt"
                      class="apexcharts-ycrosshairs"
                    ></line>
                    <line
                      id="SvgjsLine1085"
                      x1="0"
                      y1="0"
                      x2="92"
                      y2="0"
                      stroke-dasharray="0"
                      stroke-width="0"
                      stroke-linecap="butt"
                      class="apexcharts-ycrosshairs-hidden"
                    ></line>
                  </g>
                  <g id="SvgjsG1069" class="apexcharts-annotations"></g>
                </svg>
                <div class="apexcharts-legend"></div>
              </div>
            </div>
            <div class="row w-100 align-items-center">
              <h6 class="ms-1 mb-0">
                <a href="#">{text}</a>
              </h6>
              <p class="mb-0">182 Tasks</p>
              <p class="mb-0 text-heading">Lorem Ipsum is simply dummy</p>
            </div>
            <div class="resize-triggers">
              <div class="expand-trigger">
                <div style={{ width: "291px", height: "68px" }}></div>
              </div>
              <div class="contract-trigger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ByTime;
