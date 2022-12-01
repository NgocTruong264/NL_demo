<template>
  <div class="thongtin-page">
    <img src="../../assets/TestImage.svg" alt="">
    <div class="project-title">
      <span class="project-name">AKARI CITY</span>
      <img src="../../assets/ArrowRight.svg" alt="">
    </div>
    <div class="project-info">
      <span>Block</span>
      <span>Loại căn hộ</span>
      <span>Tiện ích</span>
      <span>Tầng hầm</span>
    </div>
  </div>
</template>
<style lang="scss">
  .thongtin-page {
    .project-title {
      display: flex;
      justify-content: space-between;
      padding: 16px 40px;
      .project-name {
        font-size: 32px;
        font-weight: bold;
      }
      .project-info {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>