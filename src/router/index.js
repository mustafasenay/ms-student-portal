import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "../components/LoginPage.vue"
import DashboardPage from "../components/DashboardPage.vue"


Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name : "LoginPage",
    component : LoginPage
  },
  {
    path : "/mydashboard",
    name : "DashboardPage",
    component : DashboardPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
