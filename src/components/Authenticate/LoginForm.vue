<template>
  <a-row type="flex" align="middle">
    <a-col span="10" class="login-img-container">
      <img src="@/assets/image/LoginImg.png" alt="img" />
    </a-col>
    <a-col :xs="{ span: 12, offset: 1 }" :md="{ span: 12, offset: 1 }" :lg="{ span: 8, offset: 3 }">
      <div class="login-logo-container">
        <NamLongLogo />
      </div>
      <div class="login-label-text">
        <span>Đăng nhập</span>
      </div>
      <a-form @finish="onFinish" @finishFailed="onFinishFailed" :model="formModel" name="login">
        <a-form-item name="userName" :rules="rules.userName">
          <a-input class="form-item-container" placeholder="Số điện thoại" v-model:value="formModel.userName"></a-input>
        </a-form-item>
        <a-form-item name="password" :rules="rules.password">
          <a-input-password class="form-item-container" placeholder="Mật khẩu" v-model:value="formModel.password"></a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="!disableCheck" class="form-button" html-type="submit" type="primary">Đăng nhập</a-button>
        </a-form-item>
      </a-form>
      <!-- <router-link to="/">Quên mật khẩu</router-link> -->
    </a-col>
  </a-row>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { reactive, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import NamLongLogo from '@/assets/Icon/LoginIcons/NamLongLogo.vue';

defineComponent({ NamLongLogo })


const rules = reactive({
  userName: [{ required: true, message: 'Số điện thoại không được để trống!' }],
  password: [{ required: true, message: 'Mật khẩu không được để trống!' }]
})

const formModel = reactive({
  userName: '',
  password: ''
})
const store = useStore()
const router = useRouter()
const onFinish = async values => {
  // const userData = {
  //   name: 'Nhat',
  //   phone: '0123123123',
  //   gender: 1,
  //   email: 'nhat@gm.com'
  // }
  await store.dispatch('auth/login', { phone: values.userName, password: values.password })
  router.replace('/')
  // const token = 'ashdjbhibhfqbhubchabsgvcgvcqiyvcx'
}
const onFinishFailed = error => {
  console.log('Failed' ,error)
}
const disableCheck = computed(() => Boolean(formModel.userName && formModel.password))

</script>

<style lang="scss">
.login-label-text {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #910D10;
}
.login-img-container {
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
}
.form-item-container.ant-input {
  font-size: 16px;
  border-radius: 8px;
}
.form-item-container.ant-input-password {
  font-size: 16px;
  border-radius: 8px;
}
.form-button.ant-btn {
  width: 100%;
  border-radius: 8px;
  background-color: #910D10;
  color: #FAFAFA;
  border-color: transparent;
  padding: 11px 0px;
  height: auto;
  font-size: 16px;
  &:hover {
    background-color: #910D10;
    color: #FAFAFA;
  }
  &:focus {
    background-color: #910D10;
  }
  &:disabled {
    background-color: #D4D4D4;
  }
}
.login-logo-container {
  margin-bottom: 50px;
}
</style>