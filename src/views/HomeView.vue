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

</script>

<template>
  <div class="buttonx" hidden>
    <div class="content">
      <i class="bx bx-cloud-download"></i>
      <span class="button-text"></span>
    </div>
  </div>
  <a-layout-content style="margin: 10px 16px">
<!--    <a-breadcrumb style="margin: 16px 0">-->
<!--      <a-breadcrumb-item>User</a-breadcrumb-item>-->
<!--      <a-breadcrumb-item>Bill</a-breadcrumb-item>-->
<!--    </a-breadcrumb>-->
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <div>
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
              <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="flex w-0 flex-1 items-center">
                      <div class="ml-4 flex min-w-0 flex-1 gap-2">
                        <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="flex w-0 flex-1 items-center">
                      <div class="ml-4 flex min-w-0 flex-1 gap-2">
                        <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                        <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
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
