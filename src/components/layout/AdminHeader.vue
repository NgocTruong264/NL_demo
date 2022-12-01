<template>
  <a-layout class="header">
    <a-layout-header class="layout-header">
      <a-row>
        <a-col span="1" offset="22"><noti-icon /></a-col>
        <a-col span="1"><message-icon /></a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
</template>
<script>
import NotiIcon from '../../assets/Icon/HeaderIcons/NotiIcon.vue';
import MessageIcon from '../../assets/Icon/HeaderIcons/MessageIcon.vue';
export default {
  components: {NotiIcon, MessageIcon}
}
</script>
<style lang="scss">
  .ant-layout-header.layout-header {
    background: #fff;
  }
  .ant-layout.header {
    max-height: 64px;
    background: #fff;
  }
</style>