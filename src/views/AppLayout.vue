<template>
  <a-layout class="layout-admin">
    <AdminSider />
    <a-layout>
      <AdminHeader/>
      <AdminContent class="layout-content"/>
    </a-layout>
  </a-layout>
</template>
<script>
import AdminSider from '@/components/layout/AdminSider.vue'
import { defineComponent, ref } from 'vue';
import AdminContent from '@/components/layout/AdminContent.vue';
import AdminHeader from '@/components/layout/AdminHeader.vue';
export default defineComponent({
  components: {
    AdminSider,
    AdminContent,
    AdminHeader
},
  setup() {
    return {
      selectedKeys: ref(['4']),
    };
  },
});
</script>
<style lang="scss">
  .layout-admin.ant-layout {
    flex-direction: row;
  }
  .ant-layout-content.layout-content {
    height: calc(100vh - 64px);
    background: #fff;
    height: 100%;
  }
</style>
