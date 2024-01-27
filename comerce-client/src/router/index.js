import { createRouter, createWebHistory } from 'vue-router'

import cartView from "@/views/CartView";
import settingsView from "@/views/SettingsView";
import homeView from "@/views/HomeView";
import catalogView from "@/views/CatalogView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalogView,
    meta: {
      title: "Kofi: Tic Tac Toe",
      forVisitors: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView
  },
  {
    path: '/settings',
    name: 'settings',
    component: settingsView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
