<template>
  <div class="list">
    <div class="article_item" v-for="(item, index) in info" :key="index">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div class="img_box">
        <img
          v-for="(item2, index2) in item.cover.images"
          :key="index2"
          :src="item2"
          class="w100"
        />
      </div>
      <!---->
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('list', ['info'])
  }
}
</script>
<style></style>
