<template>
  <ul class="catagtory">
    <!-- modules下namespaced:true调用state -->
    <li
      :class="{ select: currIndex === index }"
      v-for="(item, index) in catagtoryList"
      :key="index"
      @click="liClick(index)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
// import { getCatagtoryList } from '@/api/catagtory'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // list: []
      // currIndex: 0
    }
  },
  computed: {
    ...mapState('catagtory', ['catagtoryList', 'currIndex'])
  },
  async created () {
    // modules下namespaced:true调用actions:
    // this.$store.dispatch('catagtory/getCatagtoryList')
    // const res = await getCatagtoryList()
    // this.list = res.data.data.channels
    // window.console.log('列表数据：', res)
    this.getCatagtoryList()
  },
  methods: {
    ...mapActions('catagtory', ['getCatagtoryList']),
    ...mapMutations(['catagtory/setCurrIndex']),
    ...mapActions('list', ['getListInfo']),
    liClick (index) {
      // this.currIndex = index
      // this.$store.commit('catagtory/setCurrIndex', index)
      this['catagtory/setCurrIndex'](index)
      this.getListInfo()
    }
  }
}
</script>
<style></style>
