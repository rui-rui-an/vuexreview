<template>
  <ul class="catagtory">
    <!-- modules下namespaced:true调用state -->
    <li
      :class="{ select: currIndex === index }"
      v-for="(item, index) in list"
      :key="index"
      @click="liClick(index)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      list: [],
      currIndex: 0
    }
  },
  computed: {},
  created () {
    this.getCatagtoryList()
  },
  methods: {
    liClick (index) {},
    ...mapActions('catagtory', ['getCatagtoryList'])
  }
}
</script>
<style></style>
