import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import GettingStarted from '../views/GettingStarted/GettingStarted.vue'
import Layout from '../views/Layout/Layout.vue'
import Content from '../views/Layout/Content.vue'

// import GUIDELINES
import Colors from '../views/views-item/Colors/Colors.vue'
import Grid from '../views/views-item/Grid/Grid.vue'
import Markup from '../views/views-item/Markup/Markup.vue'
import Spacing from '../views/views-item/Spacing/Spacing.vue'
import Typography from '../views/views-item/Typography/Typography.vue'

// import COMPONENTS
import Buttons from '../views/views-item/Buttons/Buttons.vue'
import Icons from '../views/views-item/Icons/Icons.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gettingstarted',
    component: GettingStarted,
  },
  {
    path: '/guidelines',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'guidelines',
        component: Content
      },
      {
        path: 'colors',
        name: 'colors',
        component: Colors
      },
      {
        path: 'grid',
        name: 'grid',
        component: Grid
      },
      {
        path: 'markup',
        name: 'markup',
        component: Markup
      },
      {
        path: 'spacing',
        name: 'spacing',
        component: Spacing
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: '',
        name: 'components',
        component: Content
      },
      {
        path: 'buttons',
        name: 'buttons',
        component: Buttons
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
