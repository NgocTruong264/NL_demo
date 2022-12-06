<template>
  <a-layout-content>
    <router-view />
  </a-layout-content>
</template>
<script>
import { defineComponent } from 'vue';
// import ThongTin from '../Icon/ToaNha/ThongTin.vue'
export default defineComponent({
  components: {
    // ThongTin
  },
});
</script>
<style lang="scss">
// .layout-content.ant-layout-content {
//   margin-left: calc(100% - );
// }
</style>
