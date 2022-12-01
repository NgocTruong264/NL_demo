<template>
  <a-row>
    <a-col :xs="{ span: 22, offset: 1 }" :md="{ span: 12, offset: 6 }" :lg="{ span: 8, offset: 8 }">
      <a-form @finish="onFinish" @finishFailed="onFinishFailed" :model="formModel" name="login">
        <a-form-item name="userName" :rules="rules.userName">
          <a-input class="form-item-container" placeholder="Tên đăng nhập" v-model:value="formModel.userName"></a-input>
        </a-form-item>
        <a-form-item name="password" :rules="rules.password">
          <a-input-password class="form-item-container" placeholder="Mật khẩu" v-model:value="formModel.password"></a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="!disableCheck" class="form-button" html-type="submit" type="primary">Đăng nhập</a-button>
        </a-form-item>
      </a-form>
      <router-link to="/">Quên mật khẩu</router-link>
    </a-col>
  </a-row>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const rules = reactive({
  userName: [{ required: true, message: 'Tên đăng nhập không được để trống!' }],
  password: [{ required: true, message: 'Mật khẩu không được để trống!' }]
})

const formModel = reactive({
  userName: '',
  password: '',
  remember: true
})
const store = useStore()
const onFinish = values => {
  console.log('Success', values)
  const userData = {
    name: 'Nhat',
    phone: '0123123123',
    gender: 1,
    email: 'nhat@gm.com'
  }
  store.dispatch('user/setUser', userData)
}
const onFinishFailed = error => {
  console.log('Failed' ,error)
}
const disableCheck = computed(() => Boolean(formModel.userName && formModel.password))

</script>
<style lang="scss">
.form-item-container.ant-input {
  border-radius: 8px;
}
.form-item-container.ant-input-password {
  border-radius: 8px;
}
.form-button.ant-btn {
  width: 100%;
  border-radius: 8px;
  background-color: #910D10;
  color: #FAFAFA;
  border-color: transparent;
  &:hover {
    background-color: #910D10;
  }
  &:focus {
    background-color: #910D10;
  }
}
</style>