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
  getCatagtoryList () {
    getCatagtoryList.then(res => {
      console.log(res)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
