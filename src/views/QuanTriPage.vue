<template>
  <a-row class="quantri-page-container">
    <a-col :span="22" :offset="1">
      <a-row>
        <a-col :span="14" class="header-title-container">
          <p class="header-title">
            Tài khoản ban QLTN
          </p>
        </a-col>
        <a-col :span="10" class="search-field">
          <input
            v-model="keyword"
            placeholder="Họ tên hoặc ID..."
            class="input-field"
            @input="handleSearch(keyword)"
          >
          <search-outlined class="search-icon"/>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="body-container" :span="24">
          <a-table
            :columns="columns"
            :data-source="dataSource"
            class="table-listtk"
            :row-key="(record) => record.id"
          >
            <template #headerCell="{ column }">
              <span style="font-weight: bold; text-align: center;">{{ column.title }}</span>
              <template v-if="column.key === 'action'">
                <AddIcon />
              </template>
            </template>
            <template #bodyCell="{column, record}">
              <template v-if="column.key === 'name'">
                <span>
                  <img :src="record.avatar" class="avatar-user">
                  <span class="user-fullName">{{ record.name }}</span>
                </span>
              </template>
              <template v-else-if="column.key === 'phone'">
                <span class="user-phone">{{ record.phone }}</span>
              </template>
              <template v-else-if="column.key === 'status'">
                <span :class="record.status ? 'user-online' : 'user-offline'">{{ record.status ? 'Đang hoạt động' : 'Không hoạt động' }}</span>
              </template>
              <template v-else-if="column.key === 'action'">
                <img src="@/assets/IconMenuTooltip.svg" alt="" class="menu-tooltip">
              </template>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
import { ref } from 'vue'
import AddIcon from '@/assets/Icon/QuanTriPageIcons/AddIcon.vue'
import { SearchOutlined } from '@ant-design/icons-vue';

export default {
  components: { AddIcon, SearchOutlined },
  setup() {
    const columns = ref([
      {
        title: 'Nhân viên',
        name: 'nv',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Chức vụ',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
      },
      {
        // title: '+',
        key: 'action',
      }
    ])
    const dataSource = ref([
      {
        id: 0,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: true
      },
      {
        id: 1,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: true
      },
      {
        id: 2,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: true
      },
      {
        id: 3,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: true
      },
      {
        id: 4,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: false
      },
      {
        id: 5,
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Giang Minh Nhật',
        phone: '0123123123',
        role: 'Giám đốc',
        status: true
      }
    ])
    return {
      columns,
      dataSource
    }
  }
}
</script>
<style lang="scss">
.table-listtk.ant-table-wrapper {
  .ant-table-thead > tr > th .ant-table-filter-icon {
    right: auto;
    background: none;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .ant-table-filter-icon:hover {
    background: none;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters .ant-table-filter-icon.ant-table-filter-open {
    background: none;
  }
  .ant-table-wrapper {
    margin-top: 0;
  }
  .ant-table table {
    font-size: 14px;
  }
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background-color: #f0f0f0;
  }
  .user-fullName {
    padding-left: 5px;
    cursor: pointer;
    font-weight: 500;
    color: #0080F6
  }
  .user-phone {
    font-weight: bold;
  }
  .avatar-user {
    max-width: 25px;
    max-height: 25px;
    border-radius: 50%;
  }
  .ant-table-thead > tr > th {
    background: none;
    color: #868181;
  }
  .ant-pagination-item {
    background-color: #ffffff;
  }
  .ant-pagination-item-active {
    background-color: #EF4129;
    border: none;
    font-weight: bold;
  }
  .ant-pagination-item-active:focus a, .ant-pagination-item-active:hover a {
    border: none;
    color: white
  }
  .ant-pagination-item a {
    color: #d0d0d0;
  }
  .ant-pagination-prev .ant-pagination-item-link {
    display: none;
  }
  .ant-pagination-next .ant-pagination-item-link {
    display: none;
  }
  .ant-table-tbody > tr > td > span > img {
    padding-right: 0px;
  }
  .ant-table-row-cell-break-word {
    font-weight: 400;
    color: #262626;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    padding-left: 45px;
  }
  .ant-table-container table > tbody > tr td:last-child {
    padding-left: 25px;
  }
  .menu-tooltip.ant-table-cell {
    left: 0.5%
  }
}
.quantri-page-container {
  .body-container {
    padding-top: 20px;
    .user-online {
      color: #00AC30;
    }
    .user-offline {
      color: #d0d0d0;
    }
  }
  .header-title-container {
    display: flex;
    justify-content: flex-start;
    .header-title {
      font-size: 32px;
      color: #910D10;
      font-weight: 700;
      margin: 0;
    }
    .header-info {
      color: #262626;
      font-weight: 500;
    }
    .date{
      color: #EF4129;
      margin-bottom: 20px
    }
  }

  .search-field {
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
    height: 80%;
    .input-field {
      width: 100%;
      border-radius: 6px;
      border: 1px solid #d0d0d0;
      z-index: 1;
      outline-offset: unset;
      padding-left: 5%;
      font-size: 14px;
      line-height: 25px;
    }
    .search-icon {
      right: 5%;
      z-index: 10;
      position: absolute;
      color: #262626
    }
  }
}
</style>
