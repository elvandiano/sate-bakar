<script setup>
import { ref } from 'vue';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
const collapsed = ref(false);
const selectedKeys = ref(['1']);

const data = {
  series: [{
    name: 'Actual',
    type: 'column',
    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 0, 0]
  },
  {
    name: 'RKAP 2022',
    type: 'line',
    data: [32, 34, 66, 67, 56, 62, 60, 60, 63, 68, 62, 62]
  }],
  chartOptions: {
    stroke: {
      width: [0, 4]
    },
    // markers: {
    //   size: 3,
    //   colors: '#d70a0a',
    //   strokeColors: '#d70a0a',
    // },
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    },
    legend: {
      position: 'top',
      offsetY: 0,
      labels: {
        colors: ['#8099D9', '#CCCCCC'],
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#8099D9'],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    fill: {
      opacity: 1,
      colors: ['#8099D9', '#CCCCCC']
    }
  },
}

const data2 = {

  series: [{
    name: 'Actual',
    type: 'column',
    data: [44, 50, 41, 67, 22, 41, 20, 35, 75, 32, 0, 0]
  }, {
    name: 'RKAP 2022',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chartOptions: {
    chart: {
      height: 350,
          type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    xaxis: {
      type: 'string'
    },
    yaxis: [{
      title: {
        text: '',
      },

    }, {
      opposite: true,
      title: {
        text: 'RKAP 2022'
      }
    }],
      fill: {
        opacity: 1,
        colors: ['#8099D9', '#CCCCCC']
      },
      legend: {
        position: 'top',
        offsetY: 0,
        labels: {
          colors: ['#8099D9', '#CCCCCC'],
        },
      },
  }
}

</script>

<template>
  <div class="bg-sky-500/100 mt-5 ml-4 mr-4 rounded-md text-white">
    <div class="p-5 flex">
      <div class="w-[2%] h-full">IC</div>
      <div class="w-[100%] h-full">
        <div class="block">
          <div class="mb-0.5">Overall healthy performance across PLN Group in main indicators. A few areas for BoD to focus on,</div>
          <div class="mb-0.5">- EBITDA margin below RKAP</div>
          <div class="mb-0.5">- Generation performance is below RKAP from 3 power-plants</div>
          <div class="mb-0.5">- Increase of VaR from commodity price</div>
          <div class="mb-0.5">- 23 projects are delayed, spending already passed RKAP</div>
        </div>
      </div>
    </div>
  </div>
  <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px', marginRight: '16px' }">
    <div :style="{ background: '#fff' }">
      <div class="p-5 flex">
        <div class="w-[2%] h-full">IC</div>
        <div class="w-[100%] h-full">
          <div class="block">
            <div class="mb-0.5 font-bold text-[22px]">ASSET MANAGEMENT</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
  <a-layout-content style="margin-left: 16px; margin-right: 16px; margin-top: 1px">
    <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
      <div>
        <div class="flex">
          <div class="block ml-4 mr-4 w-[70%]">
            <div class="bg-[#D3F9D8] mt-5 ml-4 mr-4 mb-4 rounded-md text-black">
              <div class="p-5 flex">
                <div class="w-[2%] h-full">IC</div>
                <div class="w-[100%] h-full">
                  <div class="block">
                    <div class="mb-0.5">EBITDA margin is decreasing yoy due to increasing BPP and foreign exchange loss"</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <div class="border-2 mr-4 mb-4 rounded-md text-black">
                  <div class="pl-5 pt-1 flex">
                    <div class="w-[100%] h-full">
                      <div class="block">
                        <div class="mb-0.5 pt-2">Total assets</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">1,631.2 Tn</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Total fixed assets</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">1,421.2 Tn</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Forecast of fixed assets by 2022 End</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">1,442.2 Tn</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md text-black">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[17px]">Total Asset</div>
                </div>
                <div class="absolute top-0 right-0 ...">
                  <div class="flex gap-2">
                    <div>
                      <a-checkbox v-model:checked="checked">RKAP 2022</a-checkbox>
                      <a-checkbox v-model:checked="checked">Actual</a-checkbox>
                      <a-checkbox v-model:checked="checked">Forecast</a-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-20">
              <div id="chart">
                <apexchart type="line" height="550" :options="data2.chartOptions" :series="data2.series"></apexchart>
              </div>
            </div>
          </div>
          <div class="block ml-4 w-[30%]">
            <div class="pt-5">
              <div class="border-2 mr-4 mb-4 rounded-md text-black">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5 pt-3">Total new fixed assets</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">Rp 4.6 Tn</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
                      <div class="mb-0.5 pt-3">Fixed operating assets</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">1,252.7 Tn</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
                      <div class="mb-0.5 pt-3">Fixed non-operating assets (ATTB)</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">6.5 Tn</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
                      <div class="mb-0.5 pt-3">Fixed not-operating yet assets (ATBM)</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">3.5 Tn</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
                      <div class="mb-0.5 pt-3">Generation assets utilization (Capacity factor)</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">53.7 %</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
                      <div class="mb-0.5 pt-3">% Assets insured to total PPE</div>
                      <div class="mb-0.5 flex pt-2">
                        <div class="font-extrabold text-[22px]">15.9 %</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3">
                        <div class="text-[#4E4E4E]"></div>
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
  </a-layout-content>
  <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px', marginRight: '16px' }">
    <div :style="{ background: '#fff' }">
      <div class="p-5 flex">
        <div class="w-[2%] h-full">IC</div>
        <div class="w-[100%] h-full">
          <div class="block">
            <div class="mb-0.5 font-bold text-[22px]">Return of invested capital (ROIC) Forecast FY 2022</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
  <a-layout-content style="margin-left: 16px; margin-right: 16px; margin-top: 1px">
    <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
      <div>
        <div class="flex">
          <div class="block ml-4 mr-4 w-[100%]">
            <div class="bg-[#D3F9D8] mt-5 mr-4 mb-4 rounded-md text-black">
              <div class="p-5 flex">
                <div class="w-[2%] h-full">IC</div>
                <div class="w-[100%] h-full">
                  <div class="block">
                    <div class="mb-0.5">EBITDA margin is decreasing yoy due to increasing BPP and foreign exchange loss"</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-5 gap-2">
              <div>
                <div class="border-2 mr-4 mb-4 rounded-md text-black">
                  <div class="pl-5 pt-1 flex">
                    <div class="w-[100%] h-full">
                      <div class="block">
                        <div class="mb-0.5 pt-2">ROIC</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">2.6%</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Operating margin</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">12.7%</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Capital turnover</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">28.9%</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Return on assets</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">0.8 %</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
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
                        <div class="mb-0.5 pt-2">Cost of capital (WACC)</div>
                        <div class="mb-0.5 flex pt-5">
                          <div class="font-extrabold text-[22px]">4.0%</div>
                        </div>
                        <div class="mb-0.5 flex pb-1">
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +3.6%</div>
                          <div class="ml-1 mt-2">ic</div>
                          <div class="mt-2"> +4.2%</div>
                        </div>
                        <div class="h-6 mb-3 ml-1 pb-5">
                          <div class="text-[#4E4E4E]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md text-black">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[17px]">ROIC</div>
                </div>
                <div class="absolute top-0 right-0 ...">
                  <div class="flex gap-2">
                    <div>
                      <a-checkbox v-model:checked="checked">RKAP 2022</a-checkbox>
                      <a-checkbox v-model:checked="checked">Actual</a-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-20">
              <div id="chart">
                <apexchart type="line" height="550" :options="data.chartOptions" :series="data.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
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
</style>
