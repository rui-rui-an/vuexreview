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
export default {
  data () {
    return {
      list: [],
      currIndex: 0
    }
  },
  computed: {},
  async created () {},
  methods: {
    liClick (index) {}
  }
}
</script>
<style></style>
