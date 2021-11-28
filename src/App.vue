<template>
  <div id="app">
    <catagtory></catagtory>
    <list></list>
  </div>
</template>
<script>
// 组件套用组件1:导入2:注册3:使用
import catagtory from '@/components/catagtory'
import list from '@/components/list'
export default {
  components: {
    catagtory,
    list
  }
}
</script>
<style>
/* ~@:代表src */
@import url(~@/styles/index.css);
</style>
