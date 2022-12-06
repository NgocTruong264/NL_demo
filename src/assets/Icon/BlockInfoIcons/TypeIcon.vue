<template>
  <icon :style="{fontSize: '18px'}">
    <template #component>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666992 21.6666V7.66664L10.0003 0.599976L19.3337 7.66664V21.6666H16.0003V9.63331H4.00033V21.6666H0.666992ZM5.33366 20.3H14.667V16.3H5.33366V20.3ZM5.33366 14.9666H14.667V10.9666H5.33366V14.9666Z" fill="#910D10"/>
      </svg>
    </template>
  </icon>
</template>
<script>
import { defineComponent } from 'vue';
import Icon from '@ant-design/icons-vue';
export default defineComponent({
components: {
  Icon
},
});
</script>
<style>
.custom-icons-list :deep(.anticon) {
margin-top: 6px;
}

</style>
  