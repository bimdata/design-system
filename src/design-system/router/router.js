import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home/Home.vue';
import Layout from '../views/Layout/Layout.vue';
import Content from '../views/Layout/Content.vue';

// import GETTING STARTED
import Designers from '../views/GettingStarted/Designers.vue';
import Developpers from '../views/GettingStarted/Developpers.vue';
import Releases from '../views/GettingStarted/Releases.vue';
import InternalDoc from '../views/GettingStarted/InternalDoc.vue';

// import GUIDELINES
import Colors from '../views/Guidelines/Colors/Colors.vue';
import Grid from '../views/Guidelines/Grid/Grid.vue';
import Markup from '../views/Guidelines/Markup/Markup.vue';
import Spacing from '../views/Guidelines/Spacing/Spacing.vue';
import Typography from '../views/Guidelines/Typography/Typography.vue';

// import COMPONENTS
import Buttons from '../views/Components/Buttons/Buttons.vue';
import Card from '../views/Components/Card/Card.vue';
import Checkbox from '../views/Components/Checkbox/Checkbox.vue';
import Icons from '../views/Components/Icons/Icons.vue';
import Input from '../views/Components/Input/Input.vue';
import Loaders from '../views/Components/Loaders/Loaders.vue'
import Pagination from '../views/Components/Pagination/Pagination.vue'
import Radio from '../views/Components/Radio/Radio.vue';
import Search from '../views/Components/Search/Search.vue';
import Select from '../views/Components/Select/Select.vue';
import Table from '../views/Components/Table/Table.vue';
import Textarea from '../views/Components/Textarea/Textarea.vue';
import Tooltip from '../views/Components/Tooltip/Tooltip.vue';

// import UTILITIES
import List from '../views/Utilities/List/List.vue';
import Margin from '../views/Utilities/Margin/Margin.vue';
import Padding from '../views/Utilities/Padding/Padding.vue';

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
        name: 'designers',
        component: Designers
      },
      {
        path: 'developpers',
        name: 'developpers',
        component: Developpers
      },
      {
        path: 'releases',
        name: 'releases',
        component: Releases
      },
      {
        path: 'internal-doc',
        name: 'internal-doc',
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
        path: 'cards',
        name: 'cards',
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
        path: 'loaders',
        name: 'loaders',
        component: Loaders
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: Pagination
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
        path: 'select',
        name: 'select',
        component: Select
      },
      {
        path: 'table',
        name: 'table',
        component: Table
      },
      {
        path: 'textarea',
        name: 'textarea',
        component: Textarea
      },
      {
        path: 'tooltips',
        name: 'tooltips',
        component: Tooltip
      }
    ]
  },
  {
    path: '/utilities',
    component: Layout,
    children: [
      {
        path: '',
        name: 'utilities',
        component: Content
      },
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'margin',
        name: 'margin',
        component: Margin
      },
      {
        path: 'padding',
        name: 'padding',
        component: Padding
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
