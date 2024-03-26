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

const columns = [
  { title: '', dataIndex: 'name', key: 'name' },
  { title: 'Jan 2023', dataIndex: 'jan', key: 'jan' },
  { title: 'Feb 2023', dataIndex: 'feb', key: 'feb' },
  { title: 'Mar 2023', dataIndex: 'mar', key: 'mar' },
  { title: 'Apr 2023', dataIndex: 'apr', key: 'apr' },
  { title: 'May 2023', dataIndex: 'may', key: 'may' },
  { title: 'Jun 2023', dataIndex: 'jun', key: 'jun' },
  { title: 'Jul 2023', dataIndex: 'jul', key: 'jul' },
  { title: 'Aug 2023', dataIndex: 'aug', key: 'aug' },
  { title: 'Sep 2023', dataIndex: 'sep', key: 'sep' },
  { title: 'Oct 2023', dataIndex: 'oct', key: 'oct' },
  { title: 'Nov 2023', dataIndex: 'nov', key: 'nov' },
  { title: 'Dec 2023', dataIndex: 'dec', key: 'dec' },
];

const data = [
  // { name: 'Total Revenue (Rp Tn)', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'Total operating expenses', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'Operating loss before subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'Operating income after subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'Income (loss) before tax', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'Income (loss) for the period', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name: 'EBITDA', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
];
for (let i = 0; i < 7; ++i) {
  if (i === 0) {
    data.push({
      key: i, name: 'Total Revenue (Rp Tn)', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 1) {
    data.push({
      key: i, name: 'Total operating expenses', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 2) {
    data.push({
      key: i, name: 'Operating loss before subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 3) {
    data.push({
      key: i, name: 'Operating income after subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 4) {
    data.push({
      key: i, name: 'Income (loss) before tax', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 5) {
    data.push({
      key: i, name: 'Income (loss) for the period', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
  if (i === 6) {
    data.push({
      key: i, name: 'EBITDA', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14'
    });
  }
}

const innerColumns = [
  { title: '', dataIndex: 'name1', key: 'name1' },
  { title: '', dataIndex: 'jan1', key: 'jan1' },
  { title: '', dataIndex: 'feb1', key: 'feb1' },
  { title: '', dataIndex: 'mar1', key: 'mar1' },
  { title: '', dataIndex: 'apr1', key: 'apr1' },
  { title: '', dataIndex: 'may1', key: 'may1' },
  { title: '', dataIndex: 'jun1', key: 'jun1' },
  { title: '', dataIndex: 'jul1', key: 'jul1' },
  { title: '', dataIndex: 'aug1', key: 'aug1' },
  { title: '', dataIndex: 'sep1', key: 'sep1' },
  { title: '', dataIndex: 'oct1', key: 'oct1' },
  { title: '', dataIndex: 'nov1', key: 'nov1' },
  { title: '', dataIndex: 'dec1', key: 'dec1' },
];

const innerData = [
  // { name1: 'Total Revenue (Rp Tn)', jan1: '3', feb1: '13', mar1: '18', apr1: '1', may1: '4', jun1: '7', jul1: '12', aug1: '5', sep1: '14', oct1: '5', nov1: '13', dec1: '14' },
  // { name1: 'Total operating expenses', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name1: 'Operating loss before subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name1: 'Operating income after subsidy and compensation income', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name1: 'Income (loss) before tax', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name1: 'Income (loss) for the period', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
  // { name1: 'EBITDA', jan: '3', feb: '13', mar: '18', apr: '1', may: '4', jun: '7', jul: '12', aug: '5', sep: '14', oct: '5', nov: '13', dec: '14' },
];
for (let i = 0; i < 3; ++i) {
  if (i === 0) {
    innerData.push({
      key: i, name1: 'Customer connection fees', jan1: '3', feb1: '13', mar1: '18', apr1: '1', may1: '4', jun1: '7', jul1: '12', aug1: '5', sep1: '14', oct1: '5', nov1: '13', dec1: '14'
    });
  }
  if (i === 1) {
    innerData.push({
      key: i, name1: 'Sale of electricity', jan1: '3', feb1: '13', mar1: '18', apr1: '1', may1: '4', jun1: '7', jul1: '12', aug1: '5', sep1: '14', oct1: '5', nov1: '13', dec1: '14'
    });
  }
  if (i === 2) {
    innerData.push({
      key: i, name1: 'Others', jan1: '3', feb1: '13', mar1: '18', apr1: '1', may1: '4', jun1: '7', jul1: '12', aug1: '5', sep1: '14', oct1: '5', nov1: '13', dec1: '14'
    });
  }
}

const data2 = {

  series: [{
    name: 'Actual',
    data: [44, 50, 41, 67, 22, 41, 20, 35, 75, 32, 0, 0]
  }, {
    name: 'RKAP 2022',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }, {
    name: 'RKAP 2022',
    data: [23, 50, 35, 67, 43, 41, 17, 35, 22, 32, 12, 16]
  }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [1, 1],
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    xaxis: {
      show: false,
      type: 'string',
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1,
      colors: ['#8099D9', '#CCCCCC']
    },
    legend: {
      show: false
    },
  }
}

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
            <div class="mb-0.5 font-bold text-[22px]">Profit and loss statement</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: Yesterday</div>
          </div>
        </div>
        <div class="relative left-0 w-[8%] mt-3">
          <div class="text-[17px] text-[#868E96]">logo</div>
        </div>
      </div>
    </div>
  </a-layout-content>
  <a-layout-content style="margin-left: 16px; margin-right: 16px; margin-top: 1px">
    <div :style="{ padding: '5px', background: '#fff', minHeight: '360px' }">
      <div>
        <a-table :columns="columns" :data-source="data" class="components-table-demo-nested">
          <template #expandedRowRender>
            <div class="flex">
              <div class="w-[28%]"></div>
              <div id="chart" class="w-[72%]">
                <apexchart type="line" height="100" :options="data2.chartOptions" :series="data2.series"></apexchart>
              </div>
            </div>
            <a-table :columns="innerColumns" :data-source="innerData" :pagination="false"></a-table>
          </template>
        </a-table>
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
</style>
