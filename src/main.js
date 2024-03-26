import './assets/main.css'

import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(VueApexCharts)

app.mount('#app')
