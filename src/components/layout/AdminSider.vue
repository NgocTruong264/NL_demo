<template>
  <a-layout class="admin-sider">
    <a-layout-sider class="layout-sider" width="250" :collapsed="collapsed" collapsible :trigger="null" @collapse="checkCollapse">
      <img v-if="collapsed" class="mini-logo" src="@/assets/NLMiniLogo.svg"/>
      <img v-else class="logo" src="@/assets/NLLogo.svg"/>
      <a-row class="info-user">
        <a-col span="6"><img src="@/assets/avatar.svg" class="avatar-user" alt=""></a-col>
        <a-col span="1"/>
        <a-col span="15" v-show="collapsed == false">
          Hi, Ngoc!
        </a-col>
        <a-col span="2" align="center">
         <img src="@/assets/Icon/FunctionIcons/ArrowRight.svg" alt="" @click="toggleCollapsed">
        </a-col>
      </a-row>
      <a-menu v-model:selectedKeys="selectedKeys" :open-keys="openKeys" mode="inline" @select="moveToPage" @open-change="onOpenChange">
        <a-menu-item disabled style="font-weight: bold;" class="menu-field">TÒA NHÀ</a-menu-item>
        <a-menu-item key="thong-tin">
          <thong-tin />
          <span class="nav-text">Thông tin</span>
        </a-menu-item>
        <a-menu-item key="can-ho">
          <can-ho />
          <span class="nav-text">Căn hộ</span>
        </a-menu-item>
        <a-menu-item key="ho-so">
          <ho-so />
          <span class="nav-text">Hồ sơ</span>
        </a-menu-item>
        <a-menu-item key="cu-dan">
          <cu-dan />
          <span class="nav-text">Cư dân</span>
        </a-menu-item>
        <a-menu-item key="tai-khoan">
          <tai-khoan />
          <span class="nav-text">Tài khoản</span>
        </a-menu-item>
        <a-menu-item disabled style="font-weight: bold;" class="menu-field">KHÁC</a-menu-item>
        <a-sub-menu key="quan-ly-phi">
          <template #title>
            <quan-ly-phi />
            <span>Quản lý phí</span>
          </template>
          <a-menu-item key="hoa-don">
            <hoa-don />
            <span>Hóa đơn</span>
          </a-menu-item>
          <a-menu-item key="bien-nhan">
            <bien-nhan />
            <span>Biên nhận</span>
          </a-menu-item>
          <a-menu-item key="vi-can-ho">
            <vi-can-ho />
            <span>Ví căn hộ</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="tien-ich">
          <template #title>
            <tien-ich />
            <span>Tiện ích</span>
          </template>
          <a-menu-item key="tien-ich1">
            <tien-ich />
            <span>Tiện ích 1</span>
          </a-menu-item>
          <a-menu-item key="tien-ich2">
            <tien-ich />
            <span>Tiện ích 2</span>
          </a-menu-item>
          <a-menu-item key="tien-ich3">
            <tien-ich />
            <span>Tiện ích 3</span>
          </a-menu-item>
          <!-- <a-menu-item key="4">option4</a-menu-item> -->
        </a-sub-menu>
        <a-sub-menu key="bao-tri">
          <template #title>
              <bao-tri />
              <span>Bảo trì</span>
          </template>
          <a-menu-item key="bao-tri1">
            <bao-tri />
            <span>Bảo trì 1</span>
          </a-menu-item>
          <a-menu-item key="bao-tri2">
            <bao-tri />
            <span>Bảo trì 2</span>
          </a-menu-item>
          <a-menu-item key="bao-tri3">
            <bao-tri />
            <span>Bảo trì 3</span>
          </a-menu-item>
          <a-menu-item key="bao-tri4">
            <bao-tri />
            <span>Bảo trì 4</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="bai-xe">
          <template #title>
              <bai-xe />
              <span>Bãi xe</span>
          </template>
          <a-menu-item key="bai-xe1">
            <bai-xe />
            <span>Bãi xe 1</span>
          </a-menu-item>
          <a-menu-item key="bai-xe2">
            <bai-xe />
            <span>Bãi xe 2</span>
          </a-menu-item>
          <a-menu-item key="bai-xe3">
            <bai-xe />
            <span>Bãi xe 3</span>
          </a-menu-item>
          <a-menu-item key="bai-xe4">
            <bai-xe />
            <span>Bãi xe 4</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="yeu-cau">
          <yeu-cau />
          <span class="nav-text">Yêu cầu</span>
        </a-menu-item>
        <a-menu-item key="thong-bao">
          <thong-bao />
          <span class="nav-text">Thông báo</span>
        </a-menu-item>
        <a-sub-menu key="dien-dan">
          <template #title>
              <dien-dan />
              <span>Diễn đàn</span>
          </template>
          <a-menu-item key="dien-dan1">
            <dien-dan />
            <span>Diễn đàn 1</span>
          </a-menu-item>
          <a-menu-item key="dien-dan2">
            <dien-dan />
            <span>Diễn đàn 2</span>
          </a-menu-item>
          <a-menu-item key="dien-dan3">
            <dien-dan />
            <span>Diễn đàn 3</span>
          </a-menu-item>
          <a-menu-item key="dien-dan4">
            <dien-dan />
            <span>Diễn đàn 4</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="quan-tri">
          <quan-tri /> 
          <span class="nav-text">Quản trị</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import ThongTin from '@/assets/Icon/MenuIcons/ToaNha/ThongTin.vue';
import TaiKhoan from '@/assets/Icon/MenuIcons/ToaNha/TaiKhoan.vue';
import HoSo from '@/assets/Icon/MenuIcons/ToaNha/HoSo.vue';
import CuDan from '@/assets/Icon/MenuIcons/ToaNha/CuDan.vue';
import CanHo from '@/assets/Icon/MenuIcons/ToaNha/CanHo.vue';
import BaiXe from '@/assets/Icon/MenuIcons/Khac/BaiXe.vue';
import BaoTri from '@/assets/Icon/MenuIcons/Khac/BaoTri.vue';
import DienDan from '@/assets/Icon/MenuIcons/Khac/DienDan.vue';
import QuanLyPhi from '@/assets/Icon/MenuIcons/Khac/QuanLyPhi.vue';
import QuanTri from '@/assets/Icon/MenuIcons/Khac/QuanTri.vue';
import ThongBao from '@/assets/Icon/MenuIcons/Khac/ThongBao.vue';
import TienIch from '@/assets/Icon/MenuIcons/Khac/TienIch.vue';
import YeuCau from '@/assets/Icon/MenuIcons/Khac/YeuCau.vue';
import HoaDon from '@/assets/Icon/MenuIcons/Khac/QuanLyPhi/HoaDon.vue';
import BienNhan from '@/assets/Icon/MenuIcons/Khac/QuanLyPhi/BienNhan.vue';
import ViCanHo from '@/assets/Icon/MenuIcons/Khac/QuanLyPhi/ViCanHo.vue';
export default defineComponent({
    setup() {
      const router = useRouter()
      const state = reactive({
          rootSubmenuKeys: ["quan-ly-phi", "tien-ich", "bao-tri", "bai-xe", "dien-dan"],
          openKeys: [],
          selectedKeys: [""],
      });
      const collapsed = ref(false);
      const toggleCollapsed = () => {
          collapsed.value = !collapsed.value;
      };
      const checkCollapse = (type, collapsed) => {
          console.log("Type: ", type);
          console.log("Collapsed: ", collapsed);
      };
      const itemKey = ref("");
      const moveToPage = ({key}) => {
          router.push(`/${key}`)
      };
      const onOpenChange = openKeys => {
          const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
          if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
              state.openKeys = openKeys;
          }
          else {
              state.openKeys = latestOpenKey ? [latestOpenKey] : [];
          }
      };
      return {
          itemKey,
          moveToPage,
          collapsed,
          toggleCollapsed,
          checkCollapse,
          ...toRefs(state),
          onOpenChange
      };
    },
    components: 
    { ThongTin,
      TaiKhoan,
      HoSo,
      CanHo,
      CuDan,
      BaiXe,
      BaoTri,
      DienDan,
      QuanLyPhi,
      QuanTri,
      ThongBao,
      TienIch,
      YeuCau,
      BienNhan,
      HoaDon,
      ViCanHo
    }
});
</script>
<style lang="scss">
.ant-layout.admin-sider {
  svg {
    color: #ababab
  }
  background: #fff;
  flex: none;
  // width: 100%;
  .admin-sider {
    overflow: 'auto';
    height: '100vh';
    left: 0;
    top: 0;
    bottom: 0
  }
  .logo-item {
    padding-right: 8px;
  }
  .logo {
    width: 200px;
  }
  .mini-logo {
    height: auto;
    width: 40px;
    padding: 10px 0;
  }
  .info-user {
    background: #fafafa;
    margin: 0 10px;
    padding: 10px 8px;
    border-radius: 8px;
    .avater-user {
      height: 56px;
      width: 56px;
      border-radius: 50%;
    }
  }
  .ant-menu-vertical {
    border: none;
  }
  // background color for admin sider.
  .ant-layout-sider {
    background: #fff;
  }

  // CSS for menu item

  // Change color of select item in menu
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #f5f5f5;
    border-radius: 8px;
    color: #434343;
    font-weight: bold;
  }
  .ant-menu-item.ant-menu-item-selected {
    svg {
      color: #910d10
    }
  }
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin: 0 10px;
  }
  .ant-menu-inline .ant-menu-item {
    margin: 0 10px;
    padding-right: 0;
    padding-left: 32px;
    width: calc(100% - 10px);
  }
  // Remove border-right of menu sider
  .ant-menu-inline {
    border-right: none;
    width: calc(100% - 10px);
    // :first-child {
    //   padding-top: 15px;
    // }
  }
  // Remove border-color of selected menu item
  .ant-menu-inline .ant-menu-item::after {
    border-right: none;
  }
  .ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child {
    background: none;
  }
  .ant-menu-item.ant-menu-item-active {
    background: none;
    color: #434343;
    
  }
  .ant-menu-light.ant-menu-item:hover {
    color: #434343
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #434343;
    svg {
      color: #910d10
    }
  }

  // CSS for sub menu

  .ant-menu-inline .ant-menu-submenu-title {
    margin: 0 10px;
    width: calc(100% - 10px);
  }
  // CSS for item in sub menu
  .ant-menu-item.ant-menu-item-active.ant-menu-item-only-child {
    background: none;
    color: #434343
  }
  // Remove background color of sub menu title when selected
  .ant-menu-submenu-title:active {
    background: none;
  }
  .ant-menu-submenu-title:hover {
    color: #434343
  }
  li.ant-menu-submenu-active {
    background: none;
    color: #434343;
  }
  // custom size of sub menu form 
  .ant-menu-sub.ant-menu-inline {
    // Turn off background color of submenu item
    background: none;
    border-radius: 8px;
    margin: 0 10px;
    overflow: hidden;
  }
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: currentColor
  }
  // custom text color of sub menu
  .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open {
    background: #f5f5f5;
    border-radius: 8px;
    width: calc(100% - 10px);
    box-sizing: border-box;
    margin-left: 10px;
    .ant-menu-submenu-title {
      margin: 0;
      width: 100%;
      font-weight: bold;
      svg {
        color: #910d10
      }
    }
    .ant-menu-sub.ant-menu-inline {
      margin: 0;
    }

  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    padding-left: 32px !important;
    background: none;
  }
  .ant-menu-item .anticon + span {
    margin-left: 8px;
  }
  .ant-menu-title-content.menu-field {
    font-weight: bold;
  }
  
  // Collapsed menu
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item.menu-field {
    padding: 0;
    text-align: center;
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child) {
    margin: 0;
  }
  .ant-menu-sub.ant-menu-vertical > .ant-menu-item.ant-menu-item-selected {
    background: #f5f5f5;
    color: #434343;
  }
  .ant-layout-sider-collapsed.layout-sider {
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-active {
      background: #f5f5f5;
      color: #434343;
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background: #f5f5f5;
      color: #434343;
    }
  }
}
// .ant-menu-item.ant-menu-item-disabled.menu-group {
//   font-size: 14px
// }
</style>