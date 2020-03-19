import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
//默认情况$bus是没有任何值的
Vue.prototype.$bus=new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
