 <template>
 <div>
    <el-button type="primary" size ="small" @click="createUser" plain>新建</el-button>
    <el-button type="primary" size ="small" @click="updateUser" plain>修改</el-button>
    <el-button  type="danger"  size ="small" @click="deleteUser" plain>删除</el-button>
    <el-table :data="tableData" @selection-change="changeFun">
      <el-table-column type="selection" prop='id'></el-table-column>
      <el-table-column prop="id" label="ID" ></el-table-column>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="age" label="年龄" ></el-table-column>
      <el-table-column prop="password" label="密码" ></el-table-column>
      <el-table-column prop="birthday" label="出生年月" ></el-table-column>
      <el-table-column prop="sex" label="性别" ></el-table-column>
    </el-table>
          <el-pagination background layout="prev, pager, next, total" :total="total" @current-change="handleCurrentChange"></el-pagination>
 </div>
  </template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      tableData: [],
      total: 0,
      multipleSelection: []
    }
  },
  created () {
    this.$http.get('http://localhost:8081/users/list').then(response => {
      this.tableData = response.data.content
      this.total = response.data.totalElements
    })
  },
  methods: {
    createUser () {
      this.$router.push({ name: 'user-input' })
    },
    updateUser () {
      this.$router.push({ name: 'user-input', params: { user: this.multipleSelection[0] } })
    },
    changeFun (val) {
      this.multipleSelection = val
    },
    deleteUser (rows) {
      if (this.multipleSelection.length !== 1) {
        this.$alert('请选择一条记录', '删除用户', {
          confirmButtonText: '确定'
        })
        return
      }
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete('http://localhost:8081/users/' + (this.multipleSelection[0].id)).then(response => {
          this.$http.get('http://localhost:8081/users/list').then(response => {
            this.tableData = response.data.content
            this.total = response.data.totalElements
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleCurrentChange (val) {
      this.$http.get('http://localhost:8081/users/list?pageNum=' + (val - 1)).then(response => {
        this.tableData = response.data.content
        this.total = response.data.totalElements
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
