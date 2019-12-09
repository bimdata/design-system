import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/visual',
    name: 'visual',
    component: function () {
      return import('../views/Visual.vue')
    }
  },
  {
    path: '/components',
    name: 'components',
    component: function () {
      return import('../views/Components.vue')
    }
  },
  {
    path: '/components/buttons',
    name: 'buttons',
    component: function () {
      return import('../views/views-item/Buttons/Buttons.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
