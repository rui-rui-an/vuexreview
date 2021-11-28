import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import catagtory from './modules/catagtory'
import list from './modules/list'
Vue.use(Vuex)
const store = new Vuex.Store({
  // ...
  state: {
    test: 'test'
  },
  getters: getters,
  modules: { catagtory, list }
})
export default store

/*
1:引入了vuex
2:在app.vue加入html代码
3:在assets/加入图片资源 
4:在src/styles/index.css
5:在app.vue中引入 index.css
  @import url(~@/styles/index.css)

*/
