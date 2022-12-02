<template>
  <a-row class="thongtin-page">
    <a-col span="24">
      <img src="@/assets/TestImage.svg" alt="" class="image-page">
    </a-col>
    <a-col span="24">
      <div class="project-title">
        <span class="project-name">AKARI CITY</span>
        <img src="@/assets/ArrowRight.svg" alt="">
      </div>
    </a-col>
    <a-col span="24">
      <a-row class="project-overview">
        <a-col span="5" class="info block" @click="setKey('block')">
          <block-icon class="info-icon"/>
          <div class="info-title">Block</div>
          <div class="info-number">4</div>
        </a-col>
        <a-col span="5" class="info type" @click="setKey('type')">
          <loai-can-ho class="info-icon"/>
          <div class="info-title">Loại căn hộ</div>
          <div class="info-number">7</div>
        </a-col>
        <a-col span="5" class="info tienich" @click="setKey('tienich')">
          <tien-ich class="info-icon"/>
          <div class="info-title">Tiện ích</div>
          <div class="info-number">4</div>
        </a-col>
        <a-col span="5" class="info tangham" @click="setKey('tangham')">
          <tang-ham class="info-icon"/>
          <div class="info-title">Tầng hầm</div>
          <div class="info-number">9</div>
        </a-col>
      </a-row>
    </a-col>
    <div class="project-detail">
      <a-row class="detail-field">
        <a-col span="5">
          <div class="detail-title">Dự án</div>
          <div  class="detail-content">
            <img src="@/assets/Test2Image.svg" alt="">
          </div>
        </a-col>
        <a-col span="5">
          <div class="detail-title">Vị trí</div>
          <div class="detail-content">73 – 77 Võ Văn Kiệt, phường An Lạc, Quận Bình Tân, Thành phố Hồ Chí Minh</div>
        </a-col>
        <a-col span="5">
          <div class="detail-title">Chủ đầu tư</div>
          <div class="detail-content">Nam Long Group – Hankyu Hanshin Properties Corp – Nishi Nippon Railroad</div>
        </a-col>
        <a-col span="5">
          <div class="detail-title">Tổng diện tích</div>
          <div class="detail-content">8,5 hecta</div>
        </a-col>
      </a-row>
      <a-row class="more-info">
        <a-col span="18">
          <div class="detail-title">Mô tả</div>
          <div>
            Tọa lạc tại vị trí thuận tiện bậc nhất khu đô thị Akari City, 
            căn hộ giai đoạn 2 mở ra một không gian sống tiện nghi vượt trội cho chủ nhân tương lai. 
            Một phong cách sống Nhật Bản hiện đại đương đại giao hòa với sự tinh tế, 
            thư thái của cuộc sống riêng tư biệt lập.
          </div>
        </a-col>
        <a-col span="1" />
        <a-col span="5">
          <div class="detail-title">Liên hệ</div>
          <div>
            Điện thoại: (84.28) 54 16 17 18
            HOTLINE: 098 139 33 44
          </div>
        </a-col>
      </a-row>
    </div>
  </a-row>
</template>
<script>
import { ref } from 'vue';
import BlockIcon from '@/assets/Icon/ThongTinPage/BlockIcon.vue';
import LoaiCanHo from '@/assets/Icon/ThongTinPage/LoaiCanHo.vue';
import TangHam from '@/assets/Icon/ThongTinPage/TangHam.vue';
import TienIch from '@/assets/Icon/ThongTinPage/TienIch.vue';
export default {
  components: {BlockIcon, LoaiCanHo, TangHam, TienIch},
  setup() {
    const key = ref('')
    const setKey = (value) => {
      key.value = value
      console.log(key.value)
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
    .project-detail {
      text-align: left;
      margin: 32px 16px;
      padding: 32px 0;
      background: #FFF;
      border-radius: 8px;
      .detail-field {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        .detail-content {
          background: #F5F5F5;
          height: 75%;
          padding: 16px;
          border-radius: 8px;
        }
      }
      .more-info {
        padding: 16px;
      }
      .detail-title {
        padding-bottom: 8px;
        font-weight: bold;
      }
    }
  }
</style>