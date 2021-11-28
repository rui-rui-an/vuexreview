import { getCatagtoryList } from '@/api/catagtory'
const state = {
  catagtoryList: [],
  currIndex: 0
}
const mutations = {
  setCatagtoryList (state, value) {
    state.catagtoryList = value
  },
  setCurrIndex (state, value) {
    state.currIndex = value
  }
}
const actions = {
  async getCatagtoryList (store) {
    const res = await getCatagtoryList()
    store.commit('setCatagtoryList', res.data.data.channels)
    // 调用list模块内的actions方法
    store.dispatch('list/getListInfo', null, { root: true })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
