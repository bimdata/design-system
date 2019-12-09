import Vue from 'vue'
import App from './design-system/App.vue'
import router from './design-system/router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
