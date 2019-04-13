import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseInput from '@/components/Base/BaseInput.vue'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton);
Vue.component('BaseInput', BaseInput);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
