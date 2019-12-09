import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import Content from '../views/Content.vue'

import Buttons from '../views/views-item/Buttons/Buttons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/visual',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'visual',
        component: Content
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'components',
        component: Content
      },
      {
        path: 'buttons',
        name: 'buttons',
        component: Buttons
      },
      {
        path: 'buttons2',
        name: 'buttons2',
        component: Buttons
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
