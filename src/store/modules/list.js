import { getInfo } from '@/api/list'
const state = {
  info: []
}
const mutations = {
  setInfo (state, value) {
    state.info = value
  }
}
const getters = {
  listGetId (state, getters, rootState) {
    return rootState.catagtory.catagtoryList[rootState.catagtory.currIndex].id
  }
}
const actions = {
  async getListInfo (store) {
    // store={commit,dispatch,state,getters,rootState,rootGetters}
    //rootState  :{ 模块名:{字段名}  }
    // let id =
    //   store.rootState.catagtory.catagtoryList[
    //     store.rootState.catagtory.currIndex
    //   ].id
    // const res = await getInfo(store.rootGetters.getId)
    const res = await getInfo(store.getters.listGetId)
    store.commit('setInfo', res.data.data.results)
    window.console.log('详情数据', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
