<template>
  <a-row class="thongtin-page">
    <a-col span="24">
      <img src="@/assets/TestImage.svg" alt="" class="image-page">
    </a-col>
    <a-col span="24">
      <div class="project-title">
        <span class="project-name">AKARI CITY</span>
        <img src="@/assets/Icon/FunctionIcons/IconMenuTooltip.svg" alt="">
      </div>
    </a-col>
    <a-col span="24">
      <a-row class="project-overview">
        <a-col span="5" :class="key == 'block' ? 'active info block' : 'info block'" @click="setKey('block')">
          <block-icon class="info-icon"/>
          <div class="info-title">Block</div>
          <div class="info-number">4</div>
        </a-col>
        <a-col span="5" :class="key == 'type' ? 'active type info' : 'type info'" @click="setKey('type')">
          <loai-can-ho class="info-icon"/>
          <div class="info-title">Loại căn hộ</div>
          <div class="info-number">7</div>
        </a-col>
        <a-col span="5" :class="key == 'tienich' ? 'active tienich info' : 'tienich info'" @click="setKey('tienich')">
          <tien-ich class="info-icon"/>
          <div class="info-title">Tiện ích</div>
          <div class="info-number">4</div>
        </a-col>
        <a-col span="5" :class="key == 'tangham' ? 'active tangham info' : 'tangham info'" @click="setKey('tangham')">
          <tang-ham class="info-icon"/>
          <div class="info-title">Tầng hầm</div>
          <div class="info-number">9</div>
        </a-col>
      </a-row>
    </a-col>
    <a-col span="24">
      <TableLoaiCanHo v-if="key === 'type'"/>
      <ProjectDetail v-else/>
    </a-col>
  </a-row>
</template>
<script>
import { ref } from 'vue';
import BlockIcon from '@/assets/Icon/ThongTinPage/BlockIcon.vue';
import LoaiCanHo from '@/assets/Icon/ThongTinPage/LoaiCanHo.vue';
import TangHam from '@/assets/Icon/ThongTinPage/TangHam.vue';
import TienIch from '@/assets/Icon/ThongTinPage/TienIch.vue';

import ProjectDetail from '@/components/ThongTinPage/ProjectDetail.vue'
import TableLoaiCanHo from '@/components/ThongTinPage/TableLoaiCanHo.vue';
export default {
  components: { BlockIcon, LoaiCanHo, TangHam, TienIch, ProjectDetail, TableLoaiCanHo },
  setup() {
    const key = ref('')
    const setKey = (value) => {
      key.value = value
    }
    return {
      setKey,
      key
    }
  }
}
</script>
<style lang="scss">
  .thongtin-page {
    background: #FAFAFA;
    .image-page {
      width: 100%;
    }
    .project-title {
      display: flex;
      justify-content: space-between;
      padding: 16px 24px;
      .project-name {
        font-size: 32px;
        font-weight: bold;
      }
    }
    .project-overview {
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      .info {
        padding: 16px 0px;
        border-radius: 8px;
        .info-icon {
          padding-bottom: 8px;
        }
        .info-title {
          padding-bottom: 16px;
        }
        .info-number {
          font-size: 24px;
        }
      }
      .active {
        border-bottom: 3px solid currentColor;
      }
      .info.block {
        background: #FFF2C5;
      }
      .info.type {
        background: #F4F2FF;
      }
      .info.tienich {
        background: #E0F0FF;
      }
      .info.tangham {
        background: #FFF6F6;
      }
    }
    // .detail-container {
    //   text-align: left;
    //   margin: 32px 16px;
    //   background: #FFF;
    //   border-radius: 8px;
    // }
  }
</style>