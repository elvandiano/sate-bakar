<script>

import { DownOutlined } from '@ant-design/icons-vue';

export default {
  name: "DashboardMoonshot",
  components: {
    DownOutlined
  },
  methods: {
    handleMenuClick (e){
      console.log('click', e);
    }
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
      <div class="w-[2%] h-full">
        <img src="../../assets/circle_blue.svg" alt="Circle Blue SVG">
      </div>
      <div class="w-[100%] h-full">
        <div class="block">
          <div class="mb-0.5">Overall impact is beyond annualized target, however most milestone completion is overdue (as of Monday 11 February: only 10% of last week's milestones completion have been uploaded):</div>
          <div class="mb-0.5">All impacts beyond target</div>
          <div class="mb-0.5">* 41 milestones are overdue - reminder to  upload your milestone completion to MOTION</div>
          <div class="mb-0.5">* 3 milestones are overdue for over 1 month: Smart Customer Services (2), Smart Power Plant (1)</div>
          <div class="mb-0.5">* 2 milestones are overdue for over 2 week: Green Enabling Transmission (1), Asset Management (1)</div>
          <div class="mb-0.5">* 3 milestones are overdue for over 1 week: Additional demand non-RUPTL (2), System debottlenecking (1) </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ml-4 mt-4">
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="Directorate - Overall">
            Directorate - Overall
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Directorate - Overall
        <DownOutlined/>
      </a-button>
    </a-dropdown>
  </div>
  <a-layout-content :style="{ marginLeft: '16px', marginTop: '10px', marginRight: '16px' }">
    <div :style="{ background: '#fff' }">
      <div class="p-5 flex">
        <div class="w-[2%] h-full mr-3">
          <img src="../../assets/logoMoonshot2.svg" alt="Finance SVG" class="mt-2" width="40" height="40">
        </div>
        <div class="w-[100%] h-full">
          <div class="block">
            <div class="mb-0.5 font-bold text-[22px]">Moonshot Impacts</div>
            <div class="text-[12px] text-[#868E96]">Last Updated: 1 day ago</div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>

</template>

<style scoped>
</style>
