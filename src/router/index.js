import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardFinance from '../views/finance/dashboardFinance.vue'
import ProfitAndLostStatement from '../views/finance/details/profitAndLostStatement.vue'
import CashManagement from '../views/finance/details/cashManagement.vue'
import AssetManagement from '../views/finance/details/assetManagement.vue'
import DashboardMoonshot from "@/views/moonshot/DashboardMoonshot.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard-finance',
      name: 'finance',
      component: DashboardFinance
    },
    {
      path: '/dashboard-finance/details-pnl',
      name: 'detail profit & lost statement',
      component: ProfitAndLostStatement
    },
    {
      path: '/dashboard-finance/details-cashmanagement',
      name: 'detail cash management',
      component: CashManagement
    },
    {
      path: '/dashboard-finance/details-assetmanagement',
      name: 'detail asset management',
      component: AssetManagement
    },
    {
      path: '/dashboard-moonshot',
      name: 'Moonshot',
      component: DashboardMoonshot
    }
  ]
})

export default router
