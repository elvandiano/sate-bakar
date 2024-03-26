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
    name: 'Available Cash',
    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    name: 'Restricted Cash',
    data: [13, 23, 20, 8, 13, 27, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, -22, -43, -44, -55, -41, -67, -22, -43]
  }, {
    name: 'Outlook Ending Balance',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -21, -14, -13, -23, -20, -8, -13, -27]
  }],
  chartOptions: {
    markers: {
      size: 2,
      colors: '#d70a0a',
      strokeColors: '#04ef2b',
    },
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
        borderRadius: 0,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
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
      categories: ['JAN 2023', 'FEB 2023', 'MAR 2023', 'APR 2023', 'MAY 2023', 'JUN 2023', 'JUL 2023', 'AUG 2023', 'SEP 2023', 'OCT 2023', 'NOV 2023', 'DEC 2023',
        'JAN 2024', 'FEB 2024', 'MAR 2024', 'APR 2024', 'MAY 2024', 'JUN 2024', 'JUL 2024', 'AUG 2024', 'SEP 2024', 'OCT 2024', 'NOV 2024', 'DEC 2024'],
      labels: {
        rotate: 0
      }
    },
    legend: {
      position: 'right',
      offsetY: 0,
      labels: {
        colors: ['#92CAF8', '#8099D9', '#CCCCCC', '#9780D9', '#C892F8'],
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ['#92CAF8', '#8099D9', '#CCCCCC', '#9780D9', '#C892F8'],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    fill: {
      opacity: 1,
      colors: ['#92CAF8', '#8099D9', '#CCCCCC', '#9780D9', '#C892F8']
    },
    annotations: {
      yaxis: [
        {
          y: 88,
          borderColor: '#d01515',
          label: {
            borderColor: '#d70a0a',
            style: {
              color: '#fff',
              background: '#d01515'
            },
            text: '88',
            position: 'left'
          }
        }
      ]
    }
  },
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
            <div class="mb-0.5 font-bold text-[22px]">CASH MANAGEMENT</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
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
            <div class="w-[2%] h-full">IC</div>
            <div class="w-[100%] h-full">
              <div class="block">
                <div class="mb-0.5">Overall healthy financial indicators, EBITDA is below RKAP target.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="block ml-4 mr-4 w-[70%]">
            <div class="rounded-md text-black">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[17px]">Monthly Cash Balance (IDR Tn)</div>
                </div>
                <div class="absolute top-0 right-0 ...">
                  <div class="flex gap-2">
                    <div>
                      <a-checkbox v-model:checked="checked">Available Cash</a-checkbox>
                      <a-checkbox v-model:checked="checked">Restricted Cash</a-checkbox>
                      <a-checkbox v-model:checked="checked">Outlook Ending Balance</a-checkbox>
                      <a-checkbox v-model:checked="checked">Minimum Cash Balance / RKAP REV</a-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md text-black mt-2">
              <div class="relative h-10 w-full ...">
                <div class="absolute left-0 top-0 ...">
                  <div class="font-bold text-gray-400 text-[12px]">Holding/Subholding</div>
                  <div class="flex">
                    <a-select v-model:value="value2" style="width: 220px; margin-top: 5px" placeholder="Consolidated" disabled>
                      <a-select-option value="lucy">Lucy</a-select-option>
                    </a-select>
                    <div class="mt-1 ml-2">
                      <a-radio-group v-model:value="a" button-style="solid">
                        <a-radio-button value="a">Daily</a-radio-button>
                        <a-radio-button value="b">Month</a-radio-button>
                      </a-radio-group>
                    </div>
                  </div>
                </div>
                <div class="absolute top-0 right-0 ...">
                  <div class="block">
                    <div class="font-bold text-gray-400 text-[12px]">Set Min Cash Balance / RKAP REV</div>
                    <a-select v-model:value="value2" style="width: 200px; margin-top: 5px; margin-right: 10px" placeholder="Default" disabled>
                      <a-select-option value="lucy">Lucy</a-select-option>
                    </a-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-20">
              <div id="chart">
                <apexchart type="bar" height="550" :options="data.chartOptions" :series="data.series"></apexchart>
              </div>
            </div>
          </div>
          <div class="block ml-4 w-[30%]">
            <div>
              <div class="border-2 mr-4 mb-4 rounded-md text-black">
                <div class="pl-5 pt-1 flex">
                  <div class="w-[100%] h-full">
                    <div class="block">
                      <div class="mb-0.5 pt-2">Potential Cash Needs (IDR)</div>
                      <div class="mb-0.5 flex pt-10">
                        <div class="font-extrabold text-[22px]">380,619 B</div>
                      </div>
                      <div class="mb-0.5 flex pb-1">
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3 pb-20">
                        <div class="text-[#4E4E4E]">Assuming no compensation and financing proceeds</div>
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
                      <div class="mb-0.5 pt-2">Monthly burn rate after debt (IDR)</div>
                      <div class="mb-0.5 flex pt-10">
                        <div class="font-extrabold text-[22px]">380,619 B</div>
                      </div>
                      <div class="mb-0.5 flex pb-1">
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3 ml-1 pb-20">
                        <div class="text-[#4E4E4E]">Excluding compensation</div>
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
                      <div class="mb-0.5 pt-2">DSCR</div>
                      <div class="mb-0.5 flex pt-10">
                        <div class="font-extrabold text-[22px]">1.5x</div>
                      </div>
                      <div class="mb-0.5 flex pb-1">
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +3.6%</div>
                        <div class="ml-1 mt-2">ic</div>
                        <div class="mt-2"> +4.2%</div>
                      </div>
                      <div class="h-6 mb-3 ml-1 pb-20">
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
