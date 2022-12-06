<template>
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
</template>
<script>
</script>
<style lang="scss">
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
</style>