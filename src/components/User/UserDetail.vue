<template>
  <a-row type="flex" :gutter="30" class="account-details">
    <a-col span="2" offset="3">
      <left-outlined  class="back-btn" @click="handleBack()" />
    </a-col>
    <a-col :lg="{ span: 16, offset: 4 }" :xs="{ span: 22, offset: 1 }">
      <div class="left">
        <div class="avatar-container">
          <img src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" class="avatar">
        </div>
        <div class="info-main">
          <div class="user-fullname">
            <span>{{ user.fullName }}</span>
          </div>
          <div :class="user.status ? 'user-online' : 'user-offline'">
            <span class="dot" />
            {{ userStatus }}
          </div>
          <div class="user-role-id">
            ID: {{ user.id }}
          </div>
          <div class="user-role-id">
            Chức vụ: {{ user.role }}
          </div>
        </div>
      </div>
    </a-col>
    <a-col :lg="{ span: 16, offset: 4 }" :xs="{ span: 22, offset: 1 }">
      <div class="right">
        <div class="info-container">
          <div class="thong-tin-ca-nhan">
            <ThongTinTK />
            <span>Thông tin cá nhân</span>
          </div>
          <a-row class="user-info" :gutter="[0,16]">
            <a-col span="12">
              Ngày sinh
            </a-col>
            <a-col span="12">
              {{ user.birthday }}
            </a-col>
          </a-row>
          <a-row class="user-info" :gutter="[0,16]">
            <a-col span="12">
              Giới tính
            </a-col>
            <a-col span="12">
              {{ userGender }}
            </a-col>
          </a-row>
        </div>
        <div class="info-container">
          <div class="thong-tin-ca-nhan">
            <PhoneIcon />
            <span>Liên hệ</span>
          </div>
          <a-row class="user-info" :gutter="[0,16]">
            <a-col span="12">
              Email
            </a-col>
            <a-col span="12">
              {{ user.email }}
            </a-col>
          </a-row>
          <a-row class="user-info" :gutter="[0,16]">
            <a-col span="12">
              Số điện thoại
            </a-col>
            <a-col span="12">
              {{ userPhone }}
            </a-col>
          </a-row>
        </div>
        <!-- <div v-if="(user.Role.value === 'EXPERT' || user.Role.value === 'INVESTOR')" class="info-container">
          <div class="thong-tin-ca-nhan">
            <img src="~/assets/icons/QuyDauTu.svg" alt="quydautu">
            <span>Quỹ đầu tư</span>
          </div>
        </div> -->
      </div>
    </a-col>
    <!-- <ModalChange :open-modal.sync="openModal" :user="user" /> -->
  </a-row>
</template>
<script>
import { useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'
import ThongTinTK from '@/assets/Icon/QuanTriPageIcons/ThongTinTK.vue'
import PhoneIcon from '@/assets/Icon/QuanTriPageIcons/PhoneIcon.vue'
import { LeftOutlined } from '@ant-design/icons-vue'
export default {
  components: { ThongTinTK, PhoneIcon, LeftOutlined },
  setup() {
    const user = reactive({
      fullName: 'Giang Minh Nhat',
      id: 'NLMM12',
      email: 'nhatgm14@gmail.com',
      status: true,
      birthday: '01-04-2000',
      gender: 0,
      phone: '0971530525',
      role: 'Tong giam doc'
    })
    const router = useRouter()
    const handleBack = () => router.go(-1)
    // const showModal = () => (openModal = true)
    const userStatus = computed(() => user.status ? 'Đang hoạt động' : 'Không hoạt động')
    const userGender = computed(() => user.gender === '0' ? 'Nam' : user.gender === '1' ? 'Nữ' : 'Khác')
    const userPhone = computed(() => user.phone ? user.phone.slice(0, 4) + ' - ' + user.phone.slice(4, 7) + ' - ****' : 'Không có')
    return {
      user,
      userStatus,
      userGender,
      userPhone,
      handleBack
      // showModal
    }
  },
}
</script>
<style lang="scss">
.ant-row.account-details{
  .back-btn {
    padding: 10px;
    border: 1px solid #868181;
    border-radius: 50%;
    cursor: pointer;
  }
  .left {
    padding: 16px 16px 22px 16px;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 40px;
    height: 100%;

    .avatar-container {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: auto;
      background-color: lightgray;
      width: 30%;
      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info-main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .user-fullname {
      // padding-top: 16px;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      color: #EF4129;
      font-weight: 500;
    }
    .user-online {
      color: #00AC30;
      font-size: 12px;
      .dot{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #00AC30;
        display: inline-block;
        margin-right: 5px;
      }
    }
    .user-offline {
      color: #d0d0d0;
      font-size: 12px;
      .dot{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #d0d0d0;
        display: inline-block;
        margin-right: 5px;
      }
    }
    .user-role-id {
      font-size: 16px;
      padding-top: 16px;
    }
  }
  .right {
    padding: 32px;
    background-color: white;
    height: 100%;
    gap: 10px;

    .info-container {
      &:first-child {
        margin-bottom: 56px;
      }
      .thong-tin-ca-nhan {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 16px;
        font-size: 16px;
        color: #868181;
        font-weight: 500;
      }
      .user-info {
        font-size: 16px;
        text-align: left;
      }
    }
  }
}
</style>
