<template>
  <el-container>
    <el-header>
      <tool-bar></tool-bar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <data-list></data-list>
      </el-aside>
      <el-container>
        <el-main>
          <tab-area></tab-area>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import ToolBar from '@/components/ToolBar'
  import TabArea from '@/components/TabArea'
  import DataList from '@/components/DataList'

  export default {
    components: {
      ToolBar,
      TabArea,
      DataList
    },
    data () {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }

      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>


<style>
</style>