import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store";

Vue.config.productionTip = false;
//默认情况$bus是没有任何值的
Vue.prototype.$bus=new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
