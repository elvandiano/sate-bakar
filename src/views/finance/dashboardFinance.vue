<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
const collapsed = ref(false);
const selectedKeys = ref(['1']);

onMounted(() => {
  const button = document.querySelector(".buttonx");
  button.classList.add("active");
  if (button) {
    // button.classList.add("active");
    setTimeout(()=>{
      button.classList.remove("active");
      button.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
      button.querySelector("span").innerText = "Login";
    },3000);
  }
});

const data = {
  series: [{
    name: 'Tariff revenue',
    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
  }, {
    name: 'Subsidy revenue',
    data: [13, 23, 20, 8, 13, 27, 44, 55, 41, 67, 22, 43]
  }, {
    name: 'Compensation revenue',
    data: [11, 17, 15, 15, 21, 14, 13, 23, 20, 8, 13, 27]
  }, {
    name: 'Connection fee',
    data: [21, 7, 25, 13, 22, 8, 11, 17, 15, 15, 21, 58]
  },{
    name: 'Non kWh revenue',
    data: [13, 23, 20, 8, 13, 27, 44, 55, 41, 67, 22, 43]
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
      tickAmount: 10
    },
    legend: {
      position: 'right',
      offsetY: 0,
      labels: {
        colors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8'],
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8'],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    fill: {
      opacity: 1,
      colors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8']
    }
  },
}

const data2 = {
  series: [{
    name: 'Available Cash',
    data: [44, 55, 41, 67, 22, 43, 44]
  }, {
    name: 'Minimum Cash Balance',
    data: [13, 23, 20, 8, 13, 27, 44]
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'],
    },
    legend: {
      position: 'top',
      offsetY: 0,
      labels: {
        colors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8'],
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8'],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    fill: {
      opacity: 1,
      colors: ['#92CAF8', '#8099D9', '#9A9BF0', '#9780D9', '#C892F8']
    }
  },
}

const dataArea = {

  series: [{
    name: 'south',
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  chartOptions1: {
    chart: {
      type: 'area',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: [1]
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  },
}

const value1 = ref('a');
const value2 = ref('c');

</script>

<template>
  <div class="buttonx" hidden>
    <div class="content">
      <i class="bx bx-cloud-download"></i>
      <span class="button-text"></span>
    </div>
  </div>
  <div class="bg-sky-500/100 mt-5 ml-4 mr-4 rounded-md text-white">
    <div class="p-5 flex">
      <div class="w-[2%] h-full">
        <img src="../../assets/circle_blue.svg" alt="Circle Blue SVG">
      </div>
      <div class="w-[100%] h-full">
        <div class="block">
          <div class="mb-0.5">Overall healthy performance across PLN Group in main indicators. A few areas for Finance BoD to focus on</div>
          <div class="mb-0.5">- Increase in finance cost</div>
          <div class="mb-0.5">- Increase in loss on foreign exchange</div>
          <div class="mb-0.5">- Decrease in DSCR</div>
        </div>
      </div>
    </div>
  </div>
  <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px', marginRight: '16px' }">
    <div :style="{ background: '#fff' }">
      <div class="p-5 flex">
        <div class="w-[2%] h-full mr-3">
          <img src="../../assets/finance_2.svg" alt="Finance SVG" class="mt-2" width="40" height="40">
        </div>
        <div class="w-[100%] h-full">
          <div class="block">
            <div class="mb-0.5 font-bold text-[22px]">Profitability</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
          </div>
        </div>
        <div class="relative left-0 w-[8%] mt-3">
          <div class="text-[17px] text-[#868E96]">
            <RouterLink to="/dashboard-finance/details-pnl">P&L DETAILS ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
  <a-layout-content style="margin-left: 16px; margin-right: 16px; margin-top: 1px">
    <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
      <div>
        <div class="bg-[#D3F9D8] mt-5 ml-4 mr-4 mb-4 rounded-md text-black">
          <div class="p-5 flex">
            <div class="w-[2%] h-full">
              <img src="../../assets/circle_green.svg" alt="Circle green SVG">
            </div>
            <div class="w-[100%] h-full">
              <div class="block">
                <div class="mb-0.5 mt-1">EBITDA margin is decreasing yoy due to increasing BPP and foreign exchange loss"</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="block ml-4 w-[30%]">
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Revenue (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">441.11 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_up.svg" alt="Indicator green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm">+3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm">+4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div class="ml-[30%] mr-[30%] mt-[10%]">
                          <div id="chart-1">
                            <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Biaya pokok penyediaan (BPP) (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">386.2 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_up.svg" alt="Indicator green SVG">
                        </div>
                        <div class="mt-2 percentage-item w-0 hover:bg-[#00AA4E] hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Operating Profit (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">54.9 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_down.svg" alt="Indicator red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_down.svg" alt="Trend Red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">EBITDA (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">84.7 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_down.svg" alt="Indicator red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_down.svg" alt="Trend Red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Gain/loss on foreign exchange (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">-19.8 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Finance cost (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">17.1 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5">Net profit (IDR)</div>
                      <div class="mb-0.5 flex pt-2 pb-1">
                        <div class="font-extrabold text-[22px]">14.4 Tn</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                        <div class="ml-1 mt-2">
                          <img src="../../assets/trend_down.svg" alt="Trend Red SVG">
                        </div>
                        <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]">87.6% of Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-[100%] h-full text-center">
                    <div class="block">
                      <div class="mb-0.5">
                        <div>
                          <div class="ml-[30%] mr-[30%] mt-[10%]">
                            <div id="chart-1">
                              <apexchart type="area" height="35" width="100" :options="dataArea.chartOptions1" :series="dataArea.series"></apexchart>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block ml-4 mr-4 w-[70%]">
            <div class="rounded-md text-black">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[17px]">REVENUE (IDR)</div>
                </div>
                <div class="absolute top-0 right-0 ...">
                  <div class="flex gap-2">
                    <div>
                      <a-radio-group v-model:value="value1" button-style="solid">
                        <a-radio-button value="a">Month</a-radio-button>
                        <a-radio-button value="b">Year</a-radio-button>
                      </a-radio-group>
                    </div>
                    <div>
                      <a-radio-group v-model:value="value2" button-style="solid">
                        <a-radio-button value="c">Non-Cumulative</a-radio-button>
                        <a-radio-button value="d">Cumulative</a-radio-button>
                      </a-radio-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md text-black mt-2">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[12px]">Holding/Subholding</div>
                  <div>
                    <a-select v-model:value="valuex" style="width: 220px; margin-top: 5px" placeholder="Consolidated" disabled>
                      <a-select-option value="lucy">Lucy</a-select-option>
                    </a-select>
                  </div>
                </div>
<!--                <div class="absolute top-0 right-0 ...">-->
<!--                  <div class="block">-->
<!--                    <a-checkbox v-model:checked="checked">Tariff revenue</a-checkbox>-->
<!--                    <br>-->
<!--                    <a-checkbox v-model:checked="checked">Subsidy revenue</a-checkbox>-->
<!--                    <br>-->
<!--                    <a-checkbox v-model:checked="checked">Compensation revenue</a-checkbox>-->
<!--                    <br>-->
<!--                    <a-checkbox v-model:checked="checked">Connection fee</a-checkbox>-->
<!--                    <br>-->
<!--                    <a-checkbox v-model:checked="checked"> Non kWh revenue</a-checkbox>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
            <div class="mt-20">
              <div id="chart">
                <apexchart type="bar" height="650" :options="data.chartOptions" :series="data.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
  <div class="flex">
    <div class="block w-[70%]">
      <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px' }">
        <div :style="{ background: '#fff' }">
          <div class="p-5 flex">
            <div class="w-[3%] h-full mr-3">
              <img src="../../assets/finance_2.svg" alt="Finance SVG" class="mt-3" width="40" height="40">
            </div>
            <div class="w-[100%] h-full">
              <div class="block">
                <div class="mb-0.5 font-bold text-[22px]">Cash Management</div>
                <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
              </div>
            </div>
            <div class="relative left-0 w-[23%] mt-3">
              <div class="text-[17px] text-[#868E96]">
                <RouterLink to="/dashboard-finance/details-cashmanagement">CASH BALANCE DETAILS ></RouterLink>
              </div>
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-content style="margin-left: 16px; margin-right: 0; margin-top: 1px">
        <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
          <div>
            <div class="bg-[#D3F9D8] mt-5 ml-4 mr-4 mb-4 rounded-md text-black">
              <div class="p-5 flex">
                <div class="w-[2%] h-full">IC</div>
                <div class="w-[100%] h-full">
                  <div class="block">
                    <div class="mb-0.5">Overall healthy financial indicators, EBITDA is below RKAP target.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="block ml-4 w-[50%]">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Cash Balance (IDR)</div>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px] text-red-500">51,1 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">
                              </div>
                              <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_up.svg" alt="Trend green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Monthly burn rate after debt (IDR)</div>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px] text-red-500">51.33 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">
                              </div>
                              <div class="mt-2 w-0  percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0  percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_up.svg" alt="Trend green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ... -->
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Potential Cash Needs (IDR)</div>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px]">0.00 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_down.svg" alt="Trend Red SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_down.svg" alt="Trend Red SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Potential Cash Needs (IDR)</div>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px]">0.00 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_down.svg" alt="Trend Red SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_down.svg" alt="Indicator Red SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_down.svg" alt="Trend Red SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Interest Bearing Debt to Invested Capital</div>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px]">1.49 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">
                              </div>
                              <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_up.svg" alt="Trend green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="border-2 mr-4 mb-4 rounded-md text-black percentage-item-hover">
                      <div class="pl-5 pt-2 flex">
                        <div class="w-[100%] h-full">
                          <div class="block">
                            <div class="mb-0.5">Interest Bearing Debt to EBITDA</div>
                            <br>
                            <div class="mb-0.5 flex pt-5 pb-5">
                              <div class="font-extrabold text-[22px]">14.80 Tn</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">
                              </div>
                              <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>
                              <div class="ml-1 mt-2">
                                <img src="../../assets/trend_up.svg" alt="Trend green SVG">
                              </div>
                              <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>
                            </div>
<!--                            <div class="h-6 mb-3 pb-14">-->
<!--                              <div class="text-[#4E4E4E] flex">-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/indicator_up.svg" alt="Indicator Green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0  percentage-item hover:bg-red-500 hover:text-white rounded-sm"> +3.6%</div>-->
<!--                                <div class="ml-1 mt-2">-->
<!--                                  <img src="../../assets/trend_up.svg" alt="Trend green SVG">-->
<!--                                </div>-->
<!--                                <div class="mt-2 w-0 percentage-item hover:bg-[#00AA4E] hover:text-white rounded-sm"> +4.2%</div>-->
<!--                              </div>-->
<!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block ml-4 mr-4 w-[50%]">
                <div class="rounded-md text-black">
                  <div class="relative h-10 w-full ...">
                    <div class="absolute left-0 top-0 ...">
                      <div class="font-bold text-gray-400 text-[17px]">Daily cash balance trend (Rp TN)</div>
                    </div>
                  </div>
                </div>
                <div class="rounded-md text-black mt-2">
                  <div class="relative h-10 w-full ...">
                    <div class="absolute left-0 top-0 ...">
                      <div class="font-bold text-gray-400 text-[12px]">Holding/Subholding</div>
                      <div>
                        <a-select v-model:value="valuex" style="width: 220px; margin-top: 5px" placeholder="Consolidated" disabled>
                          <a-select-option value="lucy">Lucy</a-select-option>
                        </a-select>
                      </div>
                    </div>
                    <div class="absolute top-0 right-0 ...">
                      <div class="block">
<!--                        <a-checkbox v-model:checked="checked">Available Cash</a-checkbox>-->
<!--                        <br>-->
<!--                        <a-checkbox v-model:checked="checked">Minimum Cash Balance</a-checkbox>-->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <div id="chart">
                    <apexchart type="bar" height="240" :options="data2.chartOptions" :series="data2.series"></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-layout-content>
    </div>
    <div class="block w-[30%]">
      <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px', marginRight: '16px' }">
        <div :style="{ background: '#fff' }">
          <div class="p-5 flex">
            <div class="w-[8%] h-full mr-3">
              <img src="../../assets/money.svg" alt="Finance SVG" class="mt-2" width="40" height="40">
            </div>
            <div class="w-[100%] h-full">
              <div class="block">
                <div class="mb-0.5 font-bold text-[22px]">Asset Management</div>
                <div class="text-[12px] text-[#868E96]">Last Updated: 5 mins ago</div>
              </div>
            </div>
            <div class="relative left-0 w-[20%] mt-3">
              <div class="text-[17px] text-[#868E96]">
                <RouterLink to="/dashboard-finance/details-assetmanagement">MORE ></RouterLink>
              </div>
            </div>
          </div>
        </div>
      </a-layout-content>
      <a-layout-content style="margin-left: 16px; margin-right: 0; margin-top: 1px">
        <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
          <div>
            <div class="bg-gray-200 mt-5 ml-4 mr-4 mb-4 rounded-md text-black">
              <div class="p-5 flex">
<!--                <div class="w-[2%] h-full">IC</div>-->
                <div class="w-[100%] h-full">
                  <div class="block">
                    <div class="mb-0.5">No insights for now</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block ml-4">
              <div>
                <div class="border-2 mr-4 mb-4 rounded-md text-black">
                  <div class="pl-5 pt-1 flex">
                    <div class="w-[100%] h-full">
                      <div class="block">
                        <div class="mb-0.5 pt-5">Total new fixed assets (IDR)</div>
                        <div class="mb-0.5 flex pt-12 pb-1">
                          <div class="font-extrabold text-[22px]">14.4 Tn</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 pt-9">
<!--                          <div class="text-[#4E4E4E]">87.6% of Revenue</div>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="border-2 mr-4 mb-4 rounded-md text-black">
                  <div class="pl-5 pt-1 flex">
                    <div class="w-[100%] h-full">
                      <div class="block">
                        <div class="mb-0.5 pt-5">ROIC</div>
                        <div class="mb-0.5 flex pt-12 pb-1">
                          <div class="font-extrabold text-[22px]">14.4 Tn</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 pb-9">
<!--                          <div class="text-[#4E4E4E]">87.6% of Revenue</div>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-layout-content>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.buttonx{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95px;
  width: 360px;
  background: white;
  border-radius: 55px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  /* transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55); */
  overflow: hidden;
  border: none;
}
.buttonx.active{
  height: 20px;
  width: 500px;
}
.buttonx::before{
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: #6087dc;
  border: none;
  border-radius: 55px;
  transition: all 3s ease-in-out;
}
.buttonx.active::before{
  animation: layer 3s ease-in-out forwards;
}
@keyframes layer {
  100%{
    left: 0%;
  }
}
.buttonx .content{
  height: 100%;
  width: 100%;
  display: flex;
  background: #6087dc;
  border: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  transition-delay: 0.2s;
}
.buttonx.active .content{
  transform: translateY(60px);
}
.buttonx .content i,
.buttonx .content .button-text{
  color: #fff;
  font-size: 40px;
  font-weight: 500;
}
.buttonx .content .button-text{
  font-size: 28px;
  margin-left: 8px;
}

.percentage-item { /* hide and position tooltip */
  opacity: 0;
  transition: opacity 0s ease-in 100ms, opacity 100ms;
  position: relative;
}

.percentage-item:after{
  display: block;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  background-color: #fff;
  transition: width 600ms;
}

.percentage-item-hover:hover .percentage-item {
  width: 40px;
  opacity: 1;
  transition: opacity 0s ease-in 800ms, opacity 800ms;
}

.percentage-item-hover:hover .percentage-item:after{
  width: 0;
}
</style>
