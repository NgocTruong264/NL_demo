<template>
  <a-form
    class="add-cudan"
    ref="formRef"
    :model="formState"
    :rules="rules"
    @finish="handleFinish"
  >
    <a-row class="page-header">
      <a-col span="1">
        <img src="@/assets/Icon/FunctionIcons/ArrowLeftIcon.svg" alt="" @click="router.go(-1)">
      </a-col>
      <a-col span="20">
        <span class="page-title">Tạo mới tài khoản cư dân</span>
      </a-col>
    </a-row>
    <a-row>
      <a-col span="24" class="detail-title">Thông tin cư dân</a-col>
      <a-col span="11">
        <a-row>
          <a-col>Họ và tên *</a-col>
          <a-col span="24">
            <a-form-item has-feedback name="name">
              <a-input class="input-field" v-model:value="formState.name"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Ngày sinh</a-col>
          <a-col span="24">
            <a-form-item>
              <a-date-picker class="input-field" v-model:value="formState.birthDay" :format="dateFormat"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="24">
        <a-row>
          <a-col span="24">Giới tính</a-col>
          <a-col span="11">
            <a-form-item>
              <a-radio-group v-model:value="formState.gender">
                <a-radio value="0">Nam</a-radio>
                <a-radio value="1">Nữ</a-radio>
                <a-radio value="2">Khác</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11">
        <a-row>
          <a-col>Số điện thoại *</a-col>
          <a-col span="24">
            <a-form-item has-feedback name="phoneNumb">
              <a-input class="input-field" v-model:value="formState.phoneNumb"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Email</a-col>
          <a-col span="24">
            <a-form-item name="email">
              <a-input class="input-field" v-model:value="formState.email"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11">
        <a-row>
          <a-col>Ảnh cư dân</a-col>
          <a-col span="24">
            <a-form-item has-feedback name="avatar">
              <a-upload
                v-model:file-list="formState.avatar"
                action="http://192.168.2.23:2001/file/upload"
                accept="image/*"
                @change="handleChangeAvatar"
                :show-upload-list="false"
              >
                <a-button class="upload-btn">
                  <img src="@/assets/Icon/FunctionIcons/AddWhiteIcon.svg">
                  Thêm ảnh
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col> 
    </a-row>
    <a-row>
      <a-col span="24" class="detail-title">Thông tin căn hộ</a-col>
      <a-col span="11">
        <a-row>
          <a-col>Dự án</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input class="input-field" v-model:value="formState.project"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Block</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input class="input-field" v-model:value="formState.block"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="23">
        <a-row>
          <a-col>Mã căn hộ</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input class="input-field" v-model:value="formState.idApartment"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row>
      <a-col span="24" class="detail-title">Tài khoản</a-col>
      <a-col span="11">
        <a-row>
          <a-col>Tên đăng nhập</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input placeholder="Số điện thoại..." class="input-field" v-model:value="formState.account"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Mật khẩu</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input-password v-model:value="formState.password" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row>
      <a-col class="detail-title" span="24">Hồ sơ cư dân</a-col>
      <a-col span="11">
        <a-row>
          <a-col span="24">Loại giấy tờ tùy thân</a-col>
          <a-col span="11">
            <a-form-item>
              <a-radio-group v-model:value="formState.typeIdCard">
                <a-radio value="1">CMND / CCCD</a-radio>
                <a-radio value="2">Passport</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Số giấy tờ tùy thân</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input class="input-field" v-model:value="formState.idNumber"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11">
        <a-row>
          <a-col>Ngày cấp</a-col>
          <a-col span="24">
            <a-form-item>
              <a-date-picker class="input-field" v-model:value="formState.dateIssue" :format="dateFormat"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="11" offset="1">
        <a-row>
          <a-col>Nơi cấp</a-col>
          <a-col span="24">
            <a-form-item>
              <a-input class="input-field" v-model:value="formState.placeIssue"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="24">
        <a-row>
          <a-col span="24">Ảnh chụp hai mặt</a-col>
          <a-col span="11">
            <a-form-item has-feedback name="front">
              <a-upload
                v-model:file-list="formState.front"
                action="http://192.168.2.23:1001/file/upload"
                accept="image/*"
                @change="handleChangeFront"
                :show-upload-list="false"
              >
                <a-button class="upload-btn">
                  <img src="@/assets/Icon/FunctionIcons/AddWhiteIcon.svg">
                  Mặt trước
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
          <a-col span="11" offset="1">
            <a-form-item has-feedback name="back">
              <a-upload
                v-model:file-list="formState.back"
                action="http://192.168.2.23:1001/file/upload"
                accept="image/*"
                @change="handleChangeBack"
                :show-upload-list="false"
              >
                <a-button class="upload-btn">
                  <img src="@/assets/Icon/FunctionIcons/AddWhiteIcon.svg">
                  Mặt sau
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row>
      <a-col class="detail-title" span="24">Hợp đồng</a-col>
      <a-col span="11">
        <a-row>
          <a-col span="24">Loại hợp đồng</a-col>
          <a-col span="11">
            <a-form-item>
              <a-radio-group v-model:value="formState.typeContract">
                <a-radio value="1">Mua bán</a-radio>
                <a-radio value="2">Cho thuê</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col span="24">
        <a-row>
          <a-col>Ảnh chụp hợp đồng</a-col>
          <a-col span="24">
            <a-form-item has-feedback name="contract">
              <a-upload
                v-model:file-list="formState.contract"
                action="http://192.168.2.23:1001/file/upload"
                accept="image/*"
                @change="handleChangeContract"
              >
                <a-button class="upload-btn">
                  <img src="@/assets/Icon/FunctionIcons/AddWhiteIcon.svg">
                  Thêm ảnh
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-col> 
    </a-row>
    <a-form-item>
      <div class="button-field">
        <a-button type="primary" html-type="submit" class="submit-btn">
          <img src="@/assets/Icon/FunctionIcons/AddUserIcon.svg" alt="">
          Submit
        </a-button>
        <a-button class="cancel-btn" @click="resetFields">X Cancel</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>
<script>
// import { LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useForm } from 'ant-design-vue/lib/form';
import { ref, reactive } from 'vue'; 
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const formRef = ref()
        const formState = reactive({
            name: null,
            birthDay: null,
            gender: null,
            idNumber: null,
            phoneNumb: null,
            email: null,
            project: null,
            block: null,
            idApartment: null,
            account: null,
            password: null,
            typeIdCard: null,
            dateIssue: null,
            placeIssue: null,
            avatar: null,
            front: null,
            back: null,
            contract: null,
            typeContract: null
        })
        const rules = {
            name: [{ required: true, trigger: "change", message: "Tên không được bỏ trống!" }],
            idCard: [
                { required: true, trigger: "change", message: "Vui lòng nhập CCCD/ CMND!" },
                { pattern: "^[0-9]+$", message: "CCCD/ CMND không hợp lệ!" }
            ],
            phoneNumb: [
                { required: true, trigger: "change", message: "Vui lòng nhập số điện thoại!" },
                { pattern: "^[0-9]+$", message: "Số điện thoại không hợp lệ!" }
            ],
            email: [{ type: 'email', message: 'Email không hợp lệ!'}]
        }
        const handleFinish = () => {
            console.log(formState)
        }
        const { resetFields } = useForm(formRef, formState)
        const dateFormat = 'DD/MM/YYYY'
        const handleChangeAvatar = info => {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
            info.file = formState.avatar
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
          }
        }
        const handleChangeFront = info => {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
            info.file = formState.front
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
          }
        }
        const handleChangeBack = info => {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
            info.file = formState.back
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
          }
        }
        const handleChangeContract = info => {
          if (info.file.status !== 'uploading') {
            console.log(info.fileList)
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
            info.fileList = formState.contract
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
          }
        }
        return {
            formRef,
            formState,
            rules,
            handleFinish,
            resetFields,
            router,
            dateFormat,
            handleChangeAvatar,
            handleChangeFront,
            handleChangeBack,
            handleChangeContract
        };
    },
    // components: { LockOutlined }
}
</script>
<style lang="scss">
  .add-cudan {
    height: 100%;
    text-align: left;
    padding: 0 5%;
    background: #FAFAFA;
    .page-header {
      display: flex;
      align-items: center;
      padding: 20px 0;
      .page-title {
        font-size: 32px;
        color: #910D10;
        font-weight: bold;
      }
    }
    .detail-title {
      font-size: 20px;
      color: #434343;
      padding-bottom: 16px;
      font-weight: bold;
    }
    .ant-input, .ant-input-password {
      border-radius: 8px;
    }
    .ant-input:focus, .ant-input:hover,
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused,
    .ant-picker:hover,
    .ant-picker-focused {
      border-color: #910D10;
      box-shadow: 0 0 0 2px #eabfc0;
    }
    .ant-radio-input:focus + .ant-radio-inner {
      box-shadow: 0 0 0 2px #eabfc0;
    }
    .ant-picker {
      width: 100%;
      border-radius: 8px;
    }
    .ant-radio-checked .ant-radio-inner {
      border-color: #910D10
    }
    .ant-radio-inner::after {
      background-color: #910D10;
    }
    .ant-radio:hover .ant-radio-inner {
      border-color: #910D10;
    }
    .ant-radio-wrapper {
      padding-right: 5px;
    }
    .ant-upload.ant-upload-select {
      width: 100%;
    }
    .ant-btn.upload-btn {
      width: 100%;
      background: #d0d0d0;
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    .ant-btn:hover, .ant-btn:focus {
      color:#910D10;
      font-weight: bold;
      border-color: #910D10
    }
    .button-field {
      display: flex;
      flex-direction: row-reverse;
      gap: 20px;
      .submit-btn {
        background: #910D10;
        border: none;
        &:hover, &:focus {
          color: white;
          border-color: none;
          font-weight: normal;
        }
      }
      .cancel-btn {
        &:hover, &:focus {
          border-color: none;
          font-weight: normal;
        }
      }
    }
    .ant-form-item {
      margin-bottom: 10px;
    }
  }
</style>