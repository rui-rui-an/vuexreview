import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import list from './modules/list'
import catagtory from './modules/catagtory'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    list,
    catagtory
  }
})
