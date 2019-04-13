import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as settings from '@/store/modules/settings.js'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    user,
    settings
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [vuexPersist.plugin]
});
