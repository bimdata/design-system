import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home/Home.vue';
import Layout from '../views/Layout/Layout.vue';
import Content from '../views/Layout/Content.vue';

// import GETTING STARTED
import Designers from '../views/views-item/GettingStarted/Designers.vue';
import Developpers from '../views/views-item/GettingStarted/Developpers.vue';
import Releases from '../views/views-item/GettingStarted/Releases.vue';
import InternalDoc from '../views/views-item/GettingStarted/InternalDoc.vue';

// import GUIDELINES
import Colors from '../views/views-item/Colors/Colors.vue';
import Grid from '../views/views-item/Grid/Grid.vue';
import Markup from '../views/views-item/Markup/Markup.vue';
import Spacing from '../views/views-item/Spacing/Spacing.vue';
import Typography from '../views/views-item/Typography/Typography.vue';

// import COMPONENTS
import Buttons from '../views/views-item/Buttons/Buttons.vue';
import Card from '../views/views-item/Card/Card.vue';
import Checkbox from '../views/views-item/Checkbox/Checkbox.vue';
import Icons from '../views/views-item/Icons/Icons.vue';
import Input from '../views/views-item/Input/Input.vue';
import Radio from '../views/views-item/Radio/Radio.vue';
import Search from '../views/views-item/Search/Search.vue';
import Table from '../views/views-item/Table/Table.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gettingstarted',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'gettingstarted',
        component: Content,
      },
      {
        path: 'designers',
        name: 'Designers',
        component: Designers
      },
      {
        path: 'developpers',
        name: 'Developpers',
        component: Developpers
      },
      {
        path: 'releases',
        name: 'Releases',
        component: Releases
      },
      {
        path: 'internal-doc',
        name: 'InternalDoc',
        component: InternalDoc
      }
    ]
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
        path: 'card',
        name: 'card',
        component: Card
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: Checkbox
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'input',
        name: 'input',
        component: Input
      },
      {
        path: 'radio',
        name: 'radio',
        component: Radio
      },
      {
        path: 'search',
        name: 'search',
        component: Search
      },
      {
        path: 'table',
        name: 'table',
        component: Table
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
