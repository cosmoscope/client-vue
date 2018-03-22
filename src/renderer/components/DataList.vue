<template>
    <div>
        <el-table
            ref='multipleTable'
            :data='tableData3'
            style='width: 100%'
            @selection-change='handleSelectionChange'>
            <el-table-column
                type='selection'
                width='55'>
            </el-table-column>
            <el-table-column
                property='name'
                label='Name'>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>