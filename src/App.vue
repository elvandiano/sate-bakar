<script setup>
import { RouterView } from 'vue-router'
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons-vue";
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="2">
          <desktop-outlined/>
          <span class="ml-3">
            <RouterLink to="/dashboard-finance">Finance</RouterLink>
          </span>
        </a-menu-item>
        <a-menu-item key="1">
          <pie-chart-outlined/>
          <!--          <img src="@/assets/logoMoonshot2.svg" alt="Moonshot SVG" class="mt-2" width="20" height="20">-->
          <span class="ml-3">
            <RouterLink to="/dashboard-moonshot">Moonshot</RouterLink>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0"/>
      <RouterView />
      <a-layout-footer style="text-align: center">
        PLN ICON PLUS ©2024
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
</style>
