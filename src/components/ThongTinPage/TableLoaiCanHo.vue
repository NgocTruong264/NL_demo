<template>
  <a-row class="table-loaicanho-container">
    <a-col span="24">
      <a-row>
        <a-col class="body-container" :span="24">
          <a-table
            :columns="columns"
            :data-source="dataSource"
            class="table-list-loaicanho"
            :row-key="(record) => record.id"
            :pagination="false"
          >
            <template #headerCell="{ column }">
              <span style="font-weight: bold; text-align: center;">{{ column.title }}</span>
              <template v-if="column.key === 'action'">
                <AddIcon />
              </template>
            </template>
            <template #bodyCell="{column}">
              <template v-if="column.key === 'action'">
                <img src="@/assets/Icon/FunctionIcons/IconMenuTooltip.svg" alt="">
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
export default {
  components: { AddIcon },
  setup() {
    const columns = ref([
      {
        title: 'Loại căn hộ',
        name: 'type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Số lượng',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'Phòng ngủ',
        dataIndex: 'bedroom',
        key: 'bedrooom',
      },
      {
        title: 'Bếp',
        dataIndex: 'kitchen',
        key: 'kitchen'
      },
      {
        title: 'Phòng vệ sinh',
        key: 'toilet',
        dataIndex: 'toilet',
      },
      {
        title: 'Ban công',
        key: 'balcony',
        dataIndex: 'balcony'
      },
      {
        // title: '+',
        key: 'action',
        align: 'center'
      }
    ])
    const dataSource = ref([
      {
        type: 'Thông thường',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
      {
        type: 'Studio',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
      {
        type: 'Office',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
      {
        type: 'Shophouse',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
      {
        type: 'Penthouse',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
      {
        type: 'Duplex',
        amount: 1000,
        bedroom: 2,
        kitchen: 1,
        toilet: 2,
        balcony: 1
      },
    ])
    return {
      columns,
      dataSource
    }
  }
}
</script>
<style lang="scss">
.table-list-loaicanho.ant-table-wrapper {
  border-radius: 8px;
  .ant-table table {
    font-size: 12px;
  }
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background-color: #f0f0f0;
  }
  .ant-table-thead > tr > th {
    background: none;
    color: #868181;
  }
  .ant-table-row-cell-break-word {
    font-weight: 400;
    color: #262626;
  }
  .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }
  .ant-table-tbody > tr > td, th {
    border: none
  }
}
.table-loaicanho-container {
  // padding: 8px 20px;
  margin: 32px 16px;
}
</style>
