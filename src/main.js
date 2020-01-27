import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

Vue.config.productionTip = false

Vue.prototype.$M = M
Vue.$M = Vue.prototype.$M

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
