import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test
  },
  getters
})
