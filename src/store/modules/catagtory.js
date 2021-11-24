import { getCatagtoryList } from '@/api/catagtory'
const state = {
  catagtoryList: []
}
const mutations = {
  setCatagtoryList (store, value) {
    store.state.catagtoryList = value
  }
}
const actions = {
  async getCatagtoryList () {
    console.log(1111111111111)
    // getCatagtoryList.then(res => {
    //   console.log(res)
    // })
    const res = await getCatagtoryList()
    console.log(res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
