import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import BaseButton from '@/components/Base/BaseButton.vue'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
