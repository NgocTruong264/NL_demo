<template>
  <a-form :model="createForm" layout="vertical" @finish="onFinish">
    <a-row type="flex" :gutter="24">
      <a-col span="7" offset="4">
        <div class="left">
          <div class="avatar-container">
            <img v-if="!imgUrl" class="avatar" src="~/assets/icons/AvatarDefault.png" alt="avatar">
            <img v-else class="avatar" :src="imgUrl" alt="avatar">
            <a-upload
              name="file"
              accept="image/*"
              :show-upload-list="false"
              @change="handleChange"
            >
              <img class="upload-img" src="~/assets/icons/UploadAvatar.svg" alt="upload">
            </a-upload>
          </div>
          <div>
            <a-form-item label="Email">
              <a-input v-decorator="decoratorsData.email" />
            </a-form-item>
            <a-form-item label="Mật khẩu">
              <a-input v-decorator="decoratorsData.password" type="password" />
            </a-form-item>
            <a-form-item label="Nhập lại mật khẩu" has-feedback>
              <a-input v-decorator="decoratorsData.confirmPassword" type="password" />
            </a-form-item>
            <a-form-item label="Trạng thái">
              <div class="status-container">
                <a-switch v-decorator="decoratorsData.status" class="custom-switch" />
                <span :class="statusText().value ? 'checked' : ''">{{ statusText().text }}</span>
              </div>
            </a-form-item>
          </div>
        </div>
      </a-col>
      <a-col span="9">
        <div class="right">
          <div class="thong-tin-ca-nhan">
            <img src="~/assets/icons/Account.svg" alt="taikhoan">
            <span>Thông tin cá nhân</span>
          </div>
          <a-form-item label="Họ và tên">
            <a-input v-decorator="decoratorsData.fullName" type="text" />
          </a-form-item>
          <a-form-item label="Ngày tháng năm sinh">
            <a-date-picker v-decorator="decoratorsData.birthday" style="width: 100%;" format="DD-MM-YYYY" :default-picker-value="moment('01-01-1970', 'DD-MM-YYYY')" />
          </a-form-item>
          <a-form-item label="Giới tính">
            <a-radio-group v-decorator="decoratorsData.gender">
              <a-radio value="0">
                Nam
              </a-radio>
              <a-radio value="1">
                Nữ
              </a-radio>
              <a-radio value="2">
                Khác
              </a-radio>
            </a-radio-group>
          </a-form-item>
          <div class="thong-tin-ca-nhan">
            <img src="~/assets/icons/PhanQuyen.svg" alt="chucvu">
            <span>Phân quyền</span>
          </div>
          <a-form-item label="Chức vụ">
            <a-select v-decorator="decoratorsData.roleId">
              <a-select-option value="4">
                Chủ đầu tư
              </a-select-option>
              <a-select-option value="2">
                Giám đốc đầu tư
              </a-select-option>
              <a-select-option value="5">
                Chuyên viên
              </a-select-option>
              <a-select-option value="3">
                Kế toán
              </a-select-option>
            </a-select>
          </a-form-item>
          <div class="thong-tin-ca-nhan">
            <img src="~/assets/icons/Phone.svg" alt="sdt">
            <span>Liên hệ</span>
          </div>
          <a-form-item label="Số điện thoại">
            <a-input v-decorator="decoratorsData.phone" type="tel" />
          </a-form-item>
        </div>
      </a-col>
    </a-row>
    <a-col span="16" offset="4">
      <a-row type="flex" justify="end">
        <a-col span="10">
          <div class="form-button-container">
            <ButtonCustom @click="cancelHandle">
              Huỷ
            </ButtonCustom>
            <ButtonCustom html-type="submit" :disabled="loadingState">
              Lưu
            </ButtonCustom>
          </div>
        </a-col>
      </a-row>
    </a-col>
    <!-- <a-col span="24">
      <ModalSuccess :open-modal.sync="openModal" :src="require('~/assets/icons/Success.svg')" @closeSubmitModal="closeSubmitModal">
        <template #content>
          <p>Tài khoản mới đã được tạo thành công!</p>
        </template>
      </ModalSuccess>
    </a-col> -->
  </a-form>
</template>
<script>
import moment from 'moment'
// import ModalSuccess from '~/components/Modal/ModalSuccess.vue'
// import ButtonCustom from '~/components/Button/ButtonCustom.vue'
import { reactive, ref } from 'vue'
const decorators = {
  email:   [{ type: 'email', message: 'Email không hợp lệ' },
   { required: true, message: 'Email là bắt buộc' }
    ],
  password: [{ required: true, message: 'Mật khẩu là bắt buộc' }, { min: 8, message: 'Mật khẩu phải tối thiểu 8 kí tự!' }
    ],
  confirmPassword: [{ required: true, message: 'Xác nhận mật khẩu là bắt buộc' }, { validator: null }
    ],
  fullName: [{ required: true, message: 'Hãy điền họ và tên!' },
      { pattern: '^[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđzA-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐZ ]*$', message: 'Tên không bao gồm số và kí tự đặc biệt' }
    ],
  birthday: [{ type: 'object' }
    ],
  roleId: [{ required: true, message: 'Hãy chọn chức vụ!' }
    ],
  phone: [{ pattern: '^0[0-9]{9,10}$', message: 'Số điện thoại không hợp lệ' }
    ],
}
const previewAvatar = (img, callback) => {
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => callback(fileReader.result))
  fileReader.readAsDataURL(img)
}
export default {
  components: { ModalSuccess, ButtonCustom },
  setup() {
    const avatarName = ref('')
    const imgUrl = ref('')
    const createForm = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      status: true,
      fullName: '',
      birthday: '',
      gender: '',
    })
    const compareToPassword = (rule, value, callback) => {
      if (value && value !== createForm.password) {
        callback(new Error('Mật khẩu và xác nhận mật khẩu không trùng khớp!'))
      } else {
        callback()
      }
    }
    const onFinish = (values) => {
      const allValues = {
        ...values,
        birthday: values.birthday && values.birthday.format('YYYY-MM-DD'),
        avatar: 'avatar static name'
      }
      console.log(allValues);
    }
    const handleChange = (info) => {
      if (info.file.status === 'uploading') {
        return
      }
      if (info.file.status === 'done') {
        avatarName.value = 'kekekeke'
        previewAvatar(info.file.originFileObj, (url) => {
          imgUrl.value = url
        })
      } else if (info.file.status === 'error') {
        alert('Da co loi xay ra')
      }
    }
    const rules = reactive({
      ...decorators,
      confirmPassword: [{ required: true, message: 'Xác nhận mật khẩu là bắt buộc' }, { validator: compareToPassword }],
    })
    return {
      createForm,
      rules,
      imgUrl,
      avatarName,
      onFinish,
      moment,
      handleChange
      // openModal: false
    }
  },
  // computed: {
  //   decoratorsData() {
  //     return {
  //       ...decorators,
  //       confirmPassword: ['confirmPassword', {
  //         rules: [{ required: true, message: 'Xác nhận mật khẩu là bắt buộc' }, { validator: this.compareToPassword }]
  //       }],
  //       status: ['status', { valuePropName: 'checked', initialValue: this.initSwitchValue }]
  //     }
  //   }
  // },
  methods: {
    moment,
    compareToPassword(rule, value, callback) {
      const { getFieldValue } = this.form
      if (value && value !== getFieldValue('password')) {
        callback(new Error('Mật khẩu và xác nhận mật khẩu không trùng khớp!'))
      } else {
        callback()
      }
    },
    submitHandle() {
      this.form.validateFields(async (error, fieldsValue) => {
        if (!error) {
          const values = {
            ...fieldsValue,
            birthday: fieldsValue.birthday && fieldsValue.birthday.format('YYYY-MM-DD'),
            avatar: this.avatarName
          }
          try {
            await this.$axios.post('/api/user/register', values)
            this.openModal = true
          } catch (e) {
            if (e.response.data.message === 'Email must be unique') {
              alert('Email đã được sử dụng!')
            } else {
              alert('Đã có lỗi xảy ra vui lòng thử lại!')
            }
          }
        }
      })
    },
    closeSubmitModal() {
      this.$router.go(-1)
    },
    cancelHandle() {
      this.form.resetFields()
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.toggleLoadingWithParam(true)
        return
      }
      if (info.file.status === 'done') {
        this.avatarName = info.file.response.data.file_name
        previewAvatar(info.file.originFileObj, (imgUrl) => {
          this.imgUrl = imgUrl
          this.toggleLoadingWithParam(false)
        })
      } else if (info.file.status === 'error') {
        this.toggleLoadingWithParam(false)
      }
    },
    statusText() {
      const { getFieldValue } = this.form
      let temp = getFieldValue('status')
      if (temp === undefined) {
        temp = true
      }
      return {
        text: temp ? 'Hoạt động' : 'Không hoạt động',
        value: temp
      }
    }
  }
  // components: { CustomModal }
}
</script>
<style lang="scss" scoped>
  .left {
    padding: 16px 16px 22px 16px;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;

    .avatar-container {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: auto;
      background-color: lightgray;

      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .upload-img {
        position: absolute;
        top: 19px;
        right: 18px;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .status-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      .custom-switch.ant-switch-checked {
        background-color: #f6f5f5;
        &::after {
          background-color: #00AC30;
        }
      }
      .custom-switch.ant-switch {
        background-color: #f6f5f5;
      }
      span {
        color: #EF4129;
        &.checked {
          color: #00AC30;
        }
      }
    }
  }
  .right {
    padding: 32px;
    background-color: white;
    border-radius: 6px;
    height: 100%;

    .thong-tin-ca-nhan {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 16px;
      font-size: 16px;
    }
  }
  .form-button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    button {
      width: 45%;
      &:nth-child(1) {
        background-color: #d0d0d0;
      }
      &:nth-child(2) {
        background-color: #EF4129;
      }
      &:hover {
        cursor: pointer;
        color: white;
      }
      &:disabled {
        background-color: lightgray;
        color: gray;
      }
    }
  }
  .ant-form {
    label {
      color: #262626;
    }
  }
  .ant-form-item {
    margin-bottom: 16px;
  }
</style>
